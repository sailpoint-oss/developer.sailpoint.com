---
id: beta-resource-bundle-message
title: ResourceBundleMessage
pagination_label: ResourceBundleMessage
sidebar_label: ResourceBundleMessage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ResourceBundleMessage', 'BetaResourceBundleMessage'] 
slug: /tools/sdk/python/beta/models/resource-bundle-message
tags: ['SDK', 'Software Development Kit', 'ResourceBundleMessage', 'BetaResourceBundleMessage']
---

# ResourceBundleMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key of the message | [optional] 
**format** | **str** | The format of the message | [optional] 
}

## Example

```python
from sailpoint.beta.models.resource_bundle_message import ResourceBundleMessage

resource_bundle_message = ResourceBundleMessage(
key='recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_LOW',
format='{0,,\"i18n hint: percentage\"}% of identities with the same {1,,\"i18n hint: name of category feature\"} have this access. This information had a low impact on the overall score.'
)

```
[[Back to top]](#) 

