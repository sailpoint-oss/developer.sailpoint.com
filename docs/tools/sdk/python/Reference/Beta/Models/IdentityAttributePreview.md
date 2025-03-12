---
id: beta-identity-attribute-preview
title: IdentityAttributePreview
pagination_label: IdentityAttributePreview
sidebar_label: IdentityAttributePreview
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityAttributePreview', 'BetaIdentityAttributePreview'] 
slug: /tools/sdk/python/beta/models/identity-attribute-preview
tags: ['SDK', 'Software Development Kit', 'IdentityAttributePreview', 'BetaIdentityAttributePreview']
---

# IdentityAttributePreview


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the attribute that is being previewed. | [optional] 
**value** | **str** | Value that was derived during the preview. | [optional] 
**previous_value** | **str** | The value of the attribute before the preview. | [optional] 
**error_messages** | [**[]ErrorMessageDto**](error-message-dto) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.identity_attribute_preview import IdentityAttributePreview

identity_attribute_preview = IdentityAttributePreview(
name='email',
value='email@mail.com',
previous_value='oldEmail@mail.com',
error_messages=[
                    sailpoint.beta.models.error_message_dto.ErrorMessageDto(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'The request was syntactically correct but its content is semantically invalid.', )
                    ]
)

```
[[Back to top]](#) 

