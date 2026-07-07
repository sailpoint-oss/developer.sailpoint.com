---
id: mailfromattributes
title: Mailfromattributes
pagination_label: Mailfromattributes
sidebar_label: Mailfromattributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Mailfromattributes', 'Mailfromattributes'] 
slug: /tools/sdk/python/notifications/models/mailfromattributes
tags: ['SDK', 'Software Development Kit', 'Mailfromattributes', 'Mailfromattributes']
---

# Mailfromattributes

MAIL FROM attributes for a domain / identity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | **str** | The email identity | [optional] 
**mail_from_domain** | **str** | The name of a domain that an email identity uses as a custom MAIL FROM domain | [optional] 
**mx_record** | **str** | MX record that is required in customer's DNS to allow the domain to receive bounce and complaint notifications that email providers send you | [optional] 
**txt_record** | **str** | TXT record that is required in customer's DNS in order to prove that Amazon SES is authorized to send email from your domain | [optional] 
**mail_from_domain_status** |  **Enum** [  'PENDING',    'SUCCESS',    'FAILED' ] | The current status of the MAIL FROM verification | [optional] 
}

## Example

```python
from sailpoint.notifications.models.mailfromattributes import Mailfromattributes

mailfromattributes = Mailfromattributes(
identity='bob.smith@sailpoint.com',
mail_from_domain='foo.sailpoint.com',
mx_record='10 feedback-smtp.us-east-1.amazonses.com',
txt_record='v=spf1 include:amazonses.com ~all',
mail_from_domain_status='PENDING'
)

```
[[Back to top]](#) 

