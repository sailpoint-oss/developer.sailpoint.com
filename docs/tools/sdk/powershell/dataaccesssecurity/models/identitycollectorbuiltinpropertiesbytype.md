# Identitycollectorbuiltinpropertiesbytype

# Identitycollectorbuiltinpropertiesbytype

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | Identity collector type display name. | [required]
**Users** | **[]String** | Built-in user source attribute names that can be used in field mappings for the identity collector type. | [required]
**Groups** | **[]String** | Built-in group source attribute names that can be used in field mappings for the identity collector type. | [required]

## Examples

- Prepare the resource
```powershell
$Identitycollectorbuiltinpropertiesbytype = Initialize-Identitycollectorbuiltinpropertiesbytype  -Type Azure Active Directory `
 -Users ["userPrincipalName","displayName","department"] `
 -Groups ["displayName","mailEnabled","objectId"]
```

- Convert the resource to JSON
```powershell
$Identitycollectorbuiltinpropertiesbytype | ConvertTo-JSON
```


[[Back to top]](#) 

