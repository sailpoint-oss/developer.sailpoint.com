# IdentitySyncJob

# IdentitySyncJob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Job ID. | [required]
**Status** |  **Enum** [  "QUEUED",    "IN_PROGRESS",    "SUCCESS",    "ERROR" ] | The job status. | [required]
**Payload** | [**IdentitySyncPayload**](identity-sync-payload) |  | [required]

## Examples

- Prepare the resource
```powershell
$IdentitySyncJob = Initialize-IdentitySyncJob  -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -Status IN_PROGRESS `
 -Payload null
```

- Convert the resource to JSON
```powershell
$IdentitySyncJob | ConvertTo-JSON
```


[[Back to top]](#) 

