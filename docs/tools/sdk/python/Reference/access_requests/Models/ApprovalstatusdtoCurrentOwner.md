---
id: approvalstatusdto-current-owner
title: ApprovalstatusdtoCurrentOwner
pagination_label: ApprovalstatusdtoCurrentOwner
sidebar_label: ApprovalstatusdtoCurrentOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalstatusdtoCurrentOwner', 'ApprovalstatusdtoCurrentOwner'] 
slug: /tools/sdk/python/access-requests/models/approvalstatusdto-current-owner
tags: ['SDK', 'Software Development Kit', 'ApprovalstatusdtoCurrentOwner', 'ApprovalstatusdtoCurrentOwner']
---

# ApprovalstatusdtoCurrentOwner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of identity who reviewed the access item request. | [optional] 
**id** | **str** | ID of identity who reviewed the access item request. | [optional] 
**name** | **str** | Human-readable display name of identity who reviewed the access item request. | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.approvalstatusdto_current_owner import ApprovalstatusdtoCurrentOwner

approvalstatusdto_current_owner = ApprovalstatusdtoCurrentOwner(
type='IDENTITY',
id='2c3780a46faadee4016fb4e018c20652',
name='Allen Albertson'
)

```
[[Back to top]](#) 

