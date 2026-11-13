# RoleDocumentAllOfDimensionSchemaAttributes

# RoleDocumentAllOfDimensionSchemaAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Derived** | **Boolean** |  | [optional] [default to $true]
**DisplayName** | **String** | Displayname of the dimension attribute. | [optional] 
**Name** | **String** | Name of the dimension attribute. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleDocumentAllOfDimensionSchemaAttributes = Initialize-RoleDocumentAllOfDimensionSchemaAttributes  -Derived true `
 -DisplayName Department `
 -Name department
```

- Convert the resource to JSON
```powershell
$RoleDocumentAllOfDimensionSchemaAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

