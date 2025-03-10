---
id: beta-test-invocation
title: TestInvocation
pagination_label: TestInvocation
sidebar_label: TestInvocation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TestInvocation', 'BetaTestInvocation'] 
slug: /tools/sdk/python/beta/models/test-invocation
tags: ['SDK', 'Software Development Kit', 'TestInvocation', 'BetaTestInvocation']
---

# TestInvocation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trigger_id** | **str** | Trigger ID | [required]
**input** | **object** | Mock input to use for test invocation.  This must adhere to the input schema defined in the trigger being invoked.  If this property is omitted, then the default trigger sample payload will be sent. | [optional] 
**content_json** | **object** | JSON map of invocation metadata. | [required]
**subscription_ids** | **[]str** | Only send the test event to the subscription IDs listed.  If omitted, the test event will be sent to all subscribers. | [optional] 
}

## Example

```python
from sailpoint.beta.models.test_invocation import TestInvocation

test_invocation = TestInvocation(
trigger_id='idn:access-request-post-approval',
input={identityId=201327fda1c44704ac01181e963d463c},
content_json={workflowId=1234},
subscription_ids=[0f11f2a4-7c94-4bf3-a2bd-742580fe3bde]
)

```
[[Back to top]](#) 

