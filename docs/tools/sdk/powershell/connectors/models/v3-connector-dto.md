# V3ConnectorDto

# V3ConnectorDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The connector name | [optional] 
**Type** | **String** | The connector type | [optional] 
**ScriptName** | **String** | The connector script name | [optional] 
**ClassName** | **String** | The connector class name. | [optional] 
**Features** | **[]String** | The list of features supported by the connector | [optional] 
**DirectConnect** | **Boolean** | true if the source is a direct connect source | [optional] [default to $false]
**ConnectorMetadata** | **map[string]AnyType** | A map containing metadata pertinent to the connector | [optional] 
**Status** |  **Enum** [  "DEPRECATED",    "DEVELOPMENT",    "DEMO",    "RELEASED" ] | The connector status | [optional] 

## Examples

- Prepare the resource
```powershell
$V3ConnectorDto = Initialize-V3ConnectorDto  -Name name `
 -Type ServiceNow `
 -ScriptName servicenow `
 -ClassName sailpoint.connector.OpenConnectorAdapter `
 -Features ["PROVISIONING","SYNC_PROVISIONING","SEARCH","UNSTRUCTURED_TARGETS"] `
 -DirectConnect true `
 -ConnectorMetadata {"supportedUI":"ANGULAR","platform":"ccg","shortDesc":"connector description"} `
 -Status RELEASED
```

- Convert the resource to JSON
```powershell
$V3ConnectorDto | ConvertTo-JSON
```


[[Back to top]](#) 

