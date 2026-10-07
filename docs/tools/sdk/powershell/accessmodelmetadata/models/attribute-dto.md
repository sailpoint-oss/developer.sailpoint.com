# AttributeDTO

# AttributeDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | Technical name of the Attribute. This is unique and cannot be changed after creation. Allowed characters are letters, numbers, dashes (-), and underscores (_); the value cannot start or end with a dash or underscore. | [optional] 
**Name** | **String** | The display name of the key. Allowed characters are letters, numbers, whitespace, and the following special characters: . / | , ( ) & _ - | [optional] 
**Multiselect** | **Boolean** | Indicates whether the attribute can have multiple values. | [optional] [default to $false]
**IsAdhoc** | **Boolean** | Indicates whether this Attribute supports ad-hoc (dynamically created) values, in addition to pre-defined static values. Ad-hoc values are created dynamically through an internal service-to-service flow rather than through the public create-value API. This field can be set when creating an Attribute; if omitted, it defaults to false. | [optional] [default to $false]
**Status** | **String** | The status of the Attribute. | [optional] 
**Type** | **String** | The type of the Attribute. This can be either ""custom"" or ""governance"". | [optional] 
**ObjectTypes** | **[]String** | An array of object types this attributes values can be applied to. Possible values are ""all"" or ""entitlement"". Value ""all"" means this attribute can be used with all object types that are supported. | [optional] 
**Description** | **String** | The description of the Attribute. Allowed characters are letters, numbers, whitespace, and the following special characters: . / | , ( ) & _ : - | [optional] 
**Values** | [**[]AttributeValueDTO**](attribute-value-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributeDTO = Initialize-AttributeDTO  -Key iscPrivacy `
 -Name Privacy `
 -Multiselect false `
 -IsAdhoc false `
 -Status active `
 -Type governance `
 -ObjectTypes ["entitlement"] `
 -Description Specifies the level of privacy associated with an access item. `
 -Values null
```

- Convert the resource to JSON
```powershell
$AttributeDTO | ConvertTo-JSON
```


[[Back to top]](#) 

