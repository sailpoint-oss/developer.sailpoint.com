---
id: v2024-workflow-trigger-attributes
title: WorkflowTriggerAttributes
pagination_label: WorkflowTriggerAttributes
sidebar_label: WorkflowTriggerAttributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkflowTriggerAttributes', 'V2024WorkflowTriggerAttributes'] 
slug: /tools/sdk/python/v2024/models/workflow-trigger-attributes
tags: ['SDK', 'Software Development Kit', 'WorkflowTriggerAttributes', 'V2024WorkflowTriggerAttributes']
---

# WorkflowTriggerAttributes

Workflow Trigger Attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the trigger | [required]
**filter_** | **str** | JSON path expression that will limit which events the trigger will fire on | [optional] 
**description** | **str** | Additonal context about the external trigger | [optional] 
**attribute_to_filter** | **str** | The attribute to filter on | [optional] 
**form_definition_id** | **str** | Form definition's unique identifier. | [optional] 
**name** | **str** | A unique name for the external trigger | [optional] 
**client_id** | **str** | OAuth Client ID to authenticate with this trigger | [optional] 
**url** | **str** | URL to invoke this workflow | [optional] 
**cron_string** | **str** | A valid CRON expression | [optional] 
**frequency** |  **Enum** [  'daily',    'weekly',    'monthly',    'yearly',    'cronSchedule' ] | Frequency of execution | [required]
**time_zone** | **str** | Time zone identifier | [optional] 
**weekly_days** | **[]str** | Scheduled days of the week for execution | [optional] 
**weekly_times** | **[]str** | Scheduled execution times | [optional] 
**yearly_times** | **[]str** | Scheduled execution times | [optional] 
}

## Example

```python
from sailpoint.v2024.models.workflow_trigger_attributes import WorkflowTriggerAttributes

workflow_trigger_attributes = WorkflowTriggerAttributes(
id='idn:identity-attributes-changed',
filter_='$.changes[?(@.attribute == 'manager')]',
description='Run a search and notify the results',
attribute_to_filter='LifecycleState',
form_definition_id='Admin_Access_Request_Form',
name='search-and-notify',
client_id='87e239b2-b85b-4bde-b9a7-55bf304ddcdc',
url='https://tenant.api.identitynow.com/beta/workflows/execute/external/c79e0079-562c-4df5-aa73-60a9e25c916d',
cron_string='0 9 * * 1',
frequency='daily',
time_zone='America/Chicago',
weekly_days=Monday,
weekly_times=Monday,
yearly_times=1969-12-31T09:00:00.000Z
)

```
[[Back to top]](#) 

