---
id: workflowlibraryformfields
title: Workflowlibraryformfields
pagination_label: Workflowlibraryformfields
sidebar_label: Workflowlibraryformfields
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Workflowlibraryformfields', 'Workflowlibraryformfields'] 
slug: /tools/sdk/python/workflows/models/workflowlibraryformfields
tags: ['SDK', 'Software Development Kit', 'Workflowlibraryformfields', 'Workflowlibraryformfields']
---

# Workflowlibraryformfields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the form field | [optional] 
**help_text** | **str** | Describes the form field in the UI | [optional] 
**label** | **str** | A human readable name for this form field in the UI | [optional] 
**name** | **str** | The name of the input attribute | [optional] 
**required** | **bool** | Denotes if this field is a required attribute | [optional] [default to False]
**type** |  **Enum** [  'text',    'textarea',    'boolean',    'email',    'url',    'number',    'json',    'checkbox',    'jsonpath',    'select',    'multiType',    'duration',    'toggle',    'formPicker',    'identityPicker',    'governanceGroupPicker',    'string',    'object',    'array',    'secret',    'keyValuePairs',    'emailPicker',    'advancedToggle',    'variableCreator',    'htmlEditor' ] | The type of the form field | [optional] 
}

## Example

```python
from sailpoint.workflows.models.workflowlibraryformfields import Workflowlibraryformfields

workflowlibraryformfields = Workflowlibraryformfields(
description='First value to compare',
help_text='The name to give to this certification campaign.',
label='Campaign Name',
name='name',
required=False,
type='text'
)

```
[[Back to top]](#) 

