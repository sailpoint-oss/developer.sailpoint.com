---
id: recommendationrequest
title: Recommendationrequest
pagination_label: Recommendationrequest
sidebar_label: Recommendationrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Recommendationrequest', 'Recommendationrequest'] 
slug: /tools/sdk/python/iai-recommendations/models/recommendationrequest
tags: ['SDK', 'Software Development Kit', 'Recommendationrequest', 'Recommendationrequest']
---

# Recommendationrequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | The identity ID | [optional] 
**item** | [**Accessitemref**](accessitemref) |  | [optional] 
}

## Example

```python
from sailpoint.iai_recommendations.models.recommendationrequest import Recommendationrequest

recommendationrequest = Recommendationrequest(
identity_id='2c938083633d259901633d25c68c00fa',
item=sailpoint.iai_recommendations.models.access_item_ref.Access Item Ref(
                    id = '2c938083633d259901633d2623ec0375', 
                    type = 'ENTITLEMENT', )
)

```
[[Back to top]](#) 

