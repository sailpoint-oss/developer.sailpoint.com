# TaskResultResponse

# TaskResultResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | the type of response reference | [optional] 
**id** | **str** | the task ID | [optional] 
**name** | **str** | the task name (not used in this endpoint, always null) | [optional] 
\}

## Example

```python
from sailpoint.identities.models.task_result_response import TaskResultResponse

task_result_response = TaskResultResponse(
type='TASK_RESULT',
id='78733556-9ea3-4f59-bf69-e5cd92b011b4',
name='null'
)

```
[[Back to top]](#) 

