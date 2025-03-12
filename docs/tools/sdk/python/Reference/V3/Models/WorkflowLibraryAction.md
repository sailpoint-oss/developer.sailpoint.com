---
id: workflow-library-action
title: WorkflowLibraryAction
pagination_label: WorkflowLibraryAction
sidebar_label: WorkflowLibraryAction
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkflowLibraryAction', 'WorkflowLibraryAction'] 
slug: /tools/sdk/python/v3/models/workflow-library-action
tags: ['SDK', 'Software Development Kit', 'WorkflowLibraryAction', 'WorkflowLibraryAction']
---

# WorkflowLibraryAction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Action ID. This is a static namespaced ID for the action | [optional] 
**name** | **str** | Action Name | [optional] 
**type** | **str** | Action type | [optional] 
**description** | **str** | Action Description | [optional] 
**form_fields** | [**[]WorkflowLibraryFormFields**](workflow-library-form-fields) | One or more inputs that the action accepts | [optional] 
**example_output** | [**WorkflowLibraryActionExampleOutput**](workflow-library-action-example-output) |  | [optional] 
**deprecated** | **bool** |  | [optional] 
**deprecated_by** | **datetime** |  | [optional] 
**version_number** | **int** | Version number | [optional] 
**is_simulation_enabled** | **bool** |  | [optional] 
**is_dynamic_schema** | **bool** | Determines whether the dynamic output schema is returned in place of the action's output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] [default to False]
**output_schema** | **object** | Defines the output schema, if any, that this action produces. | [optional] 
}

## Example

```python
from sailpoint.v3.models.workflow_library_action import WorkflowLibraryAction

workflow_library_action = WorkflowLibraryAction(
id='sp:create-campaign',
name='Create Certification Campaign',
type='ACTION',
description='Generates a certification campaign.',
form_fields=[
                    sailpoint.v3.models.workflow_library_form_fields.WorkflowLibraryFormFields(
                        description = 'First value to compare', 
                        help_text = 'The name to give to this certification campaign.', 
                        label = 'Campaign Name', 
                        name = 'name', 
                        required = False, 
                        type = 'text', )
                    ],
example_output=,
deprecated=True,
deprecated_by=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
version_number=56,
is_simulation_enabled=True,
is_dynamic_schema=False,
output_schema={definitions={}, properties={autoRevokeAllowed={$id=#sp:create-campaign/autoRevokeAllowed, default=true, examples=[false], title=autoRevokeAllowed, type=boolean}, deadline={$id=#sp:create-campaign/deadline, default=, examples=[2020-12-25T06:00:00.468Z], format=date-time, pattern=^.*$, title=deadline, type=string}, description={$id=#sp:create-campaign/description, default=, examples=[A review of everyone's access by their manager.], pattern=^.*$, title=description, type=string}, emailNotificationEnabled={$id=#sp:create-campaign/emailNotificationEnabled, default=true, examples=[false], title=emailNotificationEnabled, type=boolean}, filter={$id=#sp:create-campaign/filter, properties={id={$id=#sp:create-campaign/filter/id, default=, examples=[e0adaae69852e8fe8b8a3d48e5ce757c], pattern=^.*$, title=id, type=string}, type={$id=#sp:create-campaign/filter/type, default=, examples=[CAMPAIGN_FILTER], pattern=^.*$, title=type, type=string}}, title=filter, type=object}, id={$id=#sp:create-campaign/id, default=, examples=[2c918086719eec070171a7e3355a360a], pattern=^.*$, title=id, type=string}, name={$id=#sp:create-campaign/name, default=, examples=[Manager Review], pattern=^.*$, title=name, type=string}, recommendationsEnabled={$id=#sp:create-campaign/recommendationsEnabled, default=true, examples=[false], title=recommendationEnabled, type=boolean}, type={$id=#sp:create-campaign/type, default=, examples=[MANAGER], pattern=^.*$, title=type, type=string}}, title=sp:create-campaign, type=object}
)

```
[[Back to top]](#) 

