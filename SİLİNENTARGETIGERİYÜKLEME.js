SELECT * FROM OfferMiner_3.dbo.TargetingActions WHERE ActionName LIKE '%CountDownBanner%'

BEGIN TRAN
UPDATE OfferMiner_3.dbo.TargetingActions SET IsActive=1, IsDeleted=0 WHERE ActionID=215
ROLLBACK TRAN