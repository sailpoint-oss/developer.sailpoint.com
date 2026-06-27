---
id: entitlementrecommendationassignee-one-of1
title: EntitlementrecommendationassigneeOneOf1
pagination_label: EntitlementrecommendationassigneeOneOf1
sidebar_label: EntitlementrecommendationassigneeOneOf1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementrecommendationassigneeOneOf1', 'EntitlementrecommendationassigneeOneOf1'] 
slug: /tools/sdk/python/suggested-entitlement-description/models/entitlementrecommendationassignee-one-of1
tags: ['SDK', 'Software Development Kit', 'EntitlementrecommendationassigneeOneOf1', 'EntitlementrecommendationassigneeOneOf1']
---

# EntitlementrecommendationassigneeOneOf1

Assign to the source owner or entitlement owner role. No value field is required.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'SOURCE_OWNER',    'ENTITLEMENT_OWNER' ] | The type of assignee. | [required]
}

## Example

```python
from sailpoint.suggested_entitlement_description.models.entitlementrecommendationassignee_one_of1 import EntitlementrecommendationassigneeOneOf1

entitlementrecommendationassignee_one_of1 = EntitlementrecommendationassigneeOneOf1(
type='SOURCE_OWNER'
)

```
[[Back to top]](#) 

