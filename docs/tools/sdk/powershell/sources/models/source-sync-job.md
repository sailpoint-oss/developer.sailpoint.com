# SourceSyncJob

# SourceSyncJob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Job ID. | [required]
**Status** |  **Enum** [  "QUEUED",    "IN_PROGRESS",    "SUCCESS",    "ERROR" ] | The job status. | [required]
**Payload** | [**SourceSyncPayload**](source-sync-payload) |  | [required]

## Examples

- Prepare the resource
```powershell
$SourceSyncJob = Initialize-SourceSyncJob  -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -Status IN_PROGRESS `
 -Payload null
```

- Convert the resource to JSON
```powershell
$SourceSyncJob | ConvertTo-JSON
```


[[Back to top]](#) 

