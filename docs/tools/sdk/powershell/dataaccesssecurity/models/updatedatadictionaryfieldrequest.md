# Updatedatadictionaryfieldrequest

# Updatedatadictionaryfieldrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The field name. | [required]
**FieldType** | **String** | The field data type. Must match the current value. | [required]
**DataDictionaryType** |  **Enum** [  "Users",    "Roles",    "Permission Types",    "Business Resources" ] | The data dictionary that owns this field. Must match the current value. | [required]
**Required** | **Boolean** | Must match the current value. Custom fields must be false. | [required]

## Examples

- Prepare the resource
```powershell
$Updatedatadictionaryfieldrequest = Initialize-Updatedatadictionaryfieldrequest  -Name Cost Center `
 -FieldType String `
 -DataDictionaryType Users `
 -Required false
```

- Convert the resource to JSON
```powershell
$Updatedatadictionaryfieldrequest | ConvertTo-JSON
```


[[Back to top]](#) 

