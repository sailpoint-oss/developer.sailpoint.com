# Responseactionstatus

# Responseactionstatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **String** | Tracking handle and correlation id for the response action. | [required]
**ActionType** |  **Enum** [  "DISABLE_IDENTITY",    "DISABLE_ACCOUNT" ] | The action that was requested. | [required]
**Status** |  **Enum** [  "SUBMITTED",    "IN_PROGRESS",    "COMPLETED",    "FAILED" ] | Aggregate status across the correlated workflow execution(s): SUBMITTED (registered, no execution yet), IN_PROGRESS (any still non-terminal), COMPLETED (all terminal and at least one succeeded), or FAILED (all terminal and none succeeded).  | [required]
**SubmittedAt** | **System.DateTime** | When the response action was accepted. | [required]
**UpdatedAt** | **System.DateTime** | When the response action status last changed. | [required]

## Examples

- Prepare the resource
```powershell
$Responseactionstatus = Initialize-Responseactionstatus  -RequestId 3f1e6c9a-8b2d-4e5f-9a1b-2c3d4e5f6a7b `
 -ActionType DISABLE_ACCOUNT `
 -Status SUBMITTED `
 -SubmittedAt 2026-08-07T10:15:30Z `
 -UpdatedAt 2026-08-07T10:18:02Z
```

- Convert the resource to JSON
```powershell
$Responseactionstatus | ConvertTo-JSON
```


[[Back to top]](#) 

