# SourceSubtypeV2Profile

# SourceSubtypeV2Profile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique identifier for the connector variant profile. | [optional] 
**ConnectorType** | **String** | Connector type of the variant. | [optional] 
**Variant** | **String** | Name of the connector variant. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceSubtypeV2Profile = Initialize-SourceSubtypeV2Profile  -Id 9a4b7d2e-1c3f-4e5a-8b6c-7d8e9f0a1b2c `
 -ConnectorType JDBC `
 -Variant MySql
```

- Convert the resource to JSON
```powershell
$SourceSubtypeV2Profile | ConvertTo-JSON
```


[[Back to top]](#) 

