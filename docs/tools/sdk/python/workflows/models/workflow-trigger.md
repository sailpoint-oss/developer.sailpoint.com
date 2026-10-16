# WorkflowTrigger

# WorkflowTrigger

The trigger that starts the workflow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'EVENT',    'EXTERNAL',    'SCHEDULED',    '' ] | The trigger type | [required]
**display_name** | **str** | The trigger display name | [optional] 
**attributes** | **object** | Workflow Trigger Attributes. | [required]
\}

## Example

```python
from sailpoint.workflows.models.workflow_trigger import WorkflowTrigger

workflow_trigger = WorkflowTrigger(
type='EVENT',
display_name='',
attributes=None
)

```
[[Back to top]](#) 

