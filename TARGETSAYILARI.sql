DECLARE @DB_Name varchar(100)

DECLARE @MainQuery nvarchar(MAX)
DECLARE @Comm nvarchar(MAX)
DECLARE @CommJS nvarchar(MAX)
DECLARE @CommSP nvarchar(MAX)
DECLARE @CommSL nvarchar(MAX)
DECLARE @CommNB nvarchar(MAX)
DECLARE @CommOT nvarchar(MAX)

DECLARE @BeginDate nvarchar(MAX)
DECLARE @EndDate nvarchar(MAX)

SELECT @BeginDate = '''2021-02-06'''
SELECT @EndDate = '''2021-02-12'''

DECLARE database_cursor CURSOR FOR
SELECT name

FROM MASTER.sys.sysdatabases Where name like 'OfferMiner[_]%' AND  name not in('OfferMiner_1380','OfferMiner_1379','OfferMiner_1377','OfferMiner_1378','OfferMiner_1376','OfferMiner_1375','OfferMiner_1374','OfferMiner_1373','OfferMiner_1372','OfferMiner_1371','OfferMiner_1370','OfferMiner_1369','OfferMiner_1368','OfferMiner_1360','OfferMiner_1362','OfferMiner_1363','OfferMiner_1365','OfferMiner_1366','OfferMiner_1367','OfferMiner_1364','OfferMiner_1361','OfferMiner_1319','OfferMiner_1349','OfferMiner_1286' ,'OfferMiner_1154' ,'OfferMiner_1127' , 'OfferMiner_1129' ,'OfferMiner_1130','OfferMiner_1131' ,'OfferMiner_825' , 'OfferMiner_903' ,'OfferMiner_1170' , 'OfferMiner_1220' , 'OfferMiner_1221' , 'OfferMiner_1140' , 'OfferMiner_1141' , 'OfferMiner_1142' , 'OfferMiner_1143' , 'OfferMiner_1145' , 'OfferMiner_1146' , 'OfferMiner_1147' ,'OfferMiner_1149' , 'OfferMiner_1150' , 'OfferMiner_1224' ,'OfferMiner_1156' , 'OfferMiner_1163' , 'OfferMiner_1164' ,'OfferMiner_1165' , 'OfferMiner_1166' , 'OfferMiner_1169' , 'OfferMiner_659' , 'OfferMiner_899' , 'OfferMiner_900' , 'OfferMiner_1187' ,'OfferMiner_1201' , 'OfferMiner_1202' ,'OfferMiner_1231' ,'OfferMiner_1294' )
 
OPEN database_cursor

FETCH NEXT FROM database_cursor INTO @DB_Name
 
WHILE @@FETCH_STATUS = 0
BEGIN


SELECT @Comm = CONCAT(@Comm, 'SELECT' +''''+SUBSTRING(@DB_Name, 12,4)+''''+'as profileID,COUNT(ActionID) as Total from '+@DB_Name+'.dbo.TargetingActions WHERE ValidFrom BETWEEN ', @BeginDate, ' AND ', @EndDate ,' UNION ALL ')

SELECT @CommJS = CONCAT(@CommJS, 'SELECT' +''''+SUBSTRING(@DB_Name, 12,4)+''''+'as profileID,COUNT(ActionID) as TotalJS from '+@DB_Name+'.dbo.TargetingActions WHERE ActionType=4 AND ValidFrom BETWEEN ', @BeginDate, ' AND ', @EndDate ,' UNION ALL ')

SELECT @CommSP = CONCAT(@CommSP, 'SELECT' +''''+SUBSTRING(@DB_Name, 12,4)+''''+'as profileID,COUNT(ActionID) as TotalSP from '+@DB_Name+'.dbo.TargetingActions WHERE ActionType=15 AND ValidFrom BETWEEN ', @BeginDate, ' AND ', @EndDate ,' UNION ALL ')

SELECT @CommSL = CONCAT(@CommSL, 'SELECT' +''''+SUBSTRING(@DB_Name, 12,4)+''''+'as profileID,COUNT(ActionID) as TotalSL from '+@DB_Name+'.dbo.TargetingActions WHERE ActionType=5 AND
 ValidFrom BETWEEN ', @BeginDate, ' AND ', @EndDate ,' UNION ALL ')

SELECT @CommNB = CONCAT(@CommNB, 'SELECT' +''''+SUBSTRING(@DB_Name, 12,4)+''''+'as profileID,COUNT(ActionID) as TotalNB from '+@DB_Name+'.dbo.TargetingActions WHERE ActionType=12 AND
 ValidFrom BETWEEN ', @BeginDate, ' AND ', @EndDate ,' UNION ALL ')

SELECT @CommOT = CONCAT(@CommOT, 'SELECT' +''''+SUBSTRING(@DB_Name, 12,4)+''''+'as profileID,COUNT(ActionID) as TotalOT from '+@DB_Name+'.dbo.TargetingActions WHERE ActionType NOT IN (''4'',''5'',''12'',''15'') AND ValidFrom BETWEEN ', @BeginDate, ' AND ', @EndDate ,' UNION ALL ')


FETCH NEXT FROM database_cursor INTO @DB_Name
 
END
--
CLOSE database_cursor

DEALLOCATE database_cursor


SELECT @Comm = SUBSTRING(@Comm, 0, (LEN(@Comm)-9))
SELECT @CommJS = SUBSTRING(@CommJS, 0, (LEN(@CommJS)-9))
SELECT @CommSP = SUBSTRING(@CommSP, 0, (LEN(@CommSP)-9))
SELECT @CommSL = SUBSTRING(@CommSL, 0, (LEN(@CommSL)-9))
SELECT @CommNB = SUBSTRING(@CommNB, 0, (LEN(@CommNB)-9))
SELECT @CommOT = SUBSTRING(@CommOT, 0, (LEN(@CommOT)-9))


SELECT @MainQuery = CONCAT('SELECT CONVERT(int, t.profileID) as ProfileID, tJS.TotalJS, tSP.TotalSP, tSL.TotalSL, tNB.TotalNB, tOT.TotalOT, t.Total FROM (', @Comm, ') AS t
                                    LEFT JOIN (', @CommJS, ') AS tJS ON t.profileID = tJS.profileID
                                    LEFT JOIN (', @CommSP,') AS tSP ON t.profileID = tSP.profileID
                                    LEFT JOIN (', @CommSL, ') AS tSL ON t.profileID = tSL.profileID
                                    LEFT JOIN (', @CommNB, ') AS tNB ON t.profileID = tNB.profileID
                                    LEFT JOIN (', @CommOT, ') AS tOT ON t.profileID = tOT.profileID')


SELECT @MainQuery = CONCAT('SELECT OrganizationID, stats.ProfileID, SiteName,
                                    stats.TotalJS as ''Custom JS'',
                                    stats.TotalSP as ''Widget'',
                                    stats.TotalSL as ''Lightbox'',
                                    stats.TotalNB as ''Notification Box'',
                                    stats.TotalOT as ''Diğer'',
                                    stats.Total as ''Toplam''
                                FROM (', @MainQuery,') as stats LEFT JOIN [OfferMinerMaster].[dbo].[Sites] ON stats.profileID = Sites.SiteID WHERE SiteName IS NOT NULL  ORDER BY stats.ProfileID ASC')

EXEC sp_executesql @MainQuery

