# TranslationMessage

# TranslationMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | The key of the translation message | [optional] 
**Values** | **[]String** | The values corresponding to the translation messages | [optional] 

## Examples

- Prepare the resource
```powershell
$TranslationMessage = Initialize-TranslationMessage  -Key recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH `
 -Values ["75","department"]
```

- Convert the resource to JSON
```powershell
$TranslationMessage | ConvertTo-JSON
```


[[Back to top]](#) 

