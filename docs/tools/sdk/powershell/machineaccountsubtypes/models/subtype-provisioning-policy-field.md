# SubtypeProvisioningPolicyField

# SubtypeProvisioningPolicyField

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the attribute. | [required]
**Transform** | **map[string]AnyType** | Transform to apply to the field. | [optional] 
**Attributes** | **map[string]AnyType** | Attributes required for the transform. | [optional] 
**IsRequired** | **Boolean** | Indicates whether the attribute is required. | [optional] [default to $false]
**Type** | **String** | Type of the attribute. | [optional] 
**IsMultiValued** | **Boolean** | Indicates whether the attribute is multi-valued. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$SubtypeProvisioningPolicyField = Initialize-SubtypeProvisioningPolicyField  -Name userName `
 -Transform {"type":"rule","attributes":{"name":"Create Unique LDAP Attribute"}} `
 -Attributes {"template":"{firstname}.{lastname}{uniqueCounter}","cloudMaxUniqueChecks":"50","cloudMaxSize":"20","cloudRequired":"true"} `
 -IsRequired false `
 -Type string `
 -IsMultiValued false
```

- Convert the resource to JSON
```powershell
$SubtypeProvisioningPolicyField | ConvertTo-JSON
```


[[Back to top]](#) 

