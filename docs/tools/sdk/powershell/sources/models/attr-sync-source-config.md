# AttrSyncSourceConfig

# AttrSyncSourceConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | [**AttrSyncSource**](attr-sync-source) |  | [required]
**Attributes** | [**[]AttrSyncSourceAttributeConfig**](attr-sync-source-attribute-config) | Attribute synchronization configuration for specific identity attributes in the context of a source | [required]

## Examples

- Prepare the resource
```powershell
$AttrSyncSourceConfig = Initialize-AttrSyncSourceConfig  -Source null `
 -Attributes [{"name":"email","displayName":"Email","enabled":true,"target":"mail"},{"name":"firstname","displayName":"First Name","enabled":false,"target":"givenName"}]
```

- Convert the resource to JSON
```powershell
$AttrSyncSourceConfig | ConvertTo-JSON
```


[[Back to top]](#) 

