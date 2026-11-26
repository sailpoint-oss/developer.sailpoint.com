# FieldDetailsDto

# FieldDetailsDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the attribute. | [optional] [default to ""]
**Transform** | **SystemCollectionsHashtable** | The transform to apply to the field. | [optional] 
**Attributes** | **SystemCollectionsHashtable** | Attributes required for the transform. | [optional] 
**IsRequired** | **Boolean** | Flag indicating whether or not the attribute is required. | [optional] [default to $false]
**Type** | **String** | The type of the attribute. | [optional] [default to "string"]
**IsMultiValued** | **Boolean** | Flag indicating whether or not the attribute is multi-valued. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$FieldDetailsDto = Initialize-FieldDetailsDto  -Name userName `
 -Transform {"type":"rule","attributes":{"name":"Create Unique LDAP Attribute"}} `
 -Attributes {"template":"firstname.lastname.uniqueCounter","cloudMaxUniqueChecks":"50","cloudMaxSize":"20","cloudRequired":"true"} `
 -IsRequired false `
 -Type string `
 -IsMultiValued false
```

- Convert the resource to JSON
```powershell
$FieldDetailsDto | ConvertTo-JSON
```


[[Back to top]](#) 

