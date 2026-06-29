---
id: startinvocationinput
title: Startinvocationinput
pagination_label: Startinvocationinput
sidebar_label: Startinvocationinput
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Startinvocationinput', 'Startinvocationinput'] 
slug: /tools/sdk/python/triggers/models/startinvocationinput
tags: ['SDK', 'Software Development Kit', 'Startinvocationinput', 'Startinvocationinput']
---

# Startinvocationinput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trigger_id** | **str** | Trigger ID | [optional] 
**input** | **object** | Trigger input payload. Its schema is defined in the trigger definition. | [optional] 
**content_json** | **object** | JSON map of invocation metadata | [optional] 
}

## Example

```python
from sailpoint.triggers.models.startinvocationinput import Startinvocationinput

startinvocationinput = Startinvocationinput(
trigger_id='idn:access-requested',
input={"identityId":"201327fda1c44704ac01181e963d463c"},
content_json={"workflowId":1234}
)

```
[[Back to top]](#) 

