---
id: v2025-data-access
title: DataAccess
pagination_label: DataAccess
sidebar_label: DataAccess
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DataAccess', 'V2025DataAccess'] 
slug: /tools/sdk/python/v2025/models/data-access
tags: ['SDK', 'Software Development Kit', 'DataAccess', 'V2025DataAccess']
---

# DataAccess

DAS data for the entitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policies** | [**[]DataAccessPoliciesInner**](data-access-policies-inner) | List of classification policies that apply to resources the entitlement \\ groups has access to | [optional] 
**categories** | [**[]DataAccessCategoriesInner**](data-access-categories-inner) | List of classification categories that apply to resources the entitlement \\ groups has access to | [optional] 
**impact_score** | [**DataAccessImpactScore**](data-access-impact-score) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.data_access import DataAccess

data_access = DataAccess(
policies=[
                    sailpoint.v2025.models.data_access_policies_inner.DataAccess_policies_inner(
                        value = 'GDPR-20', )
                    ],
categories=[
                    sailpoint.v2025.models.data_access_categories_inner.DataAccess_categories_inner(
                        value = 'email-7', 
                        match_count = 10, )
                    ],
impact_score=sailpoint.v2025.models.data_access_impact_score.DataAccess_impactScore(
                    value = 'Medium', )
)

```
[[Back to top]](#) 

