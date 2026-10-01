# LifecycleActionRequest

# LifecycleActionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Lifecycle request identifier. | [optional] 
**TenantId** | **String** | Tenant identifier for the lifecycle request. | [optional] 
**StatusType** | **String** | Generic request status type discriminator. | [optional] 
**RequestedBy** | **String** | Identity id of the principal that submitted the request. | [optional] 
**TargetType** |  **Enum** [  "AI_AGENT" ] | Resource type targeted by the lifecycle request. | [optional] 
**TargetId** | **String** | Internal machine identity UUID for the lifecycle target. | [optional] 
**OperationType** | **Lifecycleaction** |  | [optional] 
**WorkflowId** | **String** | Temporal workflow identifier for the lifecycle request. | [optional] 
**Completed** | **Boolean** | Indicates whether the lifecycle request has reached a terminal state. | [optional] [default to $false]
**Details** | [**LifecycleActionRequestDetails**](lifecycle-action-request-details) |  | [optional] 
**Created** | **System.DateTime** | Time when the lifecycle request was created (ISO-8601). | [optional] 
**Modified** | **System.DateTime** | Time when the lifecycle request was last modified (ISO-8601). | [optional] 

## Examples

- Prepare the resource
```powershell
$LifecycleActionRequest = Initialize-LifecycleActionRequest  -Id a1b2c3d4-e5f6-7890-abcd-ef1234567890 `
 -TenantId tenant-001 `
 -StatusType LIFECYCLE_ACTIONS_REQUEST `
 -RequestedBy 2c9180858082150f0180893dbaf44201 `
 -TargetType AI_AGENT `
 -TargetId 1c9c8e1f-2f5f-4f77-9f7e-5d37e4fb3ef0 `
 -OperationType null `
 -WorkflowId sp:resource-lifecycle:AI_AGENT:a1b2c3d4-e5f6-7890-abcd-ef1234567890 `
 -Completed false `
 -Details null `
 -Created 2026-05-26T19:00Z `
 -Modified 2026-05-26T19:05Z
```

- Convert the resource to JSON
```powershell
$LifecycleActionRequest | ConvertTo-JSON
```


[[Back to top]](#) 

