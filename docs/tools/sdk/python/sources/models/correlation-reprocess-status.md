# CorrelationReprocessStatus

# CorrelationReprocessStatus

Progress of a correlation reprocess run for one resource on a source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_id** | **str** | ID of the source the run applies to. | [optional] 
**resource_id** | **str** | ID of the source resource the run applies to. | [optional] 
**type** |  **Enum** [  'OWNER_CORRELATION' ] | Kind of correlation the run reprocesses. | [optional] 
**status** |  **Enum** [  'STARTED',    'COMPLETED',    'COMPLETED_WITH_ERRORS',    'FAILED',    'ABORTED_AGGREGATION_STARTED' ] | Status of the run. `STARTED` means the run is planning or processing. `COMPLETED` means every object was evaluated. `COMPLETED_WITH_ERRORS` means the run finished but part of the work could not be processed. `FAILED` means the run could not be planned. `ABORTED_AGGREGATION_STARTED` means the run stopped because an aggregation started on the same resource. | [optional] 
**total** | **int** | Number of objects in scope for the run. `null` until planning finishes; after that it does not change, so you can compute progress as `processed` divided by `total`. | [optional] 
**processed** | **int** | Number of objects evaluated so far. | [optional] 
**updated** | **int** | Number of evaluated objects whose owner changed. | [optional] 
**errored** | **int** | Number of objects that could not be processed. Individual errors do not fail the run. | [optional] 
**started_at** | **datetime** | Date and time when the run was accepted. | [optional] 
**finished_at** | **datetime** | Date and time when the run reached a final status. `null` while the run is in progress. | [optional] 
**started_by** | [**CorrelationReprocessStatusStartedBy**](correlation-reprocess-status-started-by) |  | [optional] 
\}

## Example

```python
from sailpoint.sources.models.correlation_reprocess_status import CorrelationReprocessStatus

correlation_reprocess_status = CorrelationReprocessStatus(
source_id='2c9180835d191a86015d28455b4a2329',
resource_id='account',
type='OWNER_CORRELATION',
status='STARTED',
total=1200,
processed=450,
updated=37,
errored=2,
started_at='2026-10-22T14:03:11.512Z',
finished_at='2026-10-22T14:09:47.120Z',
started_by=
)

```
[[Back to top]](#) 

