# ApprovalInfoResponse

# ApprovalInfoResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the id of approver | [optional] 
**Name** | **String** | the name of approver | [optional] 
**Status** | **String** | the status of the approval request | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalInfoResponse = Initialize-ApprovalInfoResponse  -Id 8a80828f643d484f01643e14202e2000 `
 -Name John Snow `
 -Status Approved
```

- Convert the resource to JSON
```powershell
$ApprovalInfoResponse | ConvertTo-JSON
```


[[Back to top]](#) 

