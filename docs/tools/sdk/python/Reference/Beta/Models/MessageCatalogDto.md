---
id: beta-message-catalog-dto
title: MessageCatalogDto
pagination_label: MessageCatalogDto
sidebar_label: MessageCatalogDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MessageCatalogDto', 'BetaMessageCatalogDto'] 
slug: /tools/sdk/python/beta/models/message-catalog-dto
tags: ['SDK', 'Software Development Kit', 'MessageCatalogDto', 'BetaMessageCatalogDto']
---

# MessageCatalogDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **str** | The language in which the messages are returned | [optional] 
**messages** | [**[]ResourceBundleMessage**](resource-bundle-message) | The list of message with their keys and formats | [optional] 
}

## Example

```python
from sailpoint.beta.models.message_catalog_dto import MessageCatalogDto

message_catalog_dto = MessageCatalogDto(
locale='en_US',
messages=[
                    sailpoint.beta.models.resource_bundle_message.ResourceBundleMessage(
                        key = 'recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_LOW', 
                        format = '{0,,\"i18n hint: percentage\"}% of identities with the same {1,,\"i18n hint: name of category feature\"} have this access. This information had a low impact on the overall score.', )
                    ]
)

```
[[Back to top]](#) 

