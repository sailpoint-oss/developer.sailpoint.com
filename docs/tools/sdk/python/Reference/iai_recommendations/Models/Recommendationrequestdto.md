---
id: recommendationrequestdto
title: Recommendationrequestdto
pagination_label: Recommendationrequestdto
sidebar_label: Recommendationrequestdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Recommendationrequestdto', 'Recommendationrequestdto'] 
slug: /tools/sdk/python/iai-recommendations/models/recommendationrequestdto
tags: ['SDK', 'Software Development Kit', 'Recommendationrequestdto', 'Recommendationrequestdto']
---

# Recommendationrequestdto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**[]Recommendationrequest**](recommendationrequest) |  | [optional] 
**exclude_interpretations** | **bool** | Exclude interpretations in the response if \"true\". Return interpretations in the response if this attribute is not specified. | [optional] [default to False]
**include_translation_messages** | **bool** | When set to true, the calling system uses the translated messages for the specified language | [optional] [default to False]
**include_debug_information** | **bool** | Returns the recommender calculations if set to true | [optional] [default to False]
**prescribe_mode** | **bool** | When set to true, uses prescribedRulesRecommenderConfig to get identity attributes and peer group threshold instead of standard config. | [optional] [default to False]
}

## Example

```python
from sailpoint.iai_recommendations.models.recommendationrequestdto import Recommendationrequestdto

recommendationrequestdto = Recommendationrequestdto(
requests=[
                    sailpoint.iai_recommendations.models.recommendation_request.Recommendation Request(
                        identity_id = '2c938083633d259901633d25c68c00fa', 
                        item = sailpoint.iai_recommendations.models.access_item_ref.Access Item Ref(
                            id = '2c938083633d259901633d2623ec0375', 
                            type = 'ENTITLEMENT', ), )
                    ],
exclude_interpretations=False,
include_translation_messages=False,
include_debug_information=True,
prescribe_mode=False
)

```
[[Back to top]](#) 

