# Datadictionaryfieldlistitem

# Datadictionaryfieldlistitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The unique field name. | [required]
**FieldType** | **String** | The field data type. Custom fields are always String. | [required]
**DataDictionaryType** |  **Enum** [  "Users",    "Roles",    "Permission Types",    "Business Resources" ] | The data dictionary that owns this field. | [required]
**Required** | **Boolean** | Whether the field is required. Custom fields returned by list are always false. | [required]

## Examples

- Prepare the resource
```powershell
$Datadictionaryfieldlistitem = Initialize-Datadictionaryfieldlistitem  -Name Department `
 -FieldType String `
 -DataDictionaryType Users `
 -Required false
```

- Convert the resource to JSON
```powershell
$Datadictionaryfieldlistitem | ConvertTo-JSON
```


[[Back to top]](#) 

