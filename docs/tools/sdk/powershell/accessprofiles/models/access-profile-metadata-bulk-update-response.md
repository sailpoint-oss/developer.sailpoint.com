# AccessProfileMetadataBulkUpdateResponse

# AccessProfileMetadataBulkUpdateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the task that is processing the bulk update. | [optional] 
**Type** | **String** | Type of the object the bulk update applies to. | [optional] 
**Status** |  **Enum** [  "CREATED",    "PRE_PROCESS",    "PRE_PROCESS_COMPLETED",    "POST_PROCESS",    "COMPLETED",    "CHUNK_PENDING",    "CHUNK_PROCESSING",    "RE_PROCESSING",    "PRE_PROCESS_FAILED",    "FAILED" ] | The status of the bulk update request. | [optional] 
**Created** | **System.DateTime** | Time when the bulk update request was created | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileMetadataBulkUpdateResponse = Initialize-AccessProfileMetadataBulkUpdateResponse  -Id 2d82ac17-eb0d-4ba6-9918-dcad6ee0294d `
 -Type ACCESS_PROFILE `
 -Status CREATED `
 -Created 2020-10-08T18:33:52.029Z
```

- Convert the resource to JSON
```powershell
$AccessProfileMetadataBulkUpdateResponse | ConvertTo-JSON
```


[[Back to top]](#) 

