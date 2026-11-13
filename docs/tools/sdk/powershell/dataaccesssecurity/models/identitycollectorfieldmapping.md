# Identitycollectorfieldmapping

# Identitycollectorfieldmapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FieldDictionaryName** | **String** | The name of the data dictionary field to map to. Dictionary fields of type Users apply to the users collection; dictionary fields of type Roles apply to the groups collection. | [required]
**SourceAttributeName** | **String** | The source attribute name to read at runtime. This may be a built-in attribute for the identity collector type or a custom attribute listed in `properties` for the same collection. Built-in attributes can be discovered using the identity collector properties metadata endpoint. | [required]

## Examples

- Prepare the resource
```powershell
$Identitycollectorfieldmapping = Initialize-Identitycollectorfieldmapping  -FieldDictionaryName UPTF-1 `
 -SourceAttributeName department
```

- Convert the resource to JSON
```powershell
$Identitycollectorfieldmapping | ConvertTo-JSON
```


[[Back to top]](#) 

