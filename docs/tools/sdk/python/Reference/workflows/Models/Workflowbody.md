---
id: workflowbody
title: Workflowbody
pagination_label: Workflowbody
sidebar_label: Workflowbody
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Workflowbody', 'Workflowbody'] 
slug: /tools/sdk/python/workflows/models/workflowbody
tags: ['SDK', 'Software Development Kit', 'Workflowbody', 'Workflowbody']
---

# Workflowbody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the workflow | [optional] 
**owner** | [**WorkflowbodyOwner**](workflowbody-owner) |  | [optional] 
**description** | **str** | Description of what the workflow accomplishes | [optional] 
**definition** | [**Workflowdefinition**](workflowdefinition) |  | [optional] 
**enabled** | **bool** | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [optional] [default to False]
**trigger** | [**Workflowtrigger**](workflowtrigger) |  | [optional] 
}

## Example

```python
from sailpoint.workflows.models.workflowbody import Workflowbody

workflowbody = Workflowbody(
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
                    attributes = sailpoint.workflows.models.attributes.attributes(), )
)

```
[[Back to top]](#) 

