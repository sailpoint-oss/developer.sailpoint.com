# Createdatadictionaryfieldrequest

# Createdatadictionaryfieldrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The unique field name to create. | [required]
**DataDictionaryType** |  **Enum** [  "Users",    "Roles",    "Permission Types",    "Business Resources" ] | The data dictionary that owns this field. | [required]

## Examples

- Prepare the resource
```powershell
$Createdatadictionaryfieldrequest = Initialize-Createdatadictionaryfieldrequest  -Name Department `
 -DataDictionaryType Users
```

- Convert the resource to JSON
```powershell
$Createdatadictionaryfieldrequest | ConvertTo-JSON
```


[[Back to top]](#) 

