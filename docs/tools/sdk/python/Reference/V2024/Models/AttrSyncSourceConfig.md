---
id: v2024-attr-sync-source-config
title: AttrSyncSourceConfig
pagination_label: AttrSyncSourceConfig
sidebar_label: AttrSyncSourceConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttrSyncSourceConfig', 'V2024AttrSyncSourceConfig'] 
slug: /tools/sdk/python/v2024/models/attr-sync-source-config
tags: ['SDK', 'Software Development Kit', 'AttrSyncSourceConfig', 'V2024AttrSyncSourceConfig']
---

# AttrSyncSourceConfig

Specification of attribute sync configuration for a source

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**AttrSyncSource**](attr-sync-source) |  | [required]
**attributes** | [**[]AttrSyncSourceAttributeConfig**](attr-sync-source-attribute-config) | Attribute synchronization configuration for specific identity attributes in the context of a source | [required]
}

## Example

```python
from sailpoint.v2024.models.attr_sync_source_config import AttrSyncSourceConfig

attr_sync_source_config = AttrSyncSourceConfig(
source=sailpoint.v2024.models.attr_sync_source.Attr Sync Source(
                    type = 'SOURCE', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'HR Active Directory', ),
attributes=[{name=email, displayName=Email, enabled=true, target=mail}, {name=firstname, displayName=First Name, enabled=false, target=givenName}]
)

```
[[Back to top]](#) 

