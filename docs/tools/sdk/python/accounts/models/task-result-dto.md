# TaskResultDto

# TaskResultDto

Task result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'TASK_RESULT' ] | Task result DTO type. | [optional] 
**id** | **str** | Task result ID. | [optional] 
**name** | **str** | Task result display name. | [optional] 
\}

## Example

```python
from sailpoint.accounts.models.task_result_dto import TaskResultDto

task_result_dto = TaskResultDto(
type='TASK_RESULT',
id='464ae7bf791e49fdb74606a2e4a89635',
name=''
)

```
[[Back to top]](#) 

