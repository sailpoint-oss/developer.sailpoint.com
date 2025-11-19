---
id: beta-workflow
title: Workflow
pagination_label: Workflow
sidebar_label: Workflow
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Workflow', 'BetaWorkflow'] 
slug: /tools/sdk/python/beta/models/workflow
tags: ['SDK', 'Software Development Kit', 'Workflow', 'BetaWorkflow']
---

# Workflow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the workflow | [optional] 
**owner** | [**WorkflowBodyOwner**](workflow-body-owner) |  | [optional] 
**description** | **str** | Description of what the workflow accomplishes | [optional] 
**definition** | [**WorkflowDefinition**](workflow-definition) |  | [optional] 
**enabled** | **bool** | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [optional] [default to False]
**trigger** | [**WorkflowTrigger**](workflow-trigger) |  | [optional] 
**id** | **str** | Workflow ID. This is a UUID generated upon creation. | [optional] 
**modified** | **datetime** | The date and time the workflow was modified. | [optional] 
**modified_by** | [**WorkflowModifiedBy**](workflow-modified-by) |  | [optional] 
**execution_count** | **int** | The number of times this workflow has been executed. | [optional] 
**failure_count** | **int** | The number of times this workflow has failed during execution. | [optional] 
**created** | **datetime** | The date and time the workflow was created. | [optional] 
**creator** | [**WorkflowAllOfCreator**](workflow-all-of-creator) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.workflow import Workflow

workflow = Workflow(
name='Send Email',
owner=sailpoint.beta.models.workflow_body_owner.WorkflowBody_owner(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
description='Send an email to the identity who's attributes changed.',
definition=sailpoint.beta.models.workflow_definition.Workflow Definition(
                    start = 'Send Email Test', 
                    steps = {Send Email={actionId=sp:send-email, attributes={body=This is a test, from=sailpoint@sailpoint.com, recipientId.$=$.identity.id, subject=test}, nextStep=success, selectResult=null, type=ACTION}, success={type=success}}, ),
enabled=False,
trigger=sailpoint.beta.models.workflow_trigger.Workflow Trigger(
                    type = 'EVENT', 
                    display_name = '', 
                    attributes = null, ),
id='d201c5e9-d37b-4aff-af14-66414f39d569',
modified='2023-12-05T15:18:27.699132301Z',
modified_by=sailpoint.beta.models.workflow_modified_by.Workflow Modified By(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Thomas Edison', ),
execution_count=2,
failure_count=0,
created='2022-01-10T16:06:16.636381447Z',
creator=sailpoint.beta.models.workflow_all_of_creator.Workflow_allOf_creator(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', )
)

```
[[Back to top]](#) 

