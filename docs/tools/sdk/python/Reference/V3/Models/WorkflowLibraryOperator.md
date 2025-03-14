---
id: workflow-library-operator
title: WorkflowLibraryOperator
pagination_label: WorkflowLibraryOperator
sidebar_label: WorkflowLibraryOperator
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkflowLibraryOperator', 'WorkflowLibraryOperator'] 
slug: /tools/sdk/python/v3/models/workflow-library-operator
tags: ['SDK', 'Software Development Kit', 'WorkflowLibraryOperator', 'WorkflowLibraryOperator']
---

# WorkflowLibraryOperator


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Operator ID. | [optional] 
**name** | **str** | Operator friendly name | [optional] 
**type** | **str** | Operator type | [optional] 
**description** | **str** | Description of the operator | [optional] 
**is_dynamic_schema** | **bool** | Determines whether the dynamic output schema is returned in place of the action's output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] 
**deprecated** | **bool** |  | [optional] 
**deprecated_by** | **datetime** |  | [optional] 
**is_simulation_enabled** | **bool** |  | [optional] 
**form_fields** | [**[]WorkflowLibraryFormFields**](workflow-library-form-fields) | One or more inputs that the operator accepts | [optional] 
}

## Example

```python
from sailpoint.v3.models.workflow_library_operator import WorkflowLibraryOperator

workflow_library_operator = WorkflowLibraryOperator(
id='sp:compare-boolean',
name='Compare Boolean Values',
type='OPERATOR',
description='Compare two boolean values and decide what happens based on the result.',
is_dynamic_schema=False,
deprecated=True,
deprecated_by=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
is_simulation_enabled=True,
form_fields=[{description=Enter the JSONPath to a value from the input to compare to Variable B., helpText=, label=Variable A, name=variableA.$, required=true, type=text}, {helpText=Select an operation., label=Operation, name=operator, options=[{label=Equals, value=BooleanEquals}], required=true, type=select}, {description=Enter the JSONPath to a value from the input to compare to Variable A., helpText=, label=Variable B, name=variableB.$, required=false, type=text}, {description=Enter True or False., helpText=, label=Variable B, name=variableB, required=false, type=text}]
)

```
[[Back to top]](#) 

