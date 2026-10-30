# IdentityEntitlements

# IdentityEntitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRef** | [**TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**Tags** | **[]String** | Labels to be applied to object. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityEntitlements = Initialize-IdentityEntitlements  -ObjectRef null `
 -Tags ["BU_FINANCE","PCI"]
```

- Convert the resource to JSON
```powershell
$IdentityEntitlements | ConvertTo-JSON
```


[[Back to top]](#) 

