---
id: v2024-branding-item
title: BrandingItem
pagination_label: BrandingItem
sidebar_label: BrandingItem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BrandingItem', 'V2024BrandingItem'] 
slug: /tools/sdk/python/v2024/models/branding-item
tags: ['SDK', 'Software Development Kit', 'BrandingItem', 'V2024BrandingItem']
---

# BrandingItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | name of branding item | [optional] 
**product_name** | **str** | product name | [optional] 
**action_button_color** | **str** | hex value of color for action button | [optional] 
**active_link_color** | **str** | hex value of color for link | [optional] 
**navigation_color** | **str** | hex value of color for navigation bar | [optional] 
**email_from_address** | **str** | email from address | [optional] 
**standard_logo_url** | **str** | url to standard logo | [optional] 
**login_informational_message** | **str** | login information message | [optional] 
}

## Example

```python
from sailpoint.v2024.models.branding_item import BrandingItem

branding_item = BrandingItem(
name='default',
product_name='product name',
action_button_color='0074D9',
active_link_color='011E69',
navigation_color='011E69',
email_from_address='no-reply@sailpoint.com',
standard_logo_url='',
login_informational_message=''
)

```
[[Back to top]](#) 

