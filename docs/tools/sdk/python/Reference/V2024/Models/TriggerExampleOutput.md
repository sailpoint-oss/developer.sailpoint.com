---
id: v2024-trigger-example-output
title: TriggerExampleOutput
pagination_label: TriggerExampleOutput
sidebar_label: TriggerExampleOutput
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TriggerExampleOutput', 'V2024TriggerExampleOutput'] 
slug: /tools/sdk/python/v2024/models/trigger-example-output
tags: ['SDK', 'Software Development Kit', 'TriggerExampleOutput', 'V2024TriggerExampleOutput']
---

# TriggerExampleOutput

An example of the JSON payload that will be sent by the subscribed service to the trigger in response to an event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the identity to add to the approver list for the access request. | [required]
**name** | **str** | The name of the identity to add to the approver list for the access request. | [required]
**type** |  **Enum** [  'IDENTITY',    'GOVERNANCE_GROUP' ] | The type of object being referenced. | [required]
**approved** | **bool** | Whether or not to approve the access request. | [required]
**comment** | **str** | A comment about the decision to approve or deny the request. | [required]
**approver** | **str** | The name of the entity that approved or denied the request. | [required]
}

## Example

```python
from sailpoint.v2024.models.trigger_example_output import TriggerExampleOutput

trigger_example_output = TriggerExampleOutput(
id='2c91808b6ef1d43e016efba0ce470906',
name='Adam Adams',
type=IDENTITY,
approved=False,
comment='This access should be denied, because this will cause an SOD violation.',
approver='AcmeCorpExternalIntegration'
)

```
[[Back to top]](#) 

