# ApprovalDescription

# ApprovalDescription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **String** | The description of what the approval is asking for | [optional] 
**Locale** | **String** | What locale the description of the approval is using | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalDescription = Initialize-ApprovalDescription  -Value This access allows viewing and editing of workflow resource `
 -Locale en_US
```

- Convert the resource to JSON
```powershell
$ApprovalDescription | ConvertTo-JSON
```


[[Back to top]](#) 

