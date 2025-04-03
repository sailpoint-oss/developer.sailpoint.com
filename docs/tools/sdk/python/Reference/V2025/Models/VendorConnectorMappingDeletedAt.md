---
id: v2025-vendor-connector-mapping-deleted-at
title: VendorConnectorMappingDeletedAt
pagination_label: VendorConnectorMappingDeletedAt
sidebar_label: VendorConnectorMappingDeletedAt
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'VendorConnectorMappingDeletedAt', 'V2025VendorConnectorMappingDeletedAt'] 
slug: /tools/sdk/python/v2025/models/vendor-connector-mapping-deleted-at
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMappingDeletedAt', 'V2025VendorConnectorMappingDeletedAt']
---

# VendorConnectorMappingDeletedAt

An object representing the nullable timestamp of when the mapping was deleted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **datetime** | The timestamp when the mapping was deleted, represented in ISO 8601 format, if applicable. | [optional] 
**valid** | **bool** | A flag indicating if the 'Time' field is set and valid, i.e., if the mapping has been deleted. | [optional] [default to False]
}

## Example

```python
from sailpoint.v2025.models.vendor_connector_mapping_deleted_at import VendorConnectorMappingDeletedAt

vendor_connector_mapping_deleted_at = VendorConnectorMappingDeletedAt(
time='0001-01-01T00:00Z',
valid=False
)

```
[[Back to top]](#) 

