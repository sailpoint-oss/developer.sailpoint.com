# LifecycleActionSubmitResponse

# LifecycleActionSubmitResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **String** | Unique identifier for the created lifecycle request. | [required]
**Status** | **String** | Initial lifecycle request status. | [required]
**Action** | **Lifecycleaction** |  | [required]
**TargetId** | **String** | Internal machine identity UUID for the lifecycle target. | [required]
**ResourceId** | **String** | Connector resource id for the lifecycle target, when present. | [optional] 
**CreatedAt** | **System.DateTime** | Time when the lifecycle request was created (ISO-8601). | [required]

## Examples

- Prepare the resource
```powershell
$LifecycleActionSubmitResponse = Initialize-LifecycleActionSubmitResponse  -RequestId a1b2c3d4-e5f6-7890-abcd-ef1234567890 `
 -Status RECEIVED `
 -Action null `
 -TargetId 1c9c8e1f-2f5f-4f77-9f7e-5d37e4fb3ef0 `
 -ResourceId aws:bedrock:agent-42 `
 -CreatedAt 2026-05-26T19:00Z
```

- Convert the resource to JSON
```powershell
$LifecycleActionSubmitResponse | ConvertTo-JSON
```


[[Back to top]](#) 

