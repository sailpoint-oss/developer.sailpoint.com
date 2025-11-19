---
id: v2025-approval-config-serial-chain-inner
title: ApprovalConfigSerialChainInner
pagination_label: ApprovalConfigSerialChainInner
sidebar_label: ApprovalConfigSerialChainInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalConfigSerialChainInner', 'V2025ApprovalConfigSerialChainInner'] 
slug: /tools/sdk/python/v2025/models/approval-config-serial-chain-inner
tags: ['SDK', 'Software Development Kit', 'ApprovalConfigSerialChainInner', 'V2025ApprovalConfigSerialChainInner']
---

# ApprovalConfigSerialChainInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chain_id** | **str** | ID of the serial chain. | [optional] 
**tier** | **int** | Starting at 1 defines the order in which the identities will get assigned | [optional] 
**identity_id** | **str** | Identity ID in the serial chain. | [optional] 
**identity_type** | **str** | Type of identity in the serial chain. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.approval_config_serial_chain_inner import ApprovalConfigSerialChainInner

approval_config_serial_chain_inner = ApprovalConfigSerialChainInner(
chain_id='23dc206e-2a9e-4f98-93db-8d6e342cca18',
tier=1,
identity_id='2c9180858090ea8801809a0465e829da',
identity_type='IDENTITY'
)

```
[[Back to top]](#) 

