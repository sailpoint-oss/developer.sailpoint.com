# CancelLifecycleActionResponse

# CancelLifecycleActionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **String** | Lifecycle request identifier. | [required]
**Status** |  **Enum** [  "CANCELING" ] | Status of the request after the cancel is accepted. Always `CANCELING`. | [required]
**Action** | **Lifecycleaction** |  | [required]
**TargetId** | **String** | ID of the machine identity the request applies to. | [required]
**ResourceId** | **String** | ID of the machine identity in its source system, when available. | [optional] 

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

