---
id: create-machine-account-subtype-v1-request
title: CreateMachineAccountSubtypeV1Request
pagination_label: CreateMachineAccountSubtypeV1Request
sidebar_label: CreateMachineAccountSubtypeV1Request
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CreateMachineAccountSubtypeV1Request', 'CreateMachineAccountSubtypeV1Request'] 
slug: /tools/sdk/python/machine-accounts/models/create-machine-account-subtype-v1-request
tags: ['SDK', 'Software Development Kit', 'CreateMachineAccountSubtypeV1Request', 'CreateMachineAccountSubtypeV1Request']
---

# CreateMachineAccountSubtypeV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**technical_name** | **str** | Technical name of the subtype. | [required]
**display_name** | **str** | Display name of the subtype. | [required]
**description** | **str** | Description of the subtype. | [required]
**type** | **str** | Type of the subtype. | [optional] 
}

## Example

```python
from sailpoint.machine_accounts.models.create_machine_account_subtype_v1_request import CreateMachineAccountSubtypeV1Request

create_machine_account_subtype_v1_request = CreateMachineAccountSubtypeV1Request(
technical_name='foo',
display_name='Mr Foo',
description='fighters',
type='MACHINE'
)

```
[[Back to top]](#) 

