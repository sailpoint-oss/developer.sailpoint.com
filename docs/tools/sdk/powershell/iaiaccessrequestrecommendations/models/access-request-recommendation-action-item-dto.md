# AccessRequestRecommendationActionItemDto

# AccessRequestRecommendationActionItemDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | The identity ID taking the action. | [required]
**Access** | [**AccessRequestRecommendationItem**](access-request-recommendation-item) |  | [required]

## Examples

- Prepare the resource
```powershell
$AccessRequestRecommendationActionItemDto = Initialize-AccessRequestRecommendationActionItemDto  -IdentityId 2c91808570313110017040b06f344ec9 `
 -Access null
```

- Convert the resource to JSON
```powershell
$AccessRequestRecommendationActionItemDto | ConvertTo-JSON
```


[[Back to top]](#) 

