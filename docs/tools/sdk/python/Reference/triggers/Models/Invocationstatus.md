---
id: invocationstatus
title: Invocationstatus
pagination_label: Invocationstatus
sidebar_label: Invocationstatus
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Invocationstatus', 'Invocationstatus'] 
slug: /tools/sdk/python/triggers/models/invocationstatus
tags: ['SDK', 'Software Development Kit', 'Invocationstatus', 'Invocationstatus']
---

# Invocationstatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Invocation ID | [required]
**trigger_id** | **str** | Trigger ID | [required]
**subscription_name** | **str** | Subscription name | [required]
**subscription_id** | **str** | Subscription ID | [required]
**type** | [**Invocationstatustype**](invocationstatustype) |  | [required]
**created** | **datetime** | Invocation created timestamp. ISO-8601 in UTC. | [required]
**completed** | **datetime** | Invocation completed timestamp; empty fields imply invocation is in-flight or not completed. ISO-8601 in UTC. | [optional] 
**start_invocation_input** | [**Startinvocationinput**](startinvocationinput) |  | [required]
**complete_invocation_input** | [**Completeinvocationinput**](completeinvocationinput) |  | [optional] 
}

## Example

```python
from sailpoint.triggers.models.invocationstatus import Invocationstatus

invocationstatus = Invocationstatus(
id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
trigger_id='idn:access-request-post-approval',
subscription_name='Access request subscription',
subscription_id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
type='TEST',
created='2020-03-27T20:40:10.738Z',
completed='2020-03-27T20:42:14.738Z',
start_invocation_input=sailpoint.triggers.models.start_invocation_input.Start Invocation Input(
                    trigger_id = 'idn:access-requested', 
                    input = {"identityId":"201327fda1c44704ac01181e963d463c"}, 
                    content_json = {"workflowId":1234}, ),
complete_invocation_input=sailpoint.triggers.models.complete_invocation_input.Complete Invocation Input(
                    localized_error = sailpoint.triggers.models.localized_message.Localized Message(
                        locale = 'An error has occurred!', 
                        message = 'Error has occurred!', ), 
                    output = {"approved":false}, )
)

```
[[Back to top]](#) 

