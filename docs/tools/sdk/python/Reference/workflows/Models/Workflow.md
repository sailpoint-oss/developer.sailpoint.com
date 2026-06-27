---
id: workflow
title: Workflow
pagination_label: Workflow
sidebar_label: Workflow
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Workflow', 'Workflow'] 
slug: /tools/sdk/python/workflows/models/workflow
tags: ['SDK', 'Software Development Kit', 'Workflow', 'Workflow']
---

# Workflow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the workflow | [optional] 
**owner** | [**WorkflowbodyOwner**](workflowbody-owner) |  | [optional] 
**description** | **str** | Description of what the workflow accomplishes | [optional] 
**definition** | [**Workflowdefinition**](workflowdefinition) |  | [optional] 
**enabled** | **bool** | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [optional] [default to False]
**trigger** | [**Workflowtrigger**](workflowtrigger) |  | [optional] 
**id** | **str** | Workflow ID. This is a UUID generated upon creation. | [optional] 
**execution_count** | **int** | The number of times this workflow has been executed. | [optional] 
**failure_count** | **int** | The number of times this workflow has failed during execution. | [optional] 
**created** | **datetime** | The date and time the workflow was created. | [optional] 
**modified** | **datetime** | The date and time the workflow was modified. | [optional] 
**modified_by** | [**Workflowmodifiedby**](workflowmodifiedby) |  | [optional] 
**creator** | [**WorkflowAllOfCreator**](workflow-all-of-creator) |  | [optional] 
}

## Example

```python
from sailpoint.workflows.models.workflow import Workflow

workflow = Workflow(
name='Send Email',
owner=sailpoint.workflows.models.workflowbody_owner.workflowbody_owner(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
description='Send an email to the identity who's attributes changed.',
definition=sailpoint.workflows.models.workflowdefinition.workflowdefinition(
                    start = 'Send Email Test', 
                    steps = {"Send Email":{"actionId":"sp:send-email","attributes":{"body":"This is a test","from":"sailpoint@sailpoint.com","recipientId.$":"$.identity.id","subject":"test"},"nextStep":"success","selectResult":null,"type":"ACTION"},"success":{"type":"success"}}, ),
enabled=False,
trigger=sailpoint.workflows.models.workflowtrigger.workflowtrigger(
                    type = 'EVENT', 
                    display_name = '', 
                    attributes = sailpoint.workflows.models.attributes.attributes(), ),
id='d201c5e9-d37b-4aff-af14-66414f39d569',
execution_count=2,
failure_count=0,
created='2022-01-10T16:06:16.636381447Z',
modified='2023-12-05T15:18:27.699132301Z',
modified_by=sailpoint.workflows.models.workflowmodifiedby.workflowmodifiedby(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Thomas Edison', ),
creator=sailpoint.workflows.models.workflow_all_of_creator.workflow_allOf_creator(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', )
)

```
[[Back to top]](#) 

