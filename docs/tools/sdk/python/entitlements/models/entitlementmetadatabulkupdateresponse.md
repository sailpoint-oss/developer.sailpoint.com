# Entitlementmetadatabulkupdateresponse

# Entitlementmetadatabulkupdateresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the task that is processing the bulk update. | [optional] 
**type** | **str** | Type of the object the bulk update applies to. | [optional] 
**status** |  **Enum** [  'CREATED',    'PRE_PROCESS',    'PRE_PROCESS_COMPLETED',    'POST_PROCESS',    'COMPLETED',    'CHUNK_PENDING',    'CHUNK_PROCESSING',    'RE_PROCESSING',    'PRE_PROCESS_FAILED',    'FAILED' ] | The status of the bulk update request. | [optional] 
**created** | **datetime** | Time when the bulk update request was created | [optional] 
\}

## Example

```python
from sailpoint.entitlements.models.entitlementmetadatabulkupdateresponse import Entitlementmetadatabulkupdateresponse

entitlementmetadatabulkupdateresponse = Entitlementmetadatabulkupdateresponse(
id='2d82ac17-eb0d-4ba6-9918-dcad6ee0294d',
type='ENTITLEMENT',
status='CREATED',
created='2020-10-08T18:33:52.029Z'
)

```
[[Back to top]](#) 

