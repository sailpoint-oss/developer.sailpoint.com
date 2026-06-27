---
id: entitlementrecommendationassignresult
title: Entitlementrecommendationassignresult
pagination_label: Entitlementrecommendationassignresult
sidebar_label: Entitlementrecommendationassignresult
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlementrecommendationassignresult', 'Entitlementrecommendationassignresult'] 
slug: /tools/sdk/python/suggested-entitlement-description/models/entitlementrecommendationassignresult
tags: ['SDK', 'Software Development Kit', 'Entitlementrecommendationassignresult', 'Entitlementrecommendationassignresult']
---

# Entitlementrecommendationassignresult

Response body returned when entitlement recommendations are successfully queued for assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **str** | The unique identifier of the assignment batch created by this request. | [optional] 
}

## Example

```python
from sailpoint.suggested_entitlement_description.models.entitlementrecommendationassignresult import Entitlementrecommendationassignresult

entitlementrecommendationassignresult = Entitlementrecommendationassignresult(
batch_id='770e8400-e29b-41d4-a716-446655440099'
)

```
[[Back to top]](#) 

