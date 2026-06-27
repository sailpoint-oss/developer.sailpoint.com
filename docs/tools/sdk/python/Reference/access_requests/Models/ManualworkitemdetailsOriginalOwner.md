---
id: manualworkitemdetails-original-owner
title: ManualworkitemdetailsOriginalOwner
pagination_label: ManualworkitemdetailsOriginalOwner
sidebar_label: ManualworkitemdetailsOriginalOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ManualworkitemdetailsOriginalOwner', 'ManualworkitemdetailsOriginalOwner'] 
slug: /tools/sdk/python/access-requests/models/manualworkitemdetails-original-owner
tags: ['SDK', 'Software Development Kit', 'ManualworkitemdetailsOriginalOwner', 'ManualworkitemdetailsOriginalOwner']
---

# ManualworkitemdetailsOriginalOwner

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
from sailpoint.access_requests.models.manualworkitemdetails_original_owner import ManualworkitemdetailsOriginalOwner

manualworkitemdetails_original_owner = ManualworkitemdetailsOriginalOwner(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

