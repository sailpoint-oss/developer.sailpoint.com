---
id: v2025-workflow-library-trigger
title: WorkflowLibraryTrigger
pagination_label: WorkflowLibraryTrigger
sidebar_label: WorkflowLibraryTrigger
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkflowLibraryTrigger', 'V2025WorkflowLibraryTrigger'] 
slug: /tools/sdk/python/v2025/models/workflow-library-trigger
tags: ['SDK', 'Software Development Kit', 'WorkflowLibraryTrigger', 'V2025WorkflowLibraryTrigger']
---

# WorkflowLibraryTrigger


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Trigger ID. This is a static namespaced ID for the trigger. | [optional] 
**type** |  **Enum** [  'EVENT',    'SCHEDULED',    'EXTERNAL' ] | Trigger type | [optional] 
**deprecated** | **bool** |  | [optional] 
**deprecated_by** | **datetime** |  | [optional] 
**is_simulation_enabled** | **bool** |  | [optional] 
**output_schema** | **object** | Example output schema | [optional] 
**name** | **str** | Trigger Name | [optional] 
**description** | **str** | Trigger Description | [optional] 
**is_dynamic_schema** | **bool** | Determines whether the dynamic output schema is returned in place of the action's output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] [default to False]
**input_example** | **object** | Example trigger payload if applicable | [optional] 
**form_fields** | [**[]WorkflowLibraryFormFields**](workflow-library-form-fields) | One or more inputs that the trigger accepts | [optional] 
}

## Example

```python
from sailpoint.v2025.models.workflow_library_trigger import WorkflowLibraryTrigger

workflow_library_trigger = WorkflowLibraryTrigger(
id='idn:identity-attributes-changed',
type='EVENT',
deprecated=True,
deprecated_by=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
is_simulation_enabled=True,
output_schema=None,
name='Identity Attributes Changed',
description='One or more identity attributes changed.',
is_dynamic_schema=False,
input_example={changes=[{attribute=department, newValue=marketing, oldValue=sales}, {attribute=manager, newValue={id=ee769173319b41d19ccec6c235423236c, name=mean.guy, type=IDENTITY}, oldValue={id=ee769173319b41d19ccec6c235423237b, name=nice.guy, type=IDENTITY}}, {attribute=email, newValue=john.doe@gmail.com, oldValue=john.doe@hotmail.com}], identity={id=ee769173319b41d19ccec6cea52f237b, name=john.doe, type=IDENTITY}},
form_fields=[]
)

```
[[Back to top]](#) 

