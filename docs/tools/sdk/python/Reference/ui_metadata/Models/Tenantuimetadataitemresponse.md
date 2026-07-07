---
id: tenantuimetadataitemresponse
title: Tenantuimetadataitemresponse
pagination_label: Tenantuimetadataitemresponse
sidebar_label: Tenantuimetadataitemresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Tenantuimetadataitemresponse', 'Tenantuimetadataitemresponse'] 
slug: /tools/sdk/python/ui-metadata/models/tenantuimetadataitemresponse
tags: ['SDK', 'Software Development Kit', 'Tenantuimetadataitemresponse', 'Tenantuimetadataitemresponse']
---

# Tenantuimetadataitemresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iframe_white_list** | **str** | Parameter that organizational administrators can adjust to permit another domain to encapsulate IDN within an iframe. If you would like to reset the value use \"null\". It will only allow include into iframe non authenticated portions of the product, such as password reset. | [optional] 
**username_label** | **str** | Descriptor for the username input field. If you would like to reset the value use \"null\". | [optional] 
**username_empty_text** | **str** | Placeholder text displayed in the username input field. If you would like to reset the value use \"null\". | [optional] 
}

## Example

```python
from sailpoint.ui_metadata.models.tenantuimetadataitemresponse import Tenantuimetadataitemresponse

tenantuimetadataitemresponse = Tenantuimetadataitemresponse(
iframe_white_list='http://example.com http://example2.com',
username_label='Email',
username_empty_text='Please provide your work email address...'
)

```
[[Back to top]](#) 

