---
id: machineaccountsubtypeconfigdto
title: Machineaccountsubtypeconfigdto
pagination_label: Machineaccountsubtypeconfigdto
sidebar_label: Machineaccountsubtypeconfigdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Machineaccountsubtypeconfigdto', 'Machineaccountsubtypeconfigdto'] 
slug: /tools/sdk/python/machine-account-subtypes/models/machineaccountsubtypeconfigdto
tags: ['SDK', 'Software Development Kit', 'Machineaccountsubtypeconfigdto', 'Machineaccountsubtypeconfigdto']
---

# Machineaccountsubtypeconfigdto

Contains comprehensive configuration details for machine account subtype approval, including creation and deletion approval requirements, approver lists, form and entitlement references, and approval status options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subtype_id** | **str** | Unique identifier representing the specific subtype of the machine account, used to distinguish between different machine account categories. | [optional] 
**machine_account_create** | [**MachineaccountsubtypeconfigdtoMachineAccountCreate**](machineaccountsubtypeconfigdto-machine-account-create) |  | [optional] 
**machine_account_delete** | [**MachineaccountsubtypeconfigdtoMachineAccountDelete**](machineaccountsubtypeconfigdto-machine-account-delete) |  | [optional] 
}

## Example

```python
from sailpoint.machine_account_subtypes.models.machineaccountsubtypeconfigdto import Machineaccountsubtypeconfigdto

machineaccountsubtypeconfigdto = Machineaccountsubtypeconfigdto(
subtype_id='1419fc28-a8ed-4a07-9f5c-0cb5dfad6311',
machine_account_create=sailpoint.machine_account_subtypes.models.machineaccountsubtypeconfigdto_machine_account_create.machineaccountsubtypeconfigdto_machineAccountCreate(
                    account_create_enabled = True, 
                    approval_required = True, 
                    form_id = '4f1bb61b-a0ab-4c0a-b9fb-20f44407b75a', 
                    entitlement_id = '858d2151-ff19-464b-ae0d-6938b3af2baf', 
                    password_setting = 'SET_TO_EXISTING_ATTRIBUTE', 
                    password_attribute = 'accountName', 
                    approval_config = sailpoint.machine_account_subtypes.models.machine_subtype_approval_config_dto.Machine Subtype Approval Config Dto(
                        approvers = 'manager, workgroup:1419fc28-a8ed-4a07-9f5c-0cb5dfad6311', 
                        comments = 'ALL', ), ),
machine_account_delete=sailpoint.machine_account_subtypes.models.machineaccountsubtypeconfigdto_machine_account_delete.machineaccountsubtypeconfigdto_machineAccountDelete(
                    approval_required = True, 
                    approval_config = sailpoint.machine_account_subtypes.models.machine_subtype_approval_config_dto.Machine Subtype Approval Config Dto(
                        approvers = 'manager, workgroup:1419fc28-a8ed-4a07-9f5c-0cb5dfad6311', 
                        comments = 'ALL', ), )
)

```
[[Back to top]](#) 

