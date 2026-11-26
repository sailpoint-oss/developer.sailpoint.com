# AccessRequestRecommendationItem

# AccessRequestRecommendationItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of access item being recommended. | [optional] 
**Type** | **AccessRequestRecommendationItemType** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestRecommendationItem = Initialize-AccessRequestRecommendationItem  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Type null
```

- Convert the resource to JSON
```powershell
$AccessRequestRecommendationItem | ConvertTo-JSON
```


[[Back to top]](#) 

