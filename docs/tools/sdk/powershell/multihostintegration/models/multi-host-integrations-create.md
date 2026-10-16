# MultiHostIntegrationsCreate

# MultiHostIntegrationsCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Multi-Host Integration's human-readable name. | [required]
**Description** | **String** | Multi-Host Integration's human-readable description. | [required]
**Owner** | [**MultiHostIntegrationsOwner**](multi-host-integrations-owner) |  | [required]
**Cluster** | [**MultiHostIntegrationsCluster**](multi-host-integrations-cluster) |  | [optional] 
**Connector** | **String** | Connector script name. | [required]
**ConnectorAttributes** | **map[string]AnyType** | Multi-Host Integration specific configuration. User can add any number of additional attributes. e.g. maxSourcesPerAggGroup, maxAllowedSources etc. | [optional] 
**ManagementWorkgroup** | [**MultiHostIntegrationsManagementWorkgroup**](multi-host-integrations-management-workgroup) |  | [optional] 
**Created** | **System.DateTime** | Date-time when the source was created | [optional] 
**Modified** | **System.DateTime** | Date-time when the source was last modified. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiHostIntegrationsCreate = Initialize-MultiHostIntegrationsCreate  -Name My Multi-Host Integration `
 -Description This is the Multi-Host Integration. `
 -Owner null `
 -Cluster null `
 -Connector multihost-microsoft-sql-server `
 -ConnectorAttributes {"maxSourcesPerAggGroup":10,"maxAllowedSources":300} `
 -ManagementWorkgroup null `
 -Created 2022-02-08T14:50:03.827Z `
 -Modified 2024-01-23T18:08:50.897Z
```

- Convert the resource to JSON
```powershell
$MultiHostIntegrationsCreate | ConvertTo-JSON
```


[[Back to top]](#) 

