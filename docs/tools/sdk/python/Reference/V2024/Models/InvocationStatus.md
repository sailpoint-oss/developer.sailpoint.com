---
id: v2024-invocation-status
title: InvocationStatus
pagination_label: InvocationStatus
sidebar_label: InvocationStatus
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'InvocationStatus', 'V2024InvocationStatus'] 
slug: /tools/sdk/python/v2024/models/invocation-status
tags: ['SDK', 'Software Development Kit', 'InvocationStatus', 'V2024InvocationStatus']
---

# InvocationStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Invocation ID | [required]
**trigger_id** | **str** | Trigger ID | [required]
**subscription_name** | **str** | Subscription name | [required]
**subscription_id** | **str** | Subscription ID | [required]
**type** | [**InvocationStatusType**](invocation-status-type) |  | [required]
**created** | **datetime** | Invocation created timestamp. ISO-8601 in UTC. | [required]
**completed** | **datetime** | Invocation completed timestamp; empty fields imply invocation is in-flight or not completed. ISO-8601 in UTC. | [optional] 
**start_invocation_input** | [**StartInvocationInput**](start-invocation-input) |  | [required]
**complete_invocation_input** | [**CompleteInvocationInput**](complete-invocation-input) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.invocation_status import InvocationStatus

invocation_status = InvocationStatus(
id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
trigger_id='idn:access-request-post-approval',
subscription_name='Access request subscription',
subscription_id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
type='TEST',
created='2020-03-27T20:40:10.738Z',
completed='2020-03-27T20:42:14.738Z',
start_invocation_input=sailpoint.v2024.models.start_invocation_input.StartInvocationInput(
                    trigger_id = 'idn:access-requested', 
                    input = {identityId=201327fda1c44704ac01181e963d463c}, 
                    content_json = {workflowId=1234}, ),
complete_invocation_input=sailpoint.v2024.models.complete_invocation_input.CompleteInvocationInput(
                    localized_error = sailpoint.v2024.models.localized_message.LocalizedMessage(
                        locale = 'An error has occurred!', 
                        message = 'Error has occurred!', ), 
                    output = {approved=false}, )
)

```
[[Back to top]](#) 

