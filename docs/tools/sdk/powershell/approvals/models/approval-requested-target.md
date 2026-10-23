# ApprovalRequestedTarget

# ApprovalRequestedTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ForcedAuthSignature** | **String** | Signature required for forced authentication. | [optional] 
**Id** | **String** | ID of the requested target. | [optional] 
**Name** | **String** | Name of the requested target. | [optional] 
**ReauthRequired** | **Boolean** | Indicates if reauthentication is required. | [optional] [default to $false]
**RemovalDate** | **System.DateTime** | Date when the target will be removed. | [optional] 
**RequestType** | **String** | Type of the request. | [optional] 
**TargetType** | **String** | Type of the target. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalRequestedTarget = Initialize-ApprovalRequestedTarget  -ForcedAuthSignature string `
 -Id string `
 -Name string `
 -ReauthRequired true `
 -RemovalDate 2025-07-07T18:10:13.687Z `
 -RequestType string `
 -TargetType string
```

- Convert the resource to JSON
```powershell
$ApprovalRequestedTarget | ConvertTo-JSON
```


[[Back to top]](#) 

