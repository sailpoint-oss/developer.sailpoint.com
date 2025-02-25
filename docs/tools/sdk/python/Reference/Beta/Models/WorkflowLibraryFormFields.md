---
id: beta-workflow-library-form-fields
title: WorkflowLibraryFormFields
pagination_label: WorkflowLibraryFormFields
sidebar_label: WorkflowLibraryFormFields
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkflowLibraryFormFields', 'BetaWorkflowLibraryFormFields'] 
slug: /tools/sdk/python/beta/models/workflow-library-form-fields
tags: ['SDK', 'Software Development Kit', 'WorkflowLibraryFormFields', 'BetaWorkflowLibraryFormFields']
---

# WorkflowLibraryFormFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the form field | [optional] 
**help_text** | **str** | Describes the form field in the UI | [optional] 
**label** | **str** | A human readable name for this form field in the UI | [optional] 
**name** | **str** | The name of the input attribute | [optional] 
**required** | **bool** | Denotes if this field is a required attribute | [optional] 
**type** |  **Enum** [  'text',    'textarea',    'boolean',    'email',    'url',    'number',    'json',    'checkbox',    'jsonpath',    'select',    'multiType',    'duration',    'toggle',    'formPicker',    'identityPicker',    'governanceGroupPicker',    'string',    'object',    'array',    'secret',    'keyValuePairs',    'emailPicker',    'advancedToggle',    'variableCreator',    'htmlEditor' ] | The type of the form field | [optional] 
}

## Example

```python
from sailpoint.beta.models.workflow_library_form_fields import WorkflowLibraryFormFields

workflow_library_form_fields = WorkflowLibraryFormFields(
description='First value to compare',
help_text='The name to give to this certification campaign.',
label='Campaign Name',
name='name',
required=False,
type='text'
)

```
[[Back to top]](#) 

