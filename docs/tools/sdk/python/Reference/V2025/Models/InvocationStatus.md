---
id: v2025-invocation-status
title: InvocationStatus
pagination_label: InvocationStatus
sidebar_label: InvocationStatus
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'InvocationStatus', 'V2025InvocationStatus'] 
slug: /tools/sdk/python/v2025/models/invocation-status
tags: ['SDK', 'Software Development Kit', 'InvocationStatus', 'V2025InvocationStatus']
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
from sailpoint.v2025.models.invocation_status import InvocationStatus

invocation_status = InvocationStatus(
id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
trigger_id='idn:access-request-post-approval',
subscription_name='Access request subscription',
subscription_id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
type='TEST',
created='2020-03-27T20:40:10.738Z',
completed='2020-03-27T20:42:14.738Z',
start_invocation_input=sailpoint.v2025.models.start_invocation_input.Start Invocation Input(
                    trigger_id = 'idn:access-requested', 
                    input = {identityId=201327fda1c44704ac01181e963d463c}, 
                    content_json = {workflowId=1234}, ),
complete_invocation_input=sailpoint.v2025.models.complete_invocation_input.Complete Invocation Input(
                    localized_error = sailpoint.v2025.models.localized_message.Localized Message(
                        locale = 'An error has occurred!', 
                        message = 'Error has occurred!', ), 
                    output = {approved=false}, )
)

```
[[Back to top]](#) 

