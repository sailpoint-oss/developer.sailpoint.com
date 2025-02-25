---
id: beta-manual-work-item-details-original-owner
title: ManualWorkItemDetailsOriginalOwner
pagination_label: ManualWorkItemDetailsOriginalOwner
sidebar_label: ManualWorkItemDetailsOriginalOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ManualWorkItemDetailsOriginalOwner', 'BetaManualWorkItemDetailsOriginalOwner'] 
slug: /tools/sdk/python/beta/models/manual-work-item-details-original-owner
tags: ['SDK', 'Software Development Kit', 'ManualWorkItemDetailsOriginalOwner', 'BetaManualWorkItemDetailsOriginalOwner']
---

# ManualWorkItemDetailsOriginalOwner

Identity of original work item owner, if the work item has been forwarded.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'GOVERNANCE_GROUP',    'IDENTITY' ] | DTO type of original work item owner's identity. | [optional] 
**id** | **str** | ID of original work item owner's identity. | [optional] 
**name** | **str** | Display name of original work item owner. | [optional] 
}

## Example

```python
from sailpoint.beta.models.manual_work_item_details_original_owner import ManualWorkItemDetailsOriginalOwner

manual_work_item_details_original_owner = ManualWorkItemDetailsOriginalOwner(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

