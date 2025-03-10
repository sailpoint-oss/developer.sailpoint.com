---
id: beta-recommendation-response
title: RecommendationResponse
pagination_label: RecommendationResponse
sidebar_label: RecommendationResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RecommendationResponse', 'BetaRecommendationResponse'] 
slug: /tools/sdk/python/beta/models/recommendation-response
tags: ['SDK', 'Software Development Kit', 'RecommendationResponse', 'BetaRecommendationResponse']
---

# RecommendationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request** | [**RecommendationRequest**](recommendation-request) |  | [optional] 
**recommendation** |  **Enum** [  'true',    'false',    'MAYBE',    'NOT_FOUND' ] | The recommendation - YES if the access is recommended, NO if not recommended, MAYBE if there is not enough information to make a recommendation, NOT_FOUND if the identity is not found in the system | [optional] 
**interpretations** | **[]str** | The list of interpretations explaining the recommendation. The array is empty if includeInterpretations is false or not present in the request. e.g. - [ \"Not approved in the last 6 months.\" ]. Interpretations will be translated using the client's locale as found in the Accept-Language header. If a translation for the client's locale cannot be found, the US English translation will be returned. | [optional] 
**translation_messages** | [**[]TranslationMessage**](translation-message) | The list of translation messages, if they have been requested. | [optional] 
**recommender_calculations** | [**RecommenderCalculations**](recommender-calculations) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.recommendation_response import RecommendationResponse

recommendation_response = RecommendationResponse(
request=sailpoint.beta.models.recommendation_request.RecommendationRequest(
                    identity_id = '2c938083633d259901633d25c68c00fa', 
                    item = sailpoint.beta.models.access_item_ref.AccessItemRef(
                        id = '2c938083633d259901633d2623ec0375', 
                        type = 'ENTITLEMENT', ), ),
recommendation='true',
interpretations=[75% of identities with the same department have this access. This information had a high impact on the overall score., 67% of identities with the same peer group have this access. This information had a low impact on the overall score., 42% of identities with the same location have this access. This information had a low impact on the overall score.],
translation_messages=[{key=recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH, values=[75, department]}],
recommender_calculations=sailpoint.beta.models.recommender_calculations.RecommenderCalculations(
                    identity_id = '2c91808457d8f3ab0157e3e62cb4213c', 
                    entitlement_id = '2c91809050db617d0150e0bf3215385e', 
                    recommendation = 'YES', 
                    overall_weighted_score = 1.337, 
                    feature_weighted_scores = {
                        'key' : 1.337
                        }, 
                    threshold = 1.337, 
                    identity_attributes = {
                        'key' : sailpoint.beta.models.recommender_calculations_identity_attributes_value.RecommenderCalculations_identityAttributes_value(
                            value = '', )
                        }, 
                    feature_values = sailpoint.beta.models.feature_value_dto.FeatureValueDto(
                        feature = 'department', 
                        numerator = 14, 
                        denominator = 14, ), )
)

```
[[Back to top]](#) 

