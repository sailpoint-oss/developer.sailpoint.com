---
id: approvalstatusdto-original-owner
title: ApprovalstatusdtoOriginalOwner
pagination_label: ApprovalstatusdtoOriginalOwner
sidebar_label: ApprovalstatusdtoOriginalOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalstatusdtoOriginalOwner', 'ApprovalstatusdtoOriginalOwner'] 
slug: /tools/sdk/python/access-requests/models/approvalstatusdto-original-owner
tags: ['SDK', 'Software Development Kit', 'ApprovalstatusdtoOriginalOwner', 'ApprovalstatusdtoOriginalOwner']
---

# ApprovalstatusdtoOriginalOwner

Identity of orginal approval owner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'GOVERNANCE_GROUP',    'IDENTITY' ] | DTO type of original approval owner's identity. | [optional] 
**id** | **str** | ID of original approval owner's identity. | [optional] 
**name** | **str** | Display name of original approval owner. | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.approvalstatusdto_original_owner import ApprovalstatusdtoOriginalOwner

approvalstatusdto_original_owner = ApprovalstatusdtoOriginalOwner(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

