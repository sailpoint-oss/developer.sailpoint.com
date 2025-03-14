---
id: v2024-trigger
title: Trigger
pagination_label: Trigger
sidebar_label: Trigger
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Trigger', 'V2024Trigger'] 
slug: /tools/sdk/python/v2024/models/trigger
tags: ['SDK', 'Software Development Kit', 'Trigger', 'V2024Trigger']
---

# Trigger


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier of the trigger. | [required]
**name** | **str** | Trigger Name. | [required]
**type** | [**TriggerType**](trigger-type) |  | [required]
**description** | **str** | Trigger Description. | [optional] 
**input_schema** | **str** | The JSON schema of the payload that will be sent by the trigger to the subscribed service. | [required]
**example_input** | [**TriggerExampleInput**](trigger-example-input) |  | [required]
**output_schema** | **str** | The JSON schema of the response that will be sent by the subscribed service to the trigger in response to an event.  This only applies to a trigger type of `REQUEST_RESPONSE`. | [optional] 
**example_output** | [**TriggerExampleOutput**](trigger-example-output) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.trigger import Trigger

trigger = Trigger(
id='idn:access-request-dynamic-approver',
name='Access Request Dynamic Approver',
type='FIRE_AND_FORGET',
description='Trigger for getting a dynamic approver.',
input_schema='{"definitions":{"record:AccessRequestDynamicApproverInput":{"type":"object","required":["accessRequestId","requestedFor","requestedItems","requestedBy"],"additionalProperties":true,"properties":{"accessRequestId":{"type":"string"},"requestedFor":{"$ref":"#/definitions/record:requestedForIdentityRef"},"requestedItems":{"type":"array","items":{"$ref":"#/definitions/record:requestedObjectRef"}},"requestedBy":{"$ref":"#/definitions/record:requestedByIdentityRef"}}},"record:requestedForIdentityRef":{"type":"object","required":["id","name","type"],"additionalProperties":true,"properties":{"id":{"type":"string"},"name":{"type":"string"},"type":{"type":"string"}}},"record:requestedObjectRef":{"type":"object","optional":["description","comment"],"required":["id","name","type","operation"],"additionalProperties":true,"properties":{"id":{"type":"string"},"name":{"type":"string"},"description":{"oneOf":[{"type":"null"},{"type":"string"}]},"type":{"type":"string"},"operation":{"type":"string"},"comment":{"oneOf":[{"type":"null"},{"type":"string"}]}}},"record:requestedByIdentityRef":{"type":"object","required":["type","id","name"],"additionalProperties":true,"properties":{"type":{"type":"string"},"id":{"type":"string"},"name":{"type":"string"}}}},"$ref":"#/definitions/record:AccessRequestDynamicApproverInput"}',
example_input=,
output_schema='{"definitions":{"record:AccessRequestDynamicApproverOutput":{"type":["null","object"],"required":["id","name","type"],"additionalProperties":true,"properties":{"id":{"type":"string"},"name":{"type":"string"},"type":{"type":"string"}}}},"$ref":"#/definitions/record:AccessRequestDynamicApproverOutput"}',
example_output=
)

```
[[Back to top]](#) 

