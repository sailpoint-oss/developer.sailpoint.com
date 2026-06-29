---
id: manualworkitemdetails-current-owner
title: ManualworkitemdetailsCurrentOwner
pagination_label: ManualworkitemdetailsCurrentOwner
sidebar_label: ManualworkitemdetailsCurrentOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ManualworkitemdetailsCurrentOwner', 'ManualworkitemdetailsCurrentOwner'] 
slug: /tools/sdk/python/access-requests/models/manualworkitemdetails-current-owner
tags: ['SDK', 'Software Development Kit', 'ManualworkitemdetailsCurrentOwner', 'ManualworkitemdetailsCurrentOwner']
---

# ManualworkitemdetailsCurrentOwner

Identity of current work item owner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'GOVERNANCE_GROUP',    'IDENTITY' ] | DTO type of current work item owner's identity. | [optional] 
**id** | **str** | ID of current work item owner's identity. | [optional] 
**name** | **str** | Display name of current work item owner. | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.manualworkitemdetails_current_owner import ManualworkitemdetailsCurrentOwner

manualworkitemdetails_current_owner = ManualworkitemdetailsCurrentOwner(
type='IDENTITY',
id='2c3780a46faadee4016fb4e018c20652',
name='Allen Albertson'
)

```
[[Back to top]](#) 

