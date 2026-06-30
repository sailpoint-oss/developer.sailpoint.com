---
id: accessitemref
title: Accessitemref
pagination_label: Accessitemref
sidebar_label: Accessitemref
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessitemref', 'Accessitemref'] 
slug: /tools/sdk/python/iai-recommendations/models/accessitemref
tags: ['SDK', 'Software Development Kit', 'Accessitemref', 'Accessitemref']
---

# Accessitemref


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the access item to retrieve the recommendation for. | [optional] 
**type** |  **Enum** [  'ENTITLEMENT',    'ACCESS_PROFILE',    'ROLE' ] | Access item's type. | [optional] 
}

## Example

```python
from sailpoint.iai_recommendations.models.accessitemref import Accessitemref

accessitemref = Accessitemref(
id='2c938083633d259901633d2623ec0375',
type='ENTITLEMENT'
)

```
[[Back to top]](#) 

