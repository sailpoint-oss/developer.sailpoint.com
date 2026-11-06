# FormSubmittedSubmittedBy

# FormSubmittedSubmittedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of the identity who submitted the form. | [required]
**Id** | **String** | Unique identifier of the identity who submitted the form. | [required]
**Name** | **String** | Name of the identity who submitted the form. | [required]

## Examples

- Prepare the resource
```powershell
$FormSubmittedSubmittedBy = Initialize-FormSubmittedSubmittedBy  -Type IDENTITY `
 -Id 2c9180845d1edece015d27a9717c3e19 `
 -Name Rob.Robertson
```

- Convert the resource to JSON
```powershell
$FormSubmittedSubmittedBy | ConvertTo-JSON
```


[[Back to top]](#) 

