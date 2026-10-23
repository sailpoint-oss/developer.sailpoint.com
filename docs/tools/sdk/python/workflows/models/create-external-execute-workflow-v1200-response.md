# CreateExternalExecuteWorkflowV1200Response

# CreateExternalExecuteWorkflowV1200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workflow_execution_id** | **str** | The workflow execution id | [optional] 
**message** | **str** | An error message if any errors occurred | [optional] 
\}

## Example

```python
from sailpoint.workflows.models.create_external_execute_workflow_v1200_response import CreateExternalExecuteWorkflowV1200Response

create_external_execute_workflow_v1200_response = CreateExternalExecuteWorkflowV1200Response(
workflow_execution_id='0e11cefa-96e7-4b67-90d0-065bc1da5753',
message='Workflow was not executed externally. Check enabled flag on workflow definition'
)

```
[[Back to top]](#) 

