# CancelLifecycleActionResponse

# CancelLifecycleActionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **String** | Lifecycle request identifier. | [required]
**Status** | **String** | Updated lifecycle request status after cancel acceptance. | [required]
**Action** | **Lifecycleaction** |  | [required]
**TargetId** | **String** | Internal machine identity UUID for the lifecycle target. | [required]
**ResourceId** | **String** | Connector resource id for the lifecycle target, when present. | [optional] 

## Examples

- Prepare the resource
```powershell
$CancelLifecycleActionResponse = Initialize-CancelLifecycleActionResponse  -RequestId a1b2c3d4-e5f6-7890-abcd-ef1234567890 `
 -Status CANCELING `
 -Action null `
 -TargetId 1c9c8e1f-2f5f-4f77-9f7e-5d37e4fb3ef0 `
 -ResourceId aws:bedrock:agent-42
```

- Convert the resource to JSON
```powershell
$CancelLifecycleActionResponse | ConvertTo-JSON
```


[[Back to top]](#) 

