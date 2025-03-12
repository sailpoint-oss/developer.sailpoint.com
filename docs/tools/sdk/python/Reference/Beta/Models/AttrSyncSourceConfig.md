---
id: beta-attr-sync-source-config
title: AttrSyncSourceConfig
pagination_label: AttrSyncSourceConfig
sidebar_label: AttrSyncSourceConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttrSyncSourceConfig', 'BetaAttrSyncSourceConfig'] 
slug: /tools/sdk/python/beta/models/attr-sync-source-config
tags: ['SDK', 'Software Development Kit', 'AttrSyncSourceConfig', 'BetaAttrSyncSourceConfig']
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
from sailpoint.beta.models.attr_sync_source_config import AttrSyncSourceConfig

attr_sync_source_config = AttrSyncSourceConfig(
source=sailpoint.beta.models.attr_sync_source.AttrSyncSource(
                    type = 'SOURCE', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'HR Active Directory', ),
attributes=[{name=email, displayName=Email, enabled=true, target=mail}, {name=firstname, displayName=First Name, enabled=false, target=givenName}]
)

```
[[Back to top]](#) 

