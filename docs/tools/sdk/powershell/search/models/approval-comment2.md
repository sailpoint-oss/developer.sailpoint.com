# ApprovalComment2

# ApprovalComment2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | The comment text | [optional] 
**Commenter** | **String** | The name of the commenter | [optional] 
**Date** | **System.DateTime** | A date-time in ISO-8601 format | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalComment2 = Initialize-ApprovalComment2  -Comment This request was autoapproved by our automated ETS subscriber. `
 -Commenter Automated AR Approval `
 -Date 2018-06-25T20:22:28.104Z
```

- Convert the resource to JSON
```powershell
$ApprovalComment2 | ConvertTo-JSON
```


[[Back to top]](#) 

