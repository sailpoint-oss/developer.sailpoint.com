# WorkflowModifiedBy

# WorkflowModifiedBy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] |  | [optional] 
**id** | **str** | Identity ID | [optional] 
**name** | **str** | Human-readable display name of identity. | [optional] 
\}

## Example

```python
from sailpoint.workflows.models.workflow_modified_by import WorkflowModifiedBy

workflow_modified_by = WorkflowModifiedBy(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Thomas Edison'
)

```
[[Back to top]](#) 

