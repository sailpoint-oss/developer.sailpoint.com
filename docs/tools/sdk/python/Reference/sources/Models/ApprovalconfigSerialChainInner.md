---
id: approvalconfig-serial-chain-inner
title: ApprovalconfigSerialChainInner
pagination_label: ApprovalconfigSerialChainInner
sidebar_label: ApprovalconfigSerialChainInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalconfigSerialChainInner', 'ApprovalconfigSerialChainInner'] 
slug: /tools/sdk/python/sources/models/approvalconfig-serial-chain-inner
tags: ['SDK', 'Software Development Kit', 'ApprovalconfigSerialChainInner', 'ApprovalconfigSerialChainInner']
---

# ApprovalconfigSerialChainInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tier** | **int** | Starting at 1 defines the order in which the identities will get assigned | [optional] 
**identity_id** | **str** | Optional Identity ID of the type of identity defined in the 'identityType' field. | [optional] 
**identity_type** |  **Enum** [  'IDENTITY',    'GOVERNANCE_GROUP',    'MANAGER_OF',    'ACCOUNT_OWNER',    'MACHINE_ACCOUNT_OWNER',    'MACHINE_IDENTITY_OWNER',    'MANAGER_OF_REQUESTED_TARGET_OWNER',    'MANAGER_OF_MACHINE_IDENTITY_OWNER',    'MANAGER_OF_ACCOUNT_OWNER',    'MANAGER_OF_MACHINE_ACCOUNT_OWNER',    'MANAGER_OF_REQUESTER',    'MANAGER_OF_REQUESTER_OWNER',    'MANAGER_OF_OWNER',    'ACCESS_PROFILE_OWNER',    'APPLICATION_OWNER',    'ENTITLEMENT_OWNER',    'ROLE_OWNER',    'SOURCE_OWNER',    'REQUESTED_TARGET_OWNER',    'ACCESS_PROFILE_PRIMARY_OWNER',    'APPLICATION_PRIMARY_OWNER',    'ENTITLEMENT_PRIMARY_OWNER',    'ROLE_PRIMARY_OWNER',    'SOURCE_PRIMARY_OWNER',    'REQUESTED_TARGET_PRIMARY_OWNER',    'ACCESS_PROFILE_SECONDARY_OWNER_GROUP',    'APPLICATION_SECONDARY_OWNER_GROUP',    'ENTITLEMENT_SECONDARY_OWNER_GROUP',    'ROLE_SECONDARY_OWNER_GROUP',    'SOURCE_SECONDARY_OWNER_GROUP',    'REQUESTED_TARGET_SECONDARY_OWNER_GROUP',    'ACCESS_PROFILE_ALL_OWNER_GROUP',    'APPLICATION_ALL_OWNER_GROUP',    'ENTITLEMENT_ALL_OWNER_GROUP',    'ROLE_ALL_OWNER_GROUP',    'SOURCE_ALL_OWNER_GROUP',    'REQUESTED_TARGET_ALL_OWNER_GROUP' ] | Type of identityId in the serial chain. | [optional] 
}

## Example

```python
from sailpoint.sources.models.approvalconfig_serial_chain_inner import ApprovalconfigSerialChainInner

approvalconfig_serial_chain_inner = ApprovalconfigSerialChainInner(
tier=1,
identity_id='2c9180858090ea8801809a0465e829da',
identity_type='IDENTITY'
)

```
[[Back to top]](#) 

