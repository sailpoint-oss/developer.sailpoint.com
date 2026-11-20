# Responseactionstatus

# Responseactionstatus

Current tracked status of a response action. Target fields from the create request (identityType, identityId, accountIds, context) are not echoed here; they travel on the action event used to start the workflow(s). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | Tracking handle and correlation id for the response action. | [required]
**action_type** |  **Enum** [  'DISABLE_IDENTITY',    'DISABLE_ACCOUNT' ] | The action that was requested. | [required]
**status** |  **Enum** [  'SUBMITTED',    'IN_PROGRESS',    'COMPLETED',    'FAILED' ] | Aggregate status across the correlated workflow execution(s): SUBMITTED (registered, no execution yet), IN_PROGRESS (any still non-terminal), COMPLETED (all terminal and at least one succeeded), or FAILED (all terminal and none succeeded).  | [required]
**submitted_at** | **datetime** | When the response action was accepted. | [required]
**updated_at** | **datetime** | When the response action status last changed. | [required]
\}

## Example

```python
from sailpoint.intelligence.models.responseactionstatus import Responseactionstatus

responseactionstatus = Responseactionstatus(
request_id='3f1e6c9a-8b2d-4e5f-9a1b-2c3d4e5f6a7b',
action_type='DISABLE_ACCOUNT',
status='SUBMITTED',
submitted_at='2026-08-07T10:15:30Z',
updated_at='2026-08-07T10:18:02Z'
)

```
[[Back to top]](#) 

