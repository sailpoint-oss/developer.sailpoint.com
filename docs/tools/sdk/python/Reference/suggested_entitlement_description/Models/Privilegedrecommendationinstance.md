---
id: privilegedrecommendationinstance
title: Privilegedrecommendationinstance
pagination_label: Privilegedrecommendationinstance
sidebar_label: Privilegedrecommendationinstance
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Privilegedrecommendationinstance', 'Privilegedrecommendationinstance'] 
slug: /tools/sdk/python/suggested-entitlement-description/models/privilegedrecommendationinstance
tags: ['SDK', 'Software Development Kit', 'Privilegedrecommendationinstance', 'Privilegedrecommendationinstance']
---

# Privilegedrecommendationinstance

An individual entitlement instance within a privileged recommendation group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier for this entitlement instance. | [optional] 
**attribute** | **str** | The entitlement attribute name. | [optional] 
**source_id** | **str** | The ID of the source that owns this entitlement. | [optional] 
**source_name** | **str** | The display name of the source. | [optional] 
**type** | **str** | The entitlement type. | [optional] 
**value** | **str** | The entitlement value or distinguished name. | [optional] 
**status** | **str** | The current review status of this instance. | [optional] 
**privilege_level** | **str** | The currently assigned privilege level, if any. | [optional] 
**description** | **str** | The current description of the entitlement, if one exists. | [optional] 
**recommended_at** | **datetime** | The timestamp when this instance was recommended. | [optional] 
}

## Example

```python
from sailpoint.suggested_entitlement_description.models.privilegedrecommendationinstance import Privilegedrecommendationinstance

privilegedrecommendationinstance = Privilegedrecommendationinstance(
id='d6127d2c-bd62-4217-b187-e4b28f328080',
attribute='memberOf',
source_id='2c9180877a7c8e88017a7d1234567890',
source_name='AD Corp',
type='group',
value='CN=Domain Admins,CN=Users,DC=corp,DC=example,DC=com',
status='suggested',
privilege_level='high',
description='Grants full administrative access to the domain.',
recommended_at='2026-03-01T00:00Z'
)

```
[[Back to top]](#) 

