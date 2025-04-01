---
id: v2025-attr-sync-source-attribute-config
title: AttrSyncSourceAttributeConfig
pagination_label: AttrSyncSourceAttributeConfig
sidebar_label: AttrSyncSourceAttributeConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttrSyncSourceAttributeConfig', 'V2025AttrSyncSourceAttributeConfig'] 
slug: /tools/sdk/python/v2025/models/attr-sync-source-attribute-config
tags: ['SDK', 'Software Development Kit', 'AttrSyncSourceAttributeConfig', 'V2025AttrSyncSourceAttributeConfig']
---

# AttrSyncSourceAttributeConfig

Specification of source attribute sync mapping configuration for an identity attribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the identity attribute | [required]
**display_name** | **str** | Display name of the identity attribute | [required]
**enabled** | **bool** | Determines whether or not the attribute is enabled for synchronization | [required]
**target** | **str** | Name of the source account attribute to which the identity attribute value will be synchronized if enabled | [required]
}

## Example

```python
from sailpoint.v2025.models.attr_sync_source_attribute_config import AttrSyncSourceAttributeConfig

attr_sync_source_attribute_config = AttrSyncSourceAttributeConfig(
name='email',
display_name='Email',
enabled=True,
target='mail'
)

```
[[Back to top]](#) 

