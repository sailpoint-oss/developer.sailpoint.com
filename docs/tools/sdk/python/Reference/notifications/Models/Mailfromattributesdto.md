---
id: mailfromattributesdto
title: Mailfromattributesdto
pagination_label: Mailfromattributesdto
sidebar_label: Mailfromattributesdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Mailfromattributesdto', 'Mailfromattributesdto'] 
slug: /tools/sdk/python/notifications/models/mailfromattributesdto
tags: ['SDK', 'Software Development Kit', 'Mailfromattributesdto', 'Mailfromattributesdto']
---

# Mailfromattributesdto

MAIL FROM attributes for a domain / identity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | **str** | The identity or domain address | [optional] 
**mail_from_domain** | **str** | The new MAIL FROM domain of the identity. Must be a subdomain of the identity. | [optional] 
}

## Example

```python
from sailpoint.notifications.models.mailfromattributesdto import Mailfromattributesdto

mailfromattributesdto = Mailfromattributesdto(
identity='BobSmith@sailpoint.com',
mail_from_domain='example.sailpoint.com'
)

```
[[Back to top]](#) 

