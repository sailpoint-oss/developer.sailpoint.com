---
id: entitlementrecommendationassignee
title: Entitlementrecommendationassignee
pagination_label: Entitlementrecommendationassignee
sidebar_label: Entitlementrecommendationassignee
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlementrecommendationassignee', 'Entitlementrecommendationassignee'] 
slug: /tools/sdk/python/suggested-entitlement-description/models/entitlementrecommendationassignee
tags: ['SDK', 'Software Development Kit', 'Entitlementrecommendationassignee', 'Entitlementrecommendationassignee']
---

# Entitlementrecommendationassignee

Describes the target assignee for entitlement recommendations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY',    'GOVERNANCE_GROUP',    'SOURCE_OWNER',    'ENTITLEMENT_OWNER' ] | The type of assignee. | [required]
**value** | **str** | The ID of the identity or governance group to assign to. | [required]
}

## Example

```python
from sailpoint.suggested_entitlement_description.models.entitlementrecommendationassignee import Entitlementrecommendationassignee

entitlementrecommendationassignee = Entitlementrecommendationassignee(
type='IDENTITY',
value='2c91808a7f3b2e8a017f3c3e5f6d0099'
)

```
[[Back to top]](#) 

