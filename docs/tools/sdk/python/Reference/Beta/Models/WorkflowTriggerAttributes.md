---
id: beta-workflow-trigger-attributes
title: WorkflowTriggerAttributes
pagination_label: WorkflowTriggerAttributes
sidebar_label: WorkflowTriggerAttributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkflowTriggerAttributes', 'BetaWorkflowTriggerAttributes'] 
slug: /tools/sdk/python/beta/models/workflow-trigger-attributes
tags: ['SDK', 'Software Development Kit', 'WorkflowTriggerAttributes', 'BetaWorkflowTriggerAttributes']
---

# WorkflowTriggerAttributes

Workflow Trigger Attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the trigger | [required]
**filter_** | **str** | JSON path expression that will limit which events the trigger will fire on | [optional] 
**description** | **str** | Additional context about the external trigger | [optional] 
**name** | **str** | A unique name for the external trigger | [optional] 
**client_id** | **str** | OAuth Client ID to authenticate with this trigger | [optional] 
**url** | **str** | URL to invoke this workflow | [optional] 
**frequency** |  **Enum** [  'daily',    'weekly',    'monthly',    'yearly',    'cronSchedule' ] | Frequency of execution | [required]
**time_zone** | **str** | Time zone identifier | [optional] 
**cron_string** | **str** |  | [optional] 
**weekly_days** | **[]str** | Scheduled days of the week for execution | [optional] 
**weekly_times** | **[]str** | Scheduled execution times | [optional] 
}

## Example

```python
from sailpoint.beta.models.workflow_trigger_attributes import WorkflowTriggerAttributes

workflow_trigger_attributes = WorkflowTriggerAttributes(
id='idn:identity-attributes-changed',
filter_='$.changes[?(@.attribute == 'manager')]',
description='Run a search and notify the results',
name='search-and-notify',
client_id='87e239b2-b85b-4bde-b9a7-55bf304ddcdc',
url='https://tenant.api.identitynow.com/beta/workflows/execute/external/c79e0079-562c-4df5-aa73-60a9e25c916d',
frequency='daily',
time_zone='America/Chicago',
cron_string='0 9 * * 1',
weekly_days=Monday,
weekly_times=Monday
)

```
[[Back to top]](#) 

