---
id: v2024-invocation
title: Invocation
pagination_label: Invocation
sidebar_label: Invocation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Invocation', 'V2024Invocation'] 
slug: /tools/sdk/python/v2024/models/invocation
tags: ['SDK', 'Software Development Kit', 'Invocation', 'V2024Invocation']
---

# Invocation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Invocation ID | [optional] 
**trigger_id** | **str** | Trigger ID | [optional] 
**secret** | **str** | Unique invocation secret. | [optional] 
**content_json** | **object** | JSON map of invocation metadata. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.invocation import Invocation

invocation = Invocation(
id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
trigger_id='idn:access-requested',
secret='0f979022-08be-44f2-b6f9-7393ec73ed9b',
content_json={workflowId=1234}
)

```
[[Back to top]](#) 

