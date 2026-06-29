---
id: accessrequestrecommendationitemdetail
title: Accessrequestrecommendationitemdetail
pagination_label: Accessrequestrecommendationitemdetail
sidebar_label: Accessrequestrecommendationitemdetail
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessrequestrecommendationitemdetail', 'Accessrequestrecommendationitemdetail'] 
slug: /tools/sdk/python/iai-access-request-recommendations/models/accessrequestrecommendationitemdetail
tags: ['SDK', 'Software Development Kit', 'Accessrequestrecommendationitemdetail', 'Accessrequestrecommendationitemdetail']
---

# Accessrequestrecommendationitemdetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | Identity ID for the recommendation | [optional] 
**access** | [**AccessrequestrecommendationitemdetailAccess**](accessrequestrecommendationitemdetail-access) |  | [optional] 
**ignored** | **bool** | Whether or not the identity has already chosen to ignore this recommendation. | [optional] 
**requested** | **bool** | Whether or not the identity has already chosen to request this recommendation. | [optional] 
**viewed** | **bool** | Whether or not the identity reportedly viewed this recommendation. | [optional] 
**messages** | [**[]Accessrecommendationmessage**](accessrecommendationmessage) |  | [optional] 
**translation_messages** | [**[]Translationmessage**](translationmessage) | The list of translation messages | [optional] 
}

## Example

```python
from sailpoint.iai_access_request_recommendations.models.accessrequestrecommendationitemdetail import Accessrequestrecommendationitemdetail

accessrequestrecommendationitemdetail = Accessrequestrecommendationitemdetail(
identity_id='2c91808570313110017040b06f344ec9',
access=sailpoint.iai_access_request_recommendations.models.accessrequestrecommendationitemdetail_access.accessrequestrecommendationitemdetail_access(
                    id = '2c9180835d2e5168015d32f890ca1581', 
                    type = 'ACCESS_PROFILE', 
                    name = 'Employee-database-read-write', 
                    description = 'This item grants an employee read and write access to the database', ),
ignored=True,
requested=True,
viewed=True,
messages=[
                    sailpoint.iai_access_request_recommendations.models.access_recommendation_message.Access Recommendation Message(
                        interpretation = '95% of your peers have this access.', )
                    ],
translation_messages=[{"key":"recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH","values":["75","department"]}]
)

```
[[Back to top]](#) 

