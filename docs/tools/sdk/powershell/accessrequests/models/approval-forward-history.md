# ApprovalForwardHistory

# ApprovalForwardHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OldApproverName** | **String** | Display name of approver from whom the approval was forwarded. | [optional] 
**NewApproverName** | **String** | Display name of approver to whom the approval was forwarded. | [optional] 
**Comment** | **String** | Comment made while forwarding. | [optional] 
**Modified** | **System.DateTime** | Time at which approval was forwarded. | [optional] 
**ForwarderName** | **String** | Display name of forwarder who forwarded the approval. | [optional] 
**ReassignmentType** | **ReassignmentType** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalForwardHistory = Initialize-ApprovalForwardHistory  -OldApproverName Frank Mir `
 -NewApproverName Al Volta `
 -Comment Forwarding from Frank to Al `
 -Modified 2019-08-23T18:52:57.398Z `
 -ForwarderName William Wilson `
 -ReassignmentType null
```

- Convert the resource to JSON
```powershell
$ApprovalForwardHistory | ConvertTo-JSON
```


[[Back to top]](#) 

