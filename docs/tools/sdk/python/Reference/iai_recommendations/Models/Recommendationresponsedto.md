---
id: recommendationresponsedto
title: Recommendationresponsedto
pagination_label: Recommendationresponsedto
sidebar_label: Recommendationresponsedto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Recommendationresponsedto', 'Recommendationresponsedto'] 
slug: /tools/sdk/python/iai-recommendations/models/recommendationresponsedto
tags: ['SDK', 'Software Development Kit', 'Recommendationresponsedto', 'Recommendationresponsedto']
---

# Recommendationresponsedto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response** | [**[]Recommendationresponse**](recommendationresponse) |  | [optional] 
}

## Example

```python
from sailpoint.iai_recommendations.models.recommendationresponsedto import Recommendationresponsedto

recommendationresponsedto = Recommendationresponsedto(
response=[
                    sailpoint.iai_recommendations.models.recommendation_response.Recommendation Response(
                        request = sailpoint.iai_recommendations.models.recommendation_request.Recommendation Request(
                            identity_id = '2c938083633d259901633d25c68c00fa', 
                            item = sailpoint.iai_recommendations.models.access_item_ref.Access Item Ref(
                                id = '2c938083633d259901633d2623ec0375', 
                                type = 'ENTITLEMENT', ), ), 
                        recommendation = 'YES', 
                        interpretations = ["75% of identities with the same department have this access. This information had a high impact on the overall score.","67% of identities with the same peer group have this access. This information had a low impact on the overall score.","42% of identities with the same location have this access. This information had a low impact on the overall score."], 
                        translation_messages = [{"key":"recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH","values":["75","department"]}], 
                        recommender_calculations = sailpoint.iai_recommendations.models.recommendercalculations.recommendercalculations(
                            identity_id = '2c91808457d8f3ab0157e3e62cb4213c', 
                            entitlement_id = '2c91809050db617d0150e0bf3215385e', 
                            recommendation = 'YES', 
                            overall_weighted_score = 1.337, 
                            feature_weighted_scores = {
                                'key' : 1.337
                                }, 
                            threshold = 1.337, 
                            identity_attributes = {
                                'key' : sailpoint.iai_recommendations.models.recommendercalculations_identity_attributes_value.recommendercalculations_identityAttributes_value(
                                    value = '', )
                                }, 
                            feature_values = sailpoint.iai_recommendations.models.feature_value_dto.Feature Value Dto(
                                feature = 'department', 
                                numerator = 14, 
                                denominator = 14, ), ), )
                    ]
)

```
[[Back to top]](#) 

