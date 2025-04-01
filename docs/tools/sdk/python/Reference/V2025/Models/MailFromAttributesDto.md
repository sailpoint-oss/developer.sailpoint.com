---
id: v2025-mail-from-attributes-dto
title: MailFromAttributesDto
pagination_label: MailFromAttributesDto
sidebar_label: MailFromAttributesDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MailFromAttributesDto', 'V2025MailFromAttributesDto'] 
slug: /tools/sdk/python/v2025/models/mail-from-attributes-dto
tags: ['SDK', 'Software Development Kit', 'MailFromAttributesDto', 'V2025MailFromAttributesDto']
---

# MailFromAttributesDto

MAIL FROM attributes for a domain / identity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | **str** | The identity or domain address | [optional] 
**mail_from_domain** | **str** | The new MAIL FROM domain of the identity. Must be a subdomain of the identity. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.mail_from_attributes_dto import MailFromAttributesDto

mail_from_attributes_dto = MailFromAttributesDto(
identity='BobSmith@sailpoint.com',
mail_from_domain='example.sailpoint.com'
)

```
[[Back to top]](#) 

