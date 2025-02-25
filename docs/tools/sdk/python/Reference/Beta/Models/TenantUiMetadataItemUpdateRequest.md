---
id: beta-tenant-ui-metadata-item-update-request
title: TenantUiMetadataItemUpdateRequest
pagination_label: TenantUiMetadataItemUpdateRequest
sidebar_label: TenantUiMetadataItemUpdateRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TenantUiMetadataItemUpdateRequest', 'BetaTenantUiMetadataItemUpdateRequest'] 
slug: /tools/sdk/python/beta/models/tenant-ui-metadata-item-update-request
tags: ['SDK', 'Software Development Kit', 'TenantUiMetadataItemUpdateRequest', 'BetaTenantUiMetadataItemUpdateRequest']
---

# TenantUiMetadataItemUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iframe_white_list** | **str** | Parameter that organizational administrators can adjust to permit another domain to encapsulate IDN within an iframe. If you would like to reset the value use \"null\". It will only allow include into iframe non authenticated portions of the product, such as password reset. | [optional] 
**username_label** | **str** | Descriptor for the username input field. If you would like to reset the value use \"null\". | [optional] 
**username_empty_text** | **str** | Placeholder text displayed in the username input field. If you would like to reset the value use \"null\". | [optional] 
}

## Example

```python
from sailpoint.beta.models.tenant_ui_metadata_item_update_request import TenantUiMetadataItemUpdateRequest

tenant_ui_metadata_item_update_request = TenantUiMetadataItemUpdateRequest(
iframe_white_list='http://example.com http://example2.com',
username_label='Email',
username_empty_text='Please provide your work email address...'
)

```
[[Back to top]](#) 

