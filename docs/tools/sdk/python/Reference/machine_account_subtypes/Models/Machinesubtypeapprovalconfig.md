---
id: machinesubtypeapprovalconfig
title: Machinesubtypeapprovalconfig
pagination_label: Machinesubtypeapprovalconfig
sidebar_label: Machinesubtypeapprovalconfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Machinesubtypeapprovalconfig', 'Machinesubtypeapprovalconfig'] 
slug: /tools/sdk/python/machine-account-subtypes/models/machinesubtypeapprovalconfig
tags: ['SDK', 'Software Development Kit', 'Machinesubtypeapprovalconfig', 'Machinesubtypeapprovalconfig']
---

# Machinesubtypeapprovalconfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvers** | **str** | Comma separated string of approvers.  Following are the options for approver types: manager, sourceOwner, accountOwner, workgroup:[workgroupId] (Governance group).  Approval request will be assigned based on the order of the approvers passed.  Multiple workgroups(governance groups) can be selected as an approver.  >**Note:** accountOwner approver type is only for machine account delete approval settings. | [optional] 
**comments** | **str** | Comment configurations for the approval request.  Following are the options for comments: ALL, OFF, APPROVAL, REJECT. | [optional] 
}

## Example

```python
from sailpoint.machine_account_subtypes.models.machinesubtypeapprovalconfig import Machinesubtypeapprovalconfig

machinesubtypeapprovalconfig = Machinesubtypeapprovalconfig(
approvers='manager, workgroup:1419fc28-a8ed-4a07-9f5c-0cb5dfad6311',
comments='ALL'
)

```
[[Back to top]](#) 

