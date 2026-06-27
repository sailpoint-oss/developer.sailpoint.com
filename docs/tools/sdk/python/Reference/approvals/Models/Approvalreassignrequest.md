---
id: approvalreassignrequest
title: Approvalreassignrequest
pagination_label: Approvalreassignrequest
sidebar_label: Approvalreassignrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approvalreassignrequest', 'Approvalreassignrequest'] 
slug: /tools/sdk/python/approvals/models/approvalreassignrequest
tags: ['SDK', 'Software Development Kit', 'Approvalreassignrequest', 'Approvalreassignrequest']
---

# Approvalreassignrequest

Request body for reassigning an approval request to another identity. This results in that identity being added as an authorized approver.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment associated with the reassign request. | [optional] 
**reassign_from** | **str** | Identity from which the approval is being reassigned. If left blank, and the approval is currently assigned to the user calling this endpoint, it will use the calling user's identity. If left blank, and the approval is not currently assigned to the user calling this endpoint, you need to be an admin, which would add the reassignTo as a new approver. | [optional] 
**reassign_to** | **str** | Identity to which the approval is being reassigned. | [optional] 
}

## Example

```python
from sailpoint.approvals.models.approvalreassignrequest import Approvalreassignrequest

approvalreassignrequest = Approvalreassignrequest(
comment='comment',
reassign_from='384532516be25f8fdf935ce19e295837',
reassign_to='152354832eb6f8f539fd738592e19ec5'
)

```
[[Back to top]](#) 

