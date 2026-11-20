# CorrelationReprocessStatus

# CorrelationReprocessStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | **String** | ID of the source the run applies to. | [optional] 
**ResourceId** | **String** | ID of the source resource the run applies to. | [optional] 
**Type** |  **Enum** [  "OWNER_CORRELATION" ] | Kind of correlation the run reprocesses. | [optional] 
**Status** |  **Enum** [  "STARTED",    "COMPLETED",    "COMPLETED_WITH_ERRORS",    "FAILED",    "ABORTED_AGGREGATION_STARTED" ] | Status of the run. `STARTED` means the run is planning or processing. `COMPLETED` means every object was evaluated. `COMPLETED_WITH_ERRORS` means the run finished but part of the work could not be processed. `FAILED` means the run could not be planned. `ABORTED_AGGREGATION_STARTED` means the run stopped because an aggregation started on the same resource. | [optional] 
**Total** | **Int64** | Number of objects in scope for the run. `null` until planning finishes; after that it does not change, so you can compute progress as `processed` divided by `total`. | [optional] 
**Processed** | **Int64** | Number of objects evaluated so far. | [optional] 
**Updated** | **Int64** | Number of evaluated objects whose owner changed. | [optional] 
**Errored** | **Int64** | Number of objects that could not be processed. Individual errors do not fail the run. | [optional] 
**StartedAt** | **System.DateTime** | Date and time when the run was accepted. | [optional] 
**FinishedAt** | **System.DateTime** | Date and time when the run reached a final status. `null` while the run is in progress. | [optional] 
**StartedBy** | [**CorrelationReprocessStatusStartedBy**](correlation-reprocess-status-started-by) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CorrelationReprocessStatus = Initialize-CorrelationReprocessStatus  -SourceId 2c9180835d191a86015d28455b4a2329 `
 -ResourceId account `
 -Type OWNER_CORRELATION `
 -Status STARTED `
 -Total 1200 `
 -Processed 450 `
 -Updated 37 `
 -Errored 2 `
 -StartedAt 2026-10-22T14:03:11.512Z `
 -FinishedAt 2026-10-22T14:09:47.120Z `
 -StartedBy null
```

- Convert the resource to JSON
```powershell
$CorrelationReprocessStatus | ConvertTo-JSON
```


[[Back to top]](#) 

