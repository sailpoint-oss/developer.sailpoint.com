---
id: sodpolicy-owner-ref
title: SodpolicyOwnerRef
pagination_label: SodpolicyOwnerRef
sidebar_label: SodpolicyOwnerRef
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SodpolicyOwnerRef', 'SodpolicyOwnerRef'] 
slug: /tools/sdk/python/sod-policies/models/sodpolicy-owner-ref
tags: ['SDK', 'Software Development Kit', 'SodpolicyOwnerRef', 'SodpolicyOwnerRef']
---

# SodpolicyOwnerRef

The owner of the SOD policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY',    'GOVERNANCE_GROUP' ] | Owner type. | [optional] 
**id** | **str** | Owner's ID. | [optional] 
**name** | **str** | Owner's name. | [optional] 
}

## Example

```python
from sailpoint.sod_policies.models.sodpolicy_owner_ref import SodpolicyOwnerRef

sodpolicy_owner_ref = SodpolicyOwnerRef(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Support'
)

```
[[Back to top]](#) 

