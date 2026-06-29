---
id: entitlementrecommendationrecord
title: Entitlementrecommendationrecord
pagination_label: Entitlementrecommendationrecord
sidebar_label: Entitlementrecommendationrecord
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlementrecommendationrecord', 'Entitlementrecommendationrecord'] 
slug: /tools/sdk/python/suggested-entitlement-description/models/entitlementrecommendationrecord
tags: ['SDK', 'Software Development Kit', 'Entitlementrecommendationrecord', 'Entitlementrecommendationrecord']
---

# Entitlementrecommendationrecord

A unified entitlement recommendation record representing either a SED (Suggested Entitlement Description) or a privilege recommendation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**record_type** |  **Enum** [  'SED',    'privilege' ] | The type of recommendation. \"SED\" indicates a suggested description recommendation; \"privilege\" indicates a privilege-level recommendation. | [optional] 
**id** | **str** | The unique identifier for this recommendation record. | [optional] 
**attribute** | **str** | The entitlement attribute name (e.g. \"groups\"). | [optional] 
**display_name** | **str** | The human-readable display name of the entitlement. | [optional] 
**name** | **str** | The internal name of the entitlement. | [optional] 
**source_id** | **str** | The ID of the source that owns this entitlement. | [optional] 
**source_name** | **str** | The display name of the source that owns this entitlement. | [optional] 
**status** | **str** | The current review status of the recommendation. | [optional] 
**type** | **str** | The entitlement type (e.g. \"group\"). | [optional] 
**value** | **str** | The entitlement value or identifier. | [optional] 
**description** | **str** | The current description of the entitlement, if one exists. | [optional] 
**suggested_description** | **str** | The AI-generated suggested description for the entitlement (SED records only). | [optional] 
**privilege** | **str** | The current privilege level assigned to the entitlement. | [optional] 
**suggested_privilege** | **str** | The AI-suggested privilege level for the entitlement (privilege records only). | [optional] 
**approved_by** | **str** | The ID of the identity who approved this recommendation. | [optional] 
**approved_type** | **str** | How the recommendation was approved (e.g. \"direct\"). | [optional] 
**approved_when** | **datetime** | The timestamp when the recommendation was approved. | [optional] 
**llm_batch_created_at** | **datetime** | The timestamp when the LLM batch that generated this recommendation was created. | [optional] 
}

## Example

```python
from sailpoint.suggested_entitlement_description.models.entitlementrecommendationrecord import Entitlementrecommendationrecord

entitlementrecommendationrecord = Entitlementrecommendationrecord(
record_type='SED',
id='79db50d4-723c-4aa0-a824-83c2205d82d1',
attribute='groups',
display_name='Schema Admins',
name='Schema Admins',
source_id='2c9180877a7c8e88017a7d1234567890',
source_name='Active Directory',
status='suggested',
type='group',
value='CN=Schema Admins,DC=example,DC=com',
description='Grants full control over the Active Directory schema.',
suggested_description='Grants full administrative access to the domain.',
privilege='high',
suggested_privilege='high',
approved_by='2c91808a7f3b2e8a017f3c3e5f6d0099',
approved_type='direct',
approved_when='2026-03-15T14:22Z',
llm_batch_created_at='2026-03-01T00:00Z'
)

```
[[Back to top]](#) 

