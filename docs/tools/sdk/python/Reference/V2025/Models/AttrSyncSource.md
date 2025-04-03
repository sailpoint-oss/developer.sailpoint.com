---
id: v2025-attr-sync-source
title: AttrSyncSource
pagination_label: AttrSyncSource
sidebar_label: AttrSyncSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttrSyncSource', 'V2025AttrSyncSource'] 
slug: /tools/sdk/python/v2025/models/attr-sync-source
tags: ['SDK', 'Software Development Kit', 'AttrSyncSource', 'V2025AttrSyncSource']
---

# AttrSyncSource

Target source for attribute synchronization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'SOURCE' ] | DTO type of target source for attribute synchronization. | [optional] 
**id** | **str** | ID of target source for attribute synchronization. | [optional] 
**name** | **str** | Human-readable name of target source for attribute synchronization. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.attr_sync_source import AttrSyncSource

attr_sync_source = AttrSyncSource(
type='SOURCE',
id='2c9180835d191a86015d28455b4b232a',
name='HR Active Directory'
)

```
[[Back to top]](#) 

