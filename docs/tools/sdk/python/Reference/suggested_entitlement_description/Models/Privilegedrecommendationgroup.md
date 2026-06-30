---
id: privilegedrecommendationgroup
title: Privilegedrecommendationgroup
pagination_label: Privilegedrecommendationgroup
sidebar_label: Privilegedrecommendationgroup
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Privilegedrecommendationgroup', 'Privilegedrecommendationgroup'] 
slug: /tools/sdk/python/suggested-entitlement-description/models/privilegedrecommendationgroup
tags: ['SDK', 'Software Development Kit', 'Privilegedrecommendationgroup', 'Privilegedrecommendationgroup']
---

# Privilegedrecommendationgroup

A group of entitlement instances that share the same entitlement name and connector type, aggregated for privileged-access review.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlement_name** | **str** | The name of the entitlement shared across all instances in this group. | [optional] 
**connector_type** | **str** | The connector type associated with all instances in this group. | [optional] 
**recommendation_score** | **str** | A decimal string representing the confidence score of the privilege recommendation (0.0-1.0). | [optional] 
**org_count** | **int** | The number of organizations in which this entitlement appears as privileged. | [optional] 
**instance_count** | **int** | The total number of individual entitlement instances in this group. | [optional] 
**instances** | [**[]Privilegedrecommendationinstance**](privilegedrecommendationinstance) | The individual entitlement instances belonging to this group. | [optional] 
}

## Example

```python
from sailpoint.suggested_entitlement_description.models.privilegedrecommendationgroup import Privilegedrecommendationgroup

privilegedrecommendationgroup = Privilegedrecommendationgroup(
entitlement_name='Domain Admins',
connector_type='Active Directory - Direct',
recommendation_score='.85',
org_count=8,
instance_count=2,
instances=[
                    sailpoint.suggested_entitlement_description.models.privileged_recommendation_instance.Privileged Recommendation Instance(
                        id = 'd6127d2c-bd62-4217-b187-e4b28f328080', 
                        attribute = 'memberOf', 
                        source_id = '2c9180877a7c8e88017a7d1234567890', 
                        source_name = 'AD Corp', 
                        type = 'group', 
                        value = 'CN=Domain Admins,CN=Users,DC=corp,DC=example,DC=com', 
                        status = 'suggested', 
                        privilege_level = 'high', 
                        description = 'Grants full administrative access to the domain.', 
                        recommended_at = '2026-03-01T00:00Z', )
                    ]
)

```
[[Back to top]](#) 

