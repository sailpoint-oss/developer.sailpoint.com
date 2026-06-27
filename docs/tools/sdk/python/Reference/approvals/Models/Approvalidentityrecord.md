---
id: approvalidentityrecord
title: Approvalidentityrecord
pagination_label: Approvalidentityrecord
sidebar_label: Approvalidentityrecord
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approvalidentityrecord', 'Approvalidentityrecord'] 
slug: /tools/sdk/python/approvals/models/approvalidentityrecord
tags: ['SDK', 'Software Development Kit', 'Approvalidentityrecord', 'Approvalidentityrecord']
---

# Approvalidentityrecord

Identity Record Object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | Identity ID. | [optional] 
**type** |  **Enum** [  'IDENTITY' ] | Type of identity. | [optional] 
**name** | **str** | Name of the identity. | [optional] 
**actioned_as** | [**[]Approvalreference**](approvalreference) | List of references representing actions taken by the identity. | [optional] 
**members** | [**[]Approvalreference**](approvalreference) | List of references representing members of the identity. | [optional] 
**decision_date** | **datetime** | Date when the decision was made. | [optional] 
**email** | **str** | Email associated with the identity. | [optional] 
}

## Example

```python
from sailpoint.approvals.models.approvalidentityrecord import Approvalidentityrecord

approvalidentityrecord = Approvalidentityrecord(
identity_id='17e633e7d57e481569df76323169deb6a',
type='IDENTITY',
name='Jim Bob',
actioned_as=[
                    sailpoint.approvals.models.approval_reference.Approval Reference(
                        id = '64012350-8fd9-4f6c-a170-1fe123683899', 
                        type = 'AccessRequestId', 
                        name = 'Access Request', 
                        email = 'user@example.com', 
                        serial_order = 0, )
                    ],
members=[
                    sailpoint.approvals.models.approval_reference.Approval Reference(
                        id = '64012350-8fd9-4f6c-a170-1fe123683899', 
                        type = 'AccessRequestId', 
                        name = 'Access Request', 
                        email = 'user@example.com', 
                        serial_order = 0, )
                    ],
decision_date='2023-04-12T23:20:50.520Z',
email='user@example.com'
)

```
[[Back to top]](#) 

