---
id: approvalcomment
title: Approvalcomment
pagination_label: Approvalcomment
sidebar_label: Approvalcomment
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approvalcomment', 'Approvalcomment'] 
slug: /tools/sdk/python/configuration-hub/models/approvalcomment
tags: ['SDK', 'Software Development Kit', 'Approvalcomment', 'Approvalcomment']
---

# Approvalcomment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment provided either by the approval requester or the approver. | [required]
**timestamp** | **datetime** | The time when this comment was provided. | [required]
**user** | **str** | Name of the user that provided this comment. | [required]
**id** | **str** | Id of the user that provided this comment. | [required]
**changed_to_status** |  **Enum** [  'PENDING_APPROVAL',    'APPROVED',    'REJECTED' ] | Status transition of the draft. | [required]
}

## Example

```python
from sailpoint.configuration_hub.models.approvalcomment import Approvalcomment

approvalcomment = Approvalcomment(
comment='Approval comment',
timestamp='2021-05-11T22:23:16Z',
user='user.name',
id='549bf881-1ac4-4a64-9acf-6014e8a3a887',
changed_to_status='PENDING_APPROVAL'
)

```
[[Back to top]](#) 

