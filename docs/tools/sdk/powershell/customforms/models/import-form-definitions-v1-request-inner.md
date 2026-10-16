# ImportFormDefinitionsV1RequestInner

# ImportFormDefinitionsV1RequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Object** | [**FormDefinitionResponse**](form-definition-response) |  | [optional] 
**Self** | **String** |  | [optional] 
**Version** | **Int32** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ImportFormDefinitionsV1RequestInner = Initialize-ImportFormDefinitionsV1RequestInner  -Object null `
 -Self null `
 -Version null
```

- Convert the resource to JSON
```powershell
$ImportFormDefinitionsV1RequestInner | ConvertTo-JSON
```


[[Back to top]](#) 

