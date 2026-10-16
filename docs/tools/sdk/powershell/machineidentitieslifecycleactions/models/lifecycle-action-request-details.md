# LifecycleActionRequestDetails

# LifecycleActionRequestDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **Lifecyclestatus** |  | [optional] 
**Action** | **Lifecycleaction** |  | [optional] 
**Approver** | [**LifecycleApproverReference**](lifecycle-approver-reference) |  | [optional] 
**ApprovedAt** | **System.DateTime** | Time when the request was approved (ISO-8601). | [optional] 
**Canceller** | [**LifecycleRequesterReference**](lifecycle-requester-reference) |  | [optional] 
**CanceledAt** | **System.DateTime** | Time when the request was canceled (ISO-8601). | [optional] 
**CancelComment** | **String** | Comment provided when the request was canceled. | [optional] 
**Comments** | [**[]LifecycleComment**](lifecycle-comment) | Append-only comment thread for the lifecycle request. | [optional] 
**FailurePhase** | **String** | Workflow phase where the request failed, when applicable. | [optional] 
**FailureReason** | **String** | Failure reason for the lifecycle request, when applicable. | [optional] 
**Resource** | [**LifecycleResourceSummary**](lifecycle-resource-summary) |  | [optional] 
**ResourceOwners** | [**[]LifecycleOwnerReference**](lifecycle-owner-reference) | Cached resource owners for the lifecycle target. | [optional] 
**SourceOwner** | [**LifecycleOwnerReference**](lifecycle-owner-reference) |  | [optional] 
**Requester** | [**LifecycleRequesterReference**](lifecycle-requester-reference) |  | [optional] 
**ApprovalRequestId** | **String** | Approvals identifier when the request was submitted. | [optional] 
**ApprovalSettingsId** | **String** | Approval settings identifier used for the request. | [optional] 
**Provisioning** | [**LifecycleProvisioning**](lifecycle-provisioning) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$LifecycleActionRequestDetails = Initialize-LifecycleActionRequestDetails  -Status null `
 -Action null `
 -Approver null `
 -ApprovedAt 2026-05-26T19:02Z `
 -Canceller null `
 -CanceledAt 2026-05-26T19:03Z `
 -CancelComment Cancelling - will resubmit after maintenance window `
 -Comments null `
 -FailurePhase WORKFLOW_START `
 -FailureReason Operation can't be performed on AgentAlias when Agent is in Not Prepared state. `
 -Resource null `
 -ResourceOwners null `
 -SourceOwner null `
 -Requester null `
 -ApprovalRequestId a0220198-4b01-444b-8ac3-7a8a147a3791 `
 -ApprovalSettingsId approval-settings-001 `
 -Provisioning null
```

- Convert the resource to JSON
```powershell
$LifecycleActionRequestDetails | ConvertTo-JSON
```


[[Back to top]](#) 

