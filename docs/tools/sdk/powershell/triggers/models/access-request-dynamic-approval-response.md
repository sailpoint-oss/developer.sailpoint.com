# AccessRequestDynamicApprovalResponse

# AccessRequestDynamicApprovalResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique identifier of the approver to add to the approval process. If there is none, send an empty value """". | [required]
**Type** |  **Enum** [  "IDENTITY",    "GOVERNANCE_GROUP" ] | Type of approver to add to the approval process. If there is none, send an empty value """". | [required]
**Name** | **String** | Name of the approver to add to the approval process. If there is none, send an empty value """". | [required]

## Examples

- Prepare the resource
```powershell
$AccessRequestDynamicApprovalResponse = Initialize-AccessRequestDynamicApprovalResponse  -Id 2c91808b6ef1d43e016efba0ce470906 `
 -Type IDENTITY `
 -Name Adam Adams
```

- Convert the resource to JSON
```powershell
$AccessRequestDynamicApprovalResponse | ConvertTo-JSON
```


[[Back to top]](#) 

