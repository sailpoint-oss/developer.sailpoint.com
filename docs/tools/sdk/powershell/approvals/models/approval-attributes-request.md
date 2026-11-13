# ApprovalAttributesRequest

# ApprovalAttributesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalAttributes** | **map[string]String** | Additional attributes as key-value pairs that are not part of the standard schema but can be included for custom data. | [optional] 
**Comment** | **String** | Comment associated with the request. | [optional] 
**RemoveAttributeKeys** | **[]String** | List of attribute keys to be removed. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalAttributesRequest = Initialize-ApprovalAttributesRequest  -AdditionalAttributes {"additionalProp1":"string","additionalProp2":"string","additionalProp3":"string"} `
 -Comment comment `
 -RemoveAttributeKeys ["string"]
```

- Convert the resource to JSON
```powershell
$ApprovalAttributesRequest | ConvertTo-JSON
```


[[Back to top]](#) 

