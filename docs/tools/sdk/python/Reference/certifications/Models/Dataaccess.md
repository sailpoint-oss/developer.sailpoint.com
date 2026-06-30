---
id: dataaccess
title: Dataaccess
pagination_label: Dataaccess
sidebar_label: Dataaccess
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Dataaccess', 'Dataaccess'] 
slug: /tools/sdk/python/certifications/models/dataaccess
tags: ['SDK', 'Software Development Kit', 'Dataaccess', 'Dataaccess']
---

# Dataaccess

DAS data for the entitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policies** | [**[]DataaccessPoliciesInner**](dataaccess-policies-inner) | List of classification policies that apply to resources the entitlement \\ groups has access to | [optional] 
**categories** | [**[]DataaccessCategoriesInner**](dataaccess-categories-inner) | List of classification categories that apply to resources the entitlement \\ groups has access to | [optional] 
**impact_score** | [**DataaccessImpactScore**](dataaccess-impact-score) |  | [optional] 
}

## Example

```python
from sailpoint.certifications.models.dataaccess import Dataaccess

dataaccess = Dataaccess(
policies=[
                    sailpoint.certifications.models.dataaccess_policies_inner.dataaccess_policies_inner(
                        value = 'GDPR-20', )
                    ],
categories=[
                    sailpoint.certifications.models.dataaccess_categories_inner.dataaccess_categories_inner(
                        value = 'email-7', 
                        match_count = 10, )
                    ],
impact_score=sailpoint.certifications.models.dataaccess_impact_score.dataaccess_impactScore(
                    value = 'Medium', )
)

```
[[Back to top]](#) 

