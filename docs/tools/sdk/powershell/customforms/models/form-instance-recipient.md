# FormInstanceRecipient

# FormInstanceRecipient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID is a unique identifier | [optional] 
**Type** |  **Enum** [  "IDENTITY" ] | Type is a FormInstanceRecipientType value IDENTITY FormInstanceRecipientIdentity | [optional] 

## Examples

- Prepare the resource
```powershell
$FormInstanceRecipient = Initialize-FormInstanceRecipient  -Id 00000000-0000-0000-0000-000000000000 `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$FormInstanceRecipient | ConvertTo-JSON
```


[[Back to top]](#) 

