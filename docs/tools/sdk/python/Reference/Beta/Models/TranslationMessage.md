---
id: beta-translation-message
title: TranslationMessage
pagination_label: TranslationMessage
sidebar_label: TranslationMessage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TranslationMessage', 'BetaTranslationMessage'] 
slug: /tools/sdk/python/beta/models/translation-message
tags: ['SDK', 'Software Development Kit', 'TranslationMessage', 'BetaTranslationMessage']
---

# TranslationMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key of the translation message | [optional] 
**values** | **[]str** | The values corresponding to the translation messages | [optional] 
}

## Example

```python
from sailpoint.beta.models.translation_message import TranslationMessage

translation_message = TranslationMessage(
key='recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH',
values=[75, department]
)

```
[[Back to top]](#) 

