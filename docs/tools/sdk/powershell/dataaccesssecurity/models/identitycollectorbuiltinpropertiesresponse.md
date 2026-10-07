# Identitycollectorbuiltinpropertiesresponse

# Identitycollectorbuiltinpropertiesresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Types** | [**[]Identitycollectorbuiltinpropertiesbytype**](identitycollectorbuiltinpropertiesbytype) | Built-in source attribute names grouped by identity collector type. | [required]

## Examples

- Prepare the resource
```powershell
$Identitycollectorbuiltinpropertiesresponse = Initialize-Identitycollectorbuiltinpropertiesresponse  -Types null
```

- Convert the resource to JSON
```powershell
$Identitycollectorbuiltinpropertiesresponse | ConvertTo-JSON
```


[[Back to top]](#) 

