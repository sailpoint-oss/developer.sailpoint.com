# SpConfigMessage2

# SpConfigMessage2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | Message key. | [required]
**Text** | **String** | Message text. | [required]
**Details** | **map[string]SystemCollectionsHashtable** | Message details if any, in key:value pairs. | [required]

## Examples

- Prepare the resource
```powershell
$SpConfigMessage2 = Initialize-SpConfigMessage2  -Key UNKNOWN_REFERENCE_RESOLVER `
 -Text Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity] `
 -Details {"details":"message details"}
```

- Convert the resource to JSON
```powershell
$SpConfigMessage2 | ConvertTo-JSON
```


[[Back to top]](#) 

