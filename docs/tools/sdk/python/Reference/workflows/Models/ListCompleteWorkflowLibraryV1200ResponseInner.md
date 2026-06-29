---
id: list-complete-workflow-library-v1200-response-inner
title: ListCompleteWorkflowLibraryV1200ResponseInner
pagination_label: ListCompleteWorkflowLibraryV1200ResponseInner
sidebar_label: ListCompleteWorkflowLibraryV1200ResponseInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ListCompleteWorkflowLibraryV1200ResponseInner', 'ListCompleteWorkflowLibraryV1200ResponseInner'] 
slug: /tools/sdk/python/workflows/models/list-complete-workflow-library-v1200-response-inner
tags: ['SDK', 'Software Development Kit', 'ListCompleteWorkflowLibraryV1200ResponseInner', 'ListCompleteWorkflowLibraryV1200ResponseInner']
---

# ListCompleteWorkflowLibraryV1200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Operator ID. | [optional] 
**name** | **str** | Operator friendly name | [optional] 
**type** | **str** | Operator type | [optional] 
**description** | **str** | Description of the operator | [optional] 
**form_fields** | [**[]Workflowlibraryformfields**](workflowlibraryformfields) | One or more inputs that the operator accepts | [optional] 
**example_output** | [**WorkflowlibraryactionExampleOutput**](workflowlibraryaction-example-output) |  | [optional] 
**deprecated** | **bool** |  | [optional] 
**deprecated_by** | **datetime** |  | [optional] 
**version_number** | **int** | Version number | [optional] 
**is_simulation_enabled** | **bool** |  | [optional] 
**is_dynamic_schema** | **bool** | Determines whether the dynamic output schema is returned in place of the action's output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] 
**output_schema** | **object** | Example output schema | [optional] 
**input_example** | **object** | Example trigger payload if applicable | [optional] 
}

## Example

```python
from sailpoint.workflows.models.list_complete_workflow_library_v1200_response_inner import ListCompleteWorkflowLibraryV1200ResponseInner

list_complete_workflow_library_v1200_response_inner = ListCompleteWorkflowLibraryV1200ResponseInner(
id='sp:compare-boolean',
name='Compare Boolean Values',
type='OPERATOR',
description='Compare two boolean values and decide what happens based on the result.',
form_fields=[{description=Enter the JSONPath to a value from the input to compare to Variable B., helpText=, label=Variable A, name=variableA.$, required=true, type=text}, {helpText=Select an operation., label=Operation, name=operator, options=[{label=Equals, value=BooleanEquals}], required=true, type=select}, {description=Enter the JSONPath to a value from the input to compare to Variable A., helpText=, label=Variable B, name=variableB.$, required=false, type=text}, {description=Enter True or False., helpText=, label=Variable B, name=variableB, required=false, type=text}],
example_output=,
deprecated=True,
deprecated_by=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
version_number=56,
is_simulation_enabled=True,
is_dynamic_schema=False,
output_schema={},
input_example={changes=[{attribute=department, newValue=marketing, oldValue=sales}, {attribute=manager, newValue={id=ee769173319b41d19ccec6c235423236c, name=mean.guy, type=IDENTITY}, oldValue={id=ee769173319b41d19ccec6c235423237b, name=nice.guy, type=IDENTITY}}, {attribute=email, newValue=john.doe@gmail.com, oldValue=john.doe@hotmail.com}], identity={id=ee769173319b41d19ccec6cea52f237b, name=john.doe, type=IDENTITY}}
)

```
[[Back to top]](#) 

