---
id: v2025-access-item-entitlement-response
title: AccessItemEntitlementResponse
pagination_label: AccessItemEntitlementResponse
sidebar_label: AccessItemEntitlementResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessItemEntitlementResponse', 'V2025AccessItemEntitlementResponse'] 
slug: /tools/sdk/python/v2025/models/access-item-entitlement-response
tags: ['SDK', 'Software Development Kit', 'AccessItemEntitlementResponse', 'V2025AccessItemEntitlementResponse']
---

# AccessItemEntitlementResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the access item id | [optional] 
**access_type** | **str** | the access item type. entitlement in this case | [optional] 
**display_name** | **str** | the display name of the identity | [optional] 
**source_name** | **str** | the name of the source | [optional] 
**attribute** | **str** | the entitlement attribute | [required]
**value** | **str** | the associated value | [required]
**type** | **str** | the type of entitlement | [required]
**description** | **str** | the description for the entitlment | [optional] 
**source_id** | **str** | the id of the source | [optional] 
**standalone** | **bool** | indicates whether the entitlement is standalone | [required]
**privileged** | **bool** | indicates whether the entitlement is privileged | [required]
**cloud_governed** | **bool** | indicates whether the entitlement is cloud governed | [required]
}

## Example

```python
from sailpoint.v2025.models.access_item_entitlement_response import AccessItemEntitlementResponse

access_item_entitlement_response = AccessItemEntitlementResponse(
id='2c918087763e69d901763e72e97f006f',
access_type='entitlement',
display_name='Dr. Arden Rogahn MD',
source_name='DataScienceDataset',
attribute='groups',
value='Upward mobility access',
type='ENTITLEMENT',
description='Entitlement - Workday/Citizenship access',
source_id='2793o32dwd',
standalone=True,
privileged=False,
cloud_governed=True
)

```
[[Back to top]](#) 

