SELECT * FROM Analytics_Product ap JOIN Analytics_Product_Detail apd ON ap.ProductID=apd.ProductID where ap.CategoryID='TELCEPSMT' and apd.IsDeleted=0

use OfferMinerMaster

select * from Sites where SiteName like '%boyner%'


use OfferMiner_1120

select Attribute4,TargetURL,* from Analytics_Product ap join Analytics_Product_Detail apd on apd.ProductID=ap.ProductID where Attribute1 is not null

SELECT * FROM OfferMinerMaster.dbo.SegmentMail_ESP_Configuration WITH(NOLOCK) WHERE WSUser='lidyana_ecomm_wsuser'