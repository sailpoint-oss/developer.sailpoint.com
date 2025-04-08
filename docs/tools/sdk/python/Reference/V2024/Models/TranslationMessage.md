---
id: v2024-translation-message
title: TranslationMessage
pagination_label: TranslationMessage
sidebar_label: TranslationMessage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TranslationMessage', 'V2024TranslationMessage'] 
slug: /tools/sdk/python/v2024/models/translation-message
tags: ['SDK', 'Software Development Kit', 'TranslationMessage', 'V2024TranslationMessage']
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
from sailpoint.v2024.models.translation_message import TranslationMessage

translation_message = TranslationMessage(
key='recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH',
values=[75, department]
)

```
[[Back to top]](#) 

