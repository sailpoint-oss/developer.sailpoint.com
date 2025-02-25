---
id: beta-access-request-phases
title: AccessRequestPhases
pagination_label: AccessRequestPhases
sidebar_label: AccessRequestPhases
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestPhases', 'BetaAccessRequestPhases'] 
slug: /tools/sdk/python/beta/models/access-request-phases
tags: ['SDK', 'Software Development Kit', 'AccessRequestPhases', 'BetaAccessRequestPhases']
---

# AccessRequestPhases

Provides additional details about this access request phase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**started** | **datetime** | The time that this phase started. | [optional] 
**finished** | **datetime** | The time that this phase finished. | [optional] 
**name** | **str** | The name of this phase. | [optional] 
**state** |  **Enum** [  'PENDING',    'EXECUTING',    'COMPLETED',    'CANCELLED',    'NOT_EXECUTED' ] | The state of this phase. | [optional] 
**result** |  **Enum** [  'SUCCESSFUL',    'FAILED' ] | The state of this phase. | [optional] 
**phase_reference** | **str** | A reference to another object on the RequestedItemStatus that contains more details about the phase. Note that for the Provisioning phase, this will be empty if there are no manual work items. | [optional] 
}

## Example

```python
from sailpoint.beta.models.access_request_phases import AccessRequestPhases

access_request_phases = AccessRequestPhases(
started='2020-07-11T00:00Z',
finished='2020-07-12T00:00Z',
name='APPROVAL_PHASE',
state='COMPLETED',
result='SUCCESSFUL',
phase_reference='approvalDetails'
)

```
[[Back to top]](#) 

