---
id: bulkapproveentitlementrecommendationresult
title: Bulkapproveentitlementrecommendationresult
pagination_label: Bulkapproveentitlementrecommendationresult
sidebar_label: Bulkapproveentitlementrecommendationresult
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Bulkapproveentitlementrecommendationresult', 'Bulkapproveentitlementrecommendationresult'] 
slug: /tools/sdk/python/suggested-entitlement-description/models/bulkapproveentitlementrecommendationresult
tags: ['SDK', 'Software Development Kit', 'Bulkapproveentitlementrecommendationresult', 'Bulkapproveentitlementrecommendationresult']
---

# Bulkapproveentitlementrecommendationresult

The result for a single item in a bulk entitlement recommendation approval response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier of the processed recommendation record. | [optional] 
**status** |  **Enum** [  'SUCCESS',    'FAILURE' ] | The outcome of the approval for this item. | [optional] 
**failed_reason** | **str** | The reason for failure if status is FAILURE; null on success. | [optional] 
}

## Example

```python
from sailpoint.suggested_entitlement_description.models.bulkapproveentitlementrecommendationresult import Bulkapproveentitlementrecommendationresult

bulkapproveentitlementrecommendationresult = Bulkapproveentitlementrecommendationresult(
id='79db50d4-723c-4aa0-a824-83c2205d82d1',
status='SUCCESS',
failed_reason=''
)

```
[[Back to top]](#) 

