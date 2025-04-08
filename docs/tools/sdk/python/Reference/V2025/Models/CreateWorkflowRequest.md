---
id: v2025-create-workflow-request
title: CreateWorkflowRequest
pagination_label: CreateWorkflowRequest
sidebar_label: CreateWorkflowRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CreateWorkflowRequest', 'V2025CreateWorkflowRequest'] 
slug: /tools/sdk/python/v2025/models/create-workflow-request
tags: ['SDK', 'Software Development Kit', 'CreateWorkflowRequest', 'V2025CreateWorkflowRequest']
---

# CreateWorkflowRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the workflow | [required]
**owner** | [**WorkflowBodyOwner**](workflow-body-owner) |  | [optional] 
**description** | **str** | Description of what the workflow accomplishes | [optional] 
**definition** | [**WorkflowDefinition**](workflow-definition) |  | [optional] 
**enabled** | **bool** | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [optional] [default to False]
**trigger** | [**WorkflowTrigger**](workflow-trigger) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.create_workflow_request import CreateWorkflowRequest

create_workflow_request = CreateWorkflowRequest(
name='Send Email',
owner=sailpoint.v2025.models.workflow_body_owner.WorkflowBody_owner(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
description='Send an email to the identity who's attributes changed.',
definition=sailpoint.v2025.models.workflow_definition.WorkflowDefinition(
                    start = 'Send Email Test', 
                    steps = {Send Email={actionId=sp:send-email, attributes={body=This is a test, from=sailpoint@sailpoint.com, recipientId.$=$.identity.id, subject=test}, nextStep=success, selectResult=null, type=ACTION}, success={type=success}}, ),
enabled=False,
trigger=sailpoint.v2025.models.workflow_trigger.WorkflowTrigger(
                    type = 'EVENT', 
                    display_name = '', 
                    attributes = null, )
)

```
[[Back to top]](#) 

