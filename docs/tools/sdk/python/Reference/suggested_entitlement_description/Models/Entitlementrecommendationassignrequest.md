---
id: entitlementrecommendationassignrequest
title: Entitlementrecommendationassignrequest
pagination_label: Entitlementrecommendationassignrequest
sidebar_label: Entitlementrecommendationassignrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlementrecommendationassignrequest', 'Entitlementrecommendationassignrequest'] 
slug: /tools/sdk/python/suggested-entitlement-description/models/entitlementrecommendationassignrequest
tags: ['SDK', 'Software Development Kit', 'Entitlementrecommendationassignrequest', 'Entitlementrecommendationassignrequest']
---

# Entitlementrecommendationassignrequest

Request body for assigning a set of entitlement recommendations to a reviewer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | **[]str** | The list of recommendation record IDs to assign. | [required]
**assignee** | [**Entitlementrecommendationassignee**](entitlementrecommendationassignee) |  | [required]
}

## Example

```python
from sailpoint.suggested_entitlement_description.models.entitlementrecommendationassignrequest import Entitlementrecommendationassignrequest

entitlementrecommendationassignrequest = Entitlementrecommendationassignrequest(
items=["79db50d4-723c-4aa0-a824-83c2205d82d1","a1b2c3d4-e5f6-7890-abcd-ef1234567890"],
assignee=
)

```
[[Back to top]](#) 

