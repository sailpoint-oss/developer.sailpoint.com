---
id: bulkapproveentitlementrecommendationitem
title: Bulkapproveentitlementrecommendationitem
pagination_label: Bulkapproveentitlementrecommendationitem
sidebar_label: Bulkapproveentitlementrecommendationitem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Bulkapproveentitlementrecommendationitem', 'Bulkapproveentitlementrecommendationitem'] 
slug: /tools/sdk/python/suggested-entitlement-description/models/bulkapproveentitlementrecommendationitem
tags: ['SDK', 'Software Development Kit', 'Bulkapproveentitlementrecommendationitem', 'Bulkapproveentitlementrecommendationitem']
---

# Bulkapproveentitlementrecommendationitem

A single item in a bulk entitlement recommendation approval request. The recordType is optional; the backend resolves the type by ID lookup when omitted. Description applies to SED items only; privilegeLevel is required for privilege items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier of the recommendation record to approve. | [required]
**record_type** |  **Enum** [  'SED',    'privilege' ] | The type of the recommendation. When omitted, the backend resolves the type by looking up the ID. | [optional] 
**description** | **str** | The approved description text. Required for SED-type items; ignored for privilege items. | [optional] 
**privilege_level** | **str** | The approved privilege level. Required for privilege-type items; ignored for SED items. | [optional] 
}

## Example

```python
from sailpoint.suggested_entitlement_description.models.bulkapproveentitlementrecommendationitem import Bulkapproveentitlementrecommendationitem

bulkapproveentitlementrecommendationitem = Bulkapproveentitlementrecommendationitem(
id='79db50d4-723c-4aa0-a824-83c2205d82d1',
record_type='SED',
description='Provides access and permissions related to the Delinea Secret Server Cloud system.',
privilege_level='high'
)

```
[[Back to top]](#) 

