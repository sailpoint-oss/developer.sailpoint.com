---
id: v2025-identity-entitlement-details-account-target
title: IdentityEntitlementDetailsAccountTarget
pagination_label: IdentityEntitlementDetailsAccountTarget
sidebar_label: IdentityEntitlementDetailsAccountTarget
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityEntitlementDetailsAccountTarget', 'V2025IdentityEntitlementDetailsAccountTarget'] 
slug: /tools/sdk/python/v2025/models/identity-entitlement-details-account-target
tags: ['SDK', 'Software Development Kit', 'IdentityEntitlementDetailsAccountTarget', 'V2025IdentityEntitlementDetailsAccountTarget']
---

# IdentityEntitlementDetailsAccountTarget


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The id of account | [optional] 
**account_name** | **str** | The name of account | [optional] 
**account_uuid** | **str** | The UUID representation of the account if available | [optional] 
**source_id** | **str** | The id of Source | [optional] 
**source_name** | **str** | The name of Source | [optional] 
**remove_date** | **str** | The removal date scheduled for the entitlement on the Identity | [optional] 
**assignment_id** | **str** | The assignmentId of the entitlement on the Identity | [optional] 
**revocable** | **bool** | If the entitlement can be revoked | [optional] [default to False]
}

## Example

```python
from sailpoint.v2025.models.identity_entitlement_details_account_target import IdentityEntitlementDetailsAccountTarget

identity_entitlement_details_account_target = IdentityEntitlementDetailsAccountTarget(
account_id='c5ef070e-92c6-4276-a006-98490f132dec',
account_name='Adalberto.XYZ',
account_uuid='2236c29e-68a6-494d-a469-d072172f46cf',
source_id='9269d764-8358-4ab9-9748-d4b7418548ca',
source_name='JDBC XYZ Source',
remove_date='2035-01-01T12:00:00.000Z',
assignment_id='77a5b7b4-262f-4b6a-a2aa-87f84f45f96f',
revocable=True
)

```
[[Back to top]](#) 

