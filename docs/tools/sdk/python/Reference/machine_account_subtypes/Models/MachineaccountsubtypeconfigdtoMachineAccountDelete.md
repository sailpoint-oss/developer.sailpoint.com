---
id: machineaccountsubtypeconfigdto-machine-account-delete
title: MachineaccountsubtypeconfigdtoMachineAccountDelete
pagination_label: MachineaccountsubtypeconfigdtoMachineAccountDelete
sidebar_label: MachineaccountsubtypeconfigdtoMachineAccountDelete
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MachineaccountsubtypeconfigdtoMachineAccountDelete', 'MachineaccountsubtypeconfigdtoMachineAccountDelete'] 
slug: /tools/sdk/python/machine-account-subtypes/models/machineaccountsubtypeconfigdto-machine-account-delete
tags: ['SDK', 'Software Development Kit', 'MachineaccountsubtypeconfigdtoMachineAccountDelete', 'MachineaccountsubtypeconfigdtoMachineAccountDelete']
---

# MachineaccountsubtypeconfigdtoMachineAccountDelete

Configuration options for machine account deletion, including whether approval is required, the list of authorized approvers, and the types of comments permitted during the approval workflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_required** | **bool** | Indicates whether approval is required for an account deletion request. | [optional] [default to False]
**approval_config** | [**Machinesubtypeapprovalconfig**](machinesubtypeapprovalconfig) |  | [optional] 
}

## Example

```python
from sailpoint.machine_account_subtypes.models.machineaccountsubtypeconfigdto_machine_account_delete import MachineaccountsubtypeconfigdtoMachineAccountDelete

machineaccountsubtypeconfigdto_machine_account_delete = MachineaccountsubtypeconfigdtoMachineAccountDelete(
approval_required=True,
approval_config=sailpoint.machine_account_subtypes.models.machine_subtype_approval_config_dto.Machine Subtype Approval Config Dto(
                    approvers = 'manager, workgroup:1419fc28-a8ed-4a07-9f5c-0cb5dfad6311', 
                    comments = 'ALL', )
)

```
[[Back to top]](#) 

