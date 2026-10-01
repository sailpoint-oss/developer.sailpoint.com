# CreateWorkflowV1Request

# CreateWorkflowV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the workflow | [required]
**owner** | [**WorkflowBodyOwner**](workflow-body-owner) |  | [optional] 
**description** | **str** | Description of what the workflow accomplishes | [optional] 
**definition** | [**WorkflowDefinition**](workflow-definition) |  | [optional] 
**enabled** | **bool** | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [optional] [default to False]
**trigger** | [**WorkflowTrigger**](workflow-trigger) |  | [optional] 
\}

## Example

```python
from sailpoint.workflows.models.create_workflow_v1_request import CreateWorkflowV1Request

create_workflow_v1_request = CreateWorkflowV1Request(
name='Send Email',
owner=sailpoint.workflows.models.workflow_body_owner.WorkflowBody_owner(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
description='Send an email to the identity who's attributes changed.',
definition=sailpoint.workflows.models.workflow_definition.WorkflowDefinition(
                    start = 'Send Email Test', 
                    steps = {"Send Email":{"actionId":"sp:send-email","attributes":{"body":"This is a test","from":"sailpoint@sailpoint.com","recipientId.$":"$.identity.id","subject":"test"},"nextStep":"success","selectResult":null,"type":"ACTION"},"success":{"type":"success"}}, ),
enabled=False,
trigger=sailpoint.workflows.models.workflow_trigger.WorkflowTrigger(
                    type = 'EVENT', 
                    display_name = '', 
                    attributes = sailpoint.workflows.models.attributes.attributes(), )
)

```
[[Back to top]](#) 

