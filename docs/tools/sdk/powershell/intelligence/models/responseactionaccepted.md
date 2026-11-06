# Responseactionaccepted

# Responseactionaccepted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **String** | Tracking handle and correlation id for the response action. | [required]
**Status** |  **Enum** [  "SUBMITTED",    "IN_PROGRESS",    "COMPLETED",    "FAILED" ] | Aggregate status of the response action. SUBMITTED at creation (registered; no correlated workflow execution observed yet). | [required]
**StatusUrl** | **String** | Relative URL to poll for the current status of the response action. | [required]

## Examples

- Prepare the resource
```powershell
$Responseactionaccepted = Initialize-Responseactionaccepted  -RequestId 3f1e6c9a-8b2d-4e5f-9a1b-2c3d4e5f6a7b `
 -Status SUBMITTED `
 -StatusUrl /intelligence/v1/response-actions/3f1e6c9a-8b2d-4e5f-9a1b-2c3d4e5f6a7b/status
```

- Convert the resource to JSON
```powershell
$Responseactionaccepted | ConvertTo-JSON
```


[[Back to top]](#) 

