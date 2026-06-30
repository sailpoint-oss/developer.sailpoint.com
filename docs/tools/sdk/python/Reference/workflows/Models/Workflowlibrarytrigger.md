---
id: workflowlibrarytrigger
title: Workflowlibrarytrigger
pagination_label: Workflowlibrarytrigger
sidebar_label: Workflowlibrarytrigger
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Workflowlibrarytrigger', 'Workflowlibrarytrigger'] 
slug: /tools/sdk/python/workflows/models/workflowlibrarytrigger
tags: ['SDK', 'Software Development Kit', 'Workflowlibrarytrigger', 'Workflowlibrarytrigger']
---

# Workflowlibrarytrigger


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Trigger ID. This is a static namespaced ID for the trigger. | [optional] 
**type** |  **Enum** [  'EVENT',    'SCHEDULED',    'EXTERNAL',    'AccessRequestTrigger' ] | Trigger type | [optional] 
**deprecated** | **bool** | Whether the trigger is deprecated. | [optional] [default to False]
**deprecated_by** | **datetime** | Date the trigger was deprecated, if applicable. | [optional] 
**is_simulation_enabled** | **bool** | Whether the trigger can be simulated. | [optional] [default to False]
**output_schema** | **object** | Example output schema | [optional] 
**name** | **str** | Trigger Name | [optional] 
**description** | **str** | Trigger Description | [optional] 
**is_dynamic_schema** | **bool** | Determines whether the dynamic output schema is returned in place of the action's output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] [default to False]
**input_example** | **object** | Example trigger payload if applicable | [optional] 
**form_fields** | [**[]Workflowlibraryformfields**](workflowlibraryformfields) | One or more inputs that the trigger accepts | [optional] 
}

## Example

```python
from sailpoint.workflows.models.workflowlibrarytrigger import Workflowlibrarytrigger

workflowlibrarytrigger = Workflowlibrarytrigger(
id='idn:identity-attributes-changed',
type='EVENT',
deprecated=False,
deprecated_by='2023-01-01T00:00Z',
is_simulation_enabled=False,
output_schema={},
name='Identity Attributes Changed',
description='One or more identity attributes changed.',
is_dynamic_schema=False,
input_example={"changes":[{"attribute":"department","newValue":"marketing","oldValue":"sales"},{"attribute":"manager","newValue":{"id":"ee769173319b41d19ccec6c235423236c","name":"mean.guy","type":"IDENTITY"},"oldValue":{"id":"ee769173319b41d19ccec6c235423237b","name":"nice.guy","type":"IDENTITY"}},{"attribute":"email","newValue":"john.doe@gmail.com","oldValue":"john.doe@hotmail.com"}],"identity":{"id":"ee769173319b41d19ccec6cea52f237b","name":"john.doe","type":"IDENTITY"}},
form_fields=[]
)

```
[[Back to top]](#) 

