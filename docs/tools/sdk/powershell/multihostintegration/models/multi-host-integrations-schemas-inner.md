# MultiHostIntegrationsSchemasInner

# MultiHostIntegrationsSchemasInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "CONNECTOR_SCHEMA" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Schema ID. | [optional] 
**Name** | **String** | Schema's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiHostIntegrationsSchemasInner = Initialize-MultiHostIntegrationsSchemasInner  -Type CONNECTOR_SCHEMA `
 -Id 2c91808568c529c60168cca6f90c1777 `
 -Name MySchema
```

- Convert the resource to JSON
```powershell
$MultiHostIntegrationsSchemasInner | ConvertTo-JSON
```


[[Back to top]](#) 

