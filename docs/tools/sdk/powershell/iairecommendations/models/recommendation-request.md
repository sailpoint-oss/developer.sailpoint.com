# RecommendationRequest

# RecommendationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | The identity ID | [optional] 
**Item** | [**AccessItemRef**](access-item-ref) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RecommendationRequest = Initialize-RecommendationRequest  -IdentityId 2c938083633d259901633d25c68c00fa `
 -Item null
```

- Convert the resource to JSON
```powershell
$RecommendationRequest | ConvertTo-JSON
```


[[Back to top]](#) 

