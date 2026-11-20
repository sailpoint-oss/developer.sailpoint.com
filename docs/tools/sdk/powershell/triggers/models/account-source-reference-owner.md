# AccountSourceReferenceOwner

# AccountSourceReferenceOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the source owner. | [required]
**Name** | **String** | Name of the source owner. | [required]

## Examples

- Prepare the resource
```powershell
$AccountSourceReferenceOwner = Initialize-AccountSourceReferenceOwner  -Id owner-123 `
 -Name owner-name
```

- Convert the resource to JSON
```powershell
$AccountSourceReferenceOwner | ConvertTo-JSON
```


[[Back to top]](#) 

