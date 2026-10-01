# AttributeValueDTO

# AttributeValueDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **String** | Technical name of the Attribute value. This is unique and cannot be changed after creation. Allowed characters are letters, numbers, dashes (-), and underscores (_); the value cannot start or end with a dash or underscore. | [optional] 
**Name** | **String** | The display name of the Attribute value. Allowed characters are letters, numbers, whitespace, and the following special characters: . / | , ( ) & _ - | [optional] 
**Status** | **String** | The status of the Attribute value. | [optional] 
**Type** |  **Enum** [  "static",    "adhoc" ] | Indicates how this Attribute value was created. static values are pre-defined and created directly through this API. adhoc values are created dynamically through an internal service-to-service flow when the parent Attribute has isAdhoc set to true, and cannot be created directly through the public create-value API. | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributeValueDTO = Initialize-AttributeValueDTO  -Value public `
 -Name Public `
 -Status active `
 -Type static
```

- Convert the resource to JSON
```powershell
$AttributeValueDTO | ConvertTo-JSON
```


[[Back to top]](#) 

