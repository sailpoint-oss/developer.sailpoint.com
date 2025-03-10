---
id: v2024-identity-attribute-preview
title: IdentityAttributePreview
pagination_label: IdentityAttributePreview
sidebar_label: IdentityAttributePreview
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityAttributePreview', 'V2024IdentityAttributePreview'] 
slug: /tools/sdk/python/v2024/models/identity-attribute-preview
tags: ['SDK', 'Software Development Kit', 'IdentityAttributePreview', 'V2024IdentityAttributePreview']
---

# IdentityAttributePreview


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the attribute that is being previewed. | [optional] 
**value** | **str** | Value that was derived during the preview. | [optional] 
**previous_value** | **str** | The value of the attribute before the preview. | [optional] 
**error_messages** | [**[]ErrorMessageDto**](error-message-dto) | List of error messages | [optional] 
}

## Example

```python
from sailpoint.v2024.models.identity_attribute_preview import IdentityAttributePreview

identity_attribute_preview = IdentityAttributePreview(
name='email',
value='email@mail.com',
previous_value='oldEmail@mail.com',
error_messages={locale=en-US, localeOrigin=DEFAULT, text=Error Message}
)

```
[[Back to top]](#) 

