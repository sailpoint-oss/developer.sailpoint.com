---
id: v2024-approval-identity
title: ApprovalIdentity
pagination_label: ApprovalIdentity
sidebar_label: ApprovalIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalIdentity', 'V2024ApprovalIdentity'] 
slug: /tools/sdk/python/v2024/models/approval-identity
tags: ['SDK', 'Software Development Kit', 'ApprovalIdentity', 'V2024ApprovalIdentity']
---

# ApprovalIdentity

Identity Object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identity ID | [optional] 
**type** |  **Enum** [  'IDENTITY' ] | Indication of what group the identity belongs to. Ie, IDENTITY, GOVERNANCE_GROUP, etc | [optional] 
**name** | **str** | Name of the identity | [optional] 
}

## Example

```python
from sailpoint.v2024.models.approval_identity import ApprovalIdentity

approval_identity = ApprovalIdentity(
id='85d173e7d57e496569df763231d6deb6a',
type='IDENTITY',
name='John Doe'
)

```
[[Back to top]](#) 

