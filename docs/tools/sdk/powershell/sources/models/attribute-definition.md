# AttributeDefinition

# AttributeDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the attribute. | [optional] 
**NativeName** | **String** | Attribute name in the native system. | [optional] 
**Type** | **AttributeDefinitionType** |  | [optional] 
**Schema** | [**AttributeDefinitionSchema**](attribute-definition-schema) |  | [optional] 
**Description** | **String** | A human-readable description of the attribute. | [optional] 
**IsMulti** | **Boolean** | Flag indicating whether or not the attribute is multi-valued. | [optional] [default to $false]
**IsEntitlement** | **Boolean** | Flag indicating whether or not the attribute is an entitlement. | [optional] [default to $false]
**IsGroup** | **Boolean** | Flag indicating whether or not the attribute represents a group. This can only be `true` if `isEntitlement` is also `true` **and** there is a schema defined for the attribute..  | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$AttributeDefinition = Initialize-AttributeDefinition  -Name sAMAccountName `
 -NativeName sAMAccountName `
 -Type null `
 -Schema null `
 -Description SAM Account Name `
 -IsMulti false `
 -IsEntitlement false `
 -IsGroup false
```

- Convert the resource to JSON
```powershell
$AttributeDefinition | ConvertTo-JSON
```


[[Back to top]](#) 

