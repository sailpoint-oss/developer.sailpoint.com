# OutlierFeatureTranslation

# OutlierFeatureTranslation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisplayName** | [**TranslationMessage**](translation-message) |  | [optional] 
**Description** | [**TranslationMessage**](translation-message) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$OutlierFeatureTranslation = Initialize-OutlierFeatureTranslation  -DisplayName null `
 -Description null
```

- Convert the resource to JSON
```powershell
$OutlierFeatureTranslation | ConvertTo-JSON
```


[[Back to top]](#) 

