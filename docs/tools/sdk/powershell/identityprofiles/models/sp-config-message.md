# SpConfigMessage

# SpConfigMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | Message key. | [required]
**Text** | **String** | Message text. | [required]
**Details** | **map[string]AnyType** | Message details if any, in key:value pairs. | [required]

## Examples

- Prepare the resource
```powershell
$SpConfigMessage = Initialize-SpConfigMessage  -Key UNKNOWN_REFERENCE_RESOLVER `
 -Text Unable to resolve reference for object [type: IDENTITY, id: 2c91808c746e9c9601747d6507332ecz, name: random identity] `
 -Details {"details":"message details"}
```

- Convert the resource to JSON
```powershell
$SpConfigMessage | ConvertTo-JSON
```


[[Back to top]](#) 

