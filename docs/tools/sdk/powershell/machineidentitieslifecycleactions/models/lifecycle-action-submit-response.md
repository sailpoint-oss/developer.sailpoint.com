# LifecycleActionSubmitResponse

# LifecycleActionSubmitResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **String** | Unique identifier for the created lifecycle request. | [required]
**Status** | **Lifecyclestatus** |  | [required]
**Action** | **Lifecycleaction** |  | [required]
**TargetId** | **String** | ID of the machine identity the request applies to. | [required]
**ResourceId** | **String** | ID of the machine identity in its source system, when available. | [optional] 
**CreatedAt** | **System.DateTime** | Time when the lifecycle request was created (ISO-8601). | [required]

## Examples

- Prepare the resource
```powershell
$LifecycleActionSubmitResponse = Initialize-LifecycleActionSubmitResponse  -RequestId a1b2c3d4-e5f6-7890-abcd-ef1234567890 `
 -Status null `
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

