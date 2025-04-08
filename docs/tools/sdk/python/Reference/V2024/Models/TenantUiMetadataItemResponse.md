---
id: v2024-tenant-ui-metadata-item-response
title: TenantUiMetadataItemResponse
pagination_label: TenantUiMetadataItemResponse
sidebar_label: TenantUiMetadataItemResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TenantUiMetadataItemResponse', 'V2024TenantUiMetadataItemResponse'] 
slug: /tools/sdk/python/v2024/models/tenant-ui-metadata-item-response
tags: ['SDK', 'Software Development Kit', 'TenantUiMetadataItemResponse', 'V2024TenantUiMetadataItemResponse']
---

# TenantUiMetadataItemResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iframe_white_list** | **str** | Parameter that organizational administrators can adjust to permit another domain to encapsulate IDN within an iframe. If you would like to reset the value use \"null\". It will only allow include into iframe non authenticated portions of the product, such as password reset. | [optional] 
**username_label** | **str** | Descriptor for the username input field. If you would like to reset the value use \"null\". | [optional] 
**username_empty_text** | **str** | Placeholder text displayed in the username input field. If you would like to reset the value use \"null\". | [optional] 
}

## Example

```python
from sailpoint.v2024.models.tenant_ui_metadata_item_response import TenantUiMetadataItemResponse

tenant_ui_metadata_item_response = TenantUiMetadataItemResponse(
iframe_white_list='http://example.com http://example2.com',
username_label='Email',
username_empty_text='Please provide your work email address...'
)

```
[[Back to top]](#) 

