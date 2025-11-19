---
id: beta-outlier-feature-translation
title: OutlierFeatureTranslation
pagination_label: OutlierFeatureTranslation
sidebar_label: OutlierFeatureTranslation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'OutlierFeatureTranslation', 'BetaOutlierFeatureTranslation'] 
slug: /tools/sdk/python/beta/models/outlier-feature-translation
tags: ['SDK', 'Software Development Kit', 'OutlierFeatureTranslation', 'BetaOutlierFeatureTranslation']
---

# OutlierFeatureTranslation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | [**TranslationMessage**](translation-message) |  | [optional] 
**description** | [**TranslationMessage**](translation-message) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.outlier_feature_translation import OutlierFeatureTranslation

outlier_feature_translation = OutlierFeatureTranslation(
display_name=sailpoint.beta.models.translation_message.Translation Message(
                    key = 'recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH', 
                    values = [75, department], ),
description=sailpoint.beta.models.translation_message.Translation Message(
                    key = 'recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH', 
                    values = [75, department], )
)

```
[[Back to top]](#) 

