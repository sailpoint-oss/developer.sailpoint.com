# FormDefinitionSelfImportExportDto

# FormDefinitionSelfImportExportDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "FORM_DEFINITION" ] | Imported/exported object's DTO type. | [optional] 
**Id** | **String** | Imported/exported object's ID. | [optional] 
**Name** | **String** | Imported/exported object's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$FormDefinitionSelfImportExportDto = Initialize-FormDefinitionSelfImportExportDto  -Type FORM_DEFINITION `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name Temporary User Level Permissions - Requester
```

- Convert the resource to JSON
```powershell
$FormDefinitionSelfImportExportDto | ConvertTo-JSON
```


[[Back to top]](#) 

