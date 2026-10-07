# Identitycollectorlistitem

# Identitycollectorlistitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique identifier of the identity collector. | [optional] 
**Name** | **String** | The display name of the identity collector. | [optional] 
**Type** | **String** | The identity collector type, derived from its underlying source. | [optional] 
**SourceId** | **String** | The identifier of the source the identity collector is associated with, represented as a UUID. Both hyphenated and non-hyphenated formats are accepted. | [optional] 
**Users** | [**Identitycollectorcollectionsettings**](identitycollectorcollectionsettings) |  | [optional] 
**Groups** | [**Identitycollectorcollectionsettings**](identitycollectorcollectionsettings) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Identitycollectorlistitem = Initialize-Identitycollectorlistitem  -Id 12345 `
 -Name Active Directory Identity Collector `
 -Type Active Directory `
 -SourceId 2c9180835d2e5168015d32f890ca1581 `
 -Users null `
 -Groups null
```

- Convert the resource to JSON
```powershell
$Identitycollectorlistitem | ConvertTo-JSON
```


[[Back to top]](#) 

