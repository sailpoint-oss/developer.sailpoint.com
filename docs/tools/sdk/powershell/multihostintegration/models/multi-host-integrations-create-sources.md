# MultiHostIntegrationsCreateSources

# MultiHostIntegrationsCreateSources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Source's human-readable name. | [required]
**Description** | **String** | Source's human-readable description. | [optional] 
**ConnectorAttributes** | **map[string]AnyType** | Connector specific configuration. This configuration will differ from type to type. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiHostIntegrationsCreateSources = Initialize-MultiHostIntegrationsCreateSources  -Name My Source `
 -Description This is the corporate directory. `
 -ConnectorAttributes {"authType":"SQLAuthentication","url":"jdbc:sqlserver://178.18.41.118:1433","user":"username","driverClass":"com.microsoft.sqlserver.jdbc.SQLServerDriver","maxSourcesPerAggGroup":10,"maxAllowedSources":300}
```

- Convert the resource to JSON
```powershell
$MultiHostIntegrationsCreateSources | ConvertTo-JSON
```


[[Back to top]](#) 

