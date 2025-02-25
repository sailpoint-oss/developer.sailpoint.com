---
id: beta-access-request-recommendation-item-detail
title: AccessRequestRecommendationItemDetail
pagination_label: AccessRequestRecommendationItemDetail
sidebar_label: AccessRequestRecommendationItemDetail
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestRecommendationItemDetail', 'BetaAccessRequestRecommendationItemDetail'] 
slug: /tools/sdk/python/beta/models/access-request-recommendation-item-detail
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationItemDetail', 'BetaAccessRequestRecommendationItemDetail']
---

# AccessRequestRecommendationItemDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | Identity ID for the recommendation | [optional] 
**access** | [**AccessRequestRecommendationItemDetailAccess**](access-request-recommendation-item-detail-access) |  | [optional] 
**ignored** | **bool** | Whether or not the identity has already chosen to ignore this recommendation. | [optional] 
**requested** | **bool** | Whether or not the identity has already chosen to request this recommendation. | [optional] 
**viewed** | **bool** | Whether or not the identity reportedly viewed this recommendation. | [optional] 
**messages** | [**[]AccessRecommendationMessage**](access-recommendation-message) |  | [optional] 
**translation_messages** | [**[]TranslationMessage**](translation-message) | The list of translation messages | [optional] 
}

## Example

```python
from sailpoint.beta.models.access_request_recommendation_item_detail import AccessRequestRecommendationItemDetail

access_request_recommendation_item_detail = AccessRequestRecommendationItemDetail(
identity_id='2c91808570313110017040b06f344ec9',
access=sailpoint.beta.models.access_request_recommendation_item_detail_access.AccessRequestRecommendationItemDetail_access(
                    id = '2c9180835d2e5168015d32f890ca1581', 
                    type = 'ACCESS_PROFILE', 
                    name = 'Employee-database-read-write', 
                    description = 'This item grants an employee read and write access to the database', ),
ignored=True,
requested=True,
viewed=True,
messages=[
                    sailpoint.beta.models.access_recommendation_message.AccessRecommendationMessage(
                        interpretation = '95% of your peers have this access.', )
                    ],
translation_messages=[{key=recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH, values=[75, department]}]
)

```
[[Back to top]](#) 

