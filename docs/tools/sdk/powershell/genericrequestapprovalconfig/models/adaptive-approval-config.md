# AdaptiveApprovalConfig

# AdaptiveApprovalConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scheme** |  **Enum** [  "WORKFLOW" ] | Discriminator. Must be WORKFLOW for adaptive platform-workflow approval. | [required]
**WorkflowId** | **String** | Identifier of the platform workflow that decides the request. | [required]

## Examples

- Prepare the resource
```powershell
$AdaptiveApprovalConfig = Initialize-AdaptiveApprovalConfig  -Scheme WORKFLOW `
 -WorkflowId 8c190e67-2a90-4c2a-9f1e-1c5d0b6a4e21
```

- Convert the resource to JSON
```powershell
$AdaptiveApprovalConfig | ConvertTo-JSON
```


[[Back to top]](#) 

