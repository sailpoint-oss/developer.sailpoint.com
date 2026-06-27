---
id: entitlementrecommendationassignee-one-of
title: EntitlementrecommendationassigneeOneOf
pagination_label: EntitlementrecommendationassigneeOneOf
sidebar_label: EntitlementrecommendationassigneeOneOf
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementrecommendationassigneeOneOf', 'EntitlementrecommendationassigneeOneOf'] 
slug: /tools/sdk/python/suggested-entitlement-description/models/entitlementrecommendationassignee-one-of
tags: ['SDK', 'Software Development Kit', 'EntitlementrecommendationassigneeOneOf', 'EntitlementrecommendationassigneeOneOf']
---

# EntitlementrecommendationassigneeOneOf

Assign to a specific identity or governance group. The value field is required and must be the ID of the identity or governance group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY',    'GOVERNANCE_GROUP' ] | The type of assignee. | [required]
**value** | **str** | The ID of the identity or governance group to assign to. | [required]
}

## Example

```python
from sailpoint.suggested_entitlement_description.models.entitlementrecommendationassignee_one_of import EntitlementrecommendationassigneeOneOf

entitlementrecommendationassignee_one_of = EntitlementrecommendationassigneeOneOf(
type='IDENTITY',
value='2c91808a7f3b2e8a017f3c3e5f6d0099'
)

```
[[Back to top]](#) 

