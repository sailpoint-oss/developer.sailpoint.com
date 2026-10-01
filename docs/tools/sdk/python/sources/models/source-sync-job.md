# SourceSyncJob

# SourceSyncJob


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Job ID. | [required]
**status** |  **Enum** [  'QUEUED',    'IN_PROGRESS',    'SUCCESS',    'ERROR' ] | The job status. | [required]
**payload** | [**SourceSyncPayload**](source-sync-payload) |  | [required]
\}

## Example

```python
from sailpoint.sources.models.source_sync_job import SourceSyncJob

source_sync_job = SourceSyncJob(
id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
status='IN_PROGRESS',
payload=sailpoint.sources.models.source_sync_payload.Source Sync Payload(
                    type = 'SYNCHRONIZE_SOURCE_ATTRIBUTES', 
                    data_json = '{"sourceId":"2c918083746f642c01746f990884012a"}', )
)

```
[[Back to top]](#) 

