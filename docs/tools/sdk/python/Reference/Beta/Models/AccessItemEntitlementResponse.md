---
id: beta-access-item-entitlement-response
title: AccessItemEntitlementResponse
pagination_label: AccessItemEntitlementResponse
sidebar_label: AccessItemEntitlementResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessItemEntitlementResponse', 'BetaAccessItemEntitlementResponse'] 
slug: /tools/sdk/python/beta/models/access-item-entitlement-response
tags: ['SDK', 'Software Development Kit', 'AccessItemEntitlementResponse', 'BetaAccessItemEntitlementResponse']
---

# AccessItemEntitlementResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_type** | **str** | the access item type. entitlement in this case | [optional] 
**id** | **str** | the access item id | [optional] 
**attribute** | **str** | the entitlement attribute | [optional] 
**value** | **str** | the associated value | [optional] 
**entitlement_type** | **str** | the type of entitlement | [optional] 
**source_name** | **str** | the name of the source | [optional] 
**source_id** | **str** | the id of the source | [optional] 
**description** | **str** | the description for the entitlment | [optional] 
**display_name** | **str** | the display name of the identity | [optional] 
**standalone** | **bool** | indicates whether the entitlement is standalone | [required]
**privileged** | **bool** | indicates whether the entitlement is privileged | [required]
**cloud_governed** | **bool** | indicates whether the entitlement is cloud governed | [required]
}

## Example

```python
from sailpoint.beta.models.access_item_entitlement_response import AccessItemEntitlementResponse

access_item_entitlement_response = AccessItemEntitlementResponse(
access_type='entitlement',
id='2c918087763e69d901763e72e97f006f',
attribute='groups',
value='Upward mobility access',
entitlement_type='entitlement',
source_name='DataScienceDataset',
source_id='2793o32dwd',
description='Entitlement - Workday/Citizenship access',
display_name='Dr. Arden Rogahn MD',
standalone=True,
privileged=False,
cloud_governed=True
)

```
[[Back to top]](#) 

