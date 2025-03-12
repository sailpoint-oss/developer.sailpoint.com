---
id: beta-vendor-connector-mapping-deleted-by
title: VendorConnectorMappingDeletedBy
pagination_label: VendorConnectorMappingDeletedBy
sidebar_label: VendorConnectorMappingDeletedBy
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'VendorConnectorMappingDeletedBy', 'BetaVendorConnectorMappingDeletedBy'] 
slug: /tools/sdk/python/beta/models/vendor-connector-mapping-deleted-by
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMappingDeletedBy', 'BetaVendorConnectorMappingDeletedBy']
---

# VendorConnectorMappingDeletedBy

An object representing the nullable identifier of the user who deleted the mapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**string** | **str** | The identifier of the user who deleted the mapping, if applicable. | [optional] 
**valid** | **bool** | A flag indicating if the 'String' field is set and valid, i.e., if the mapping has been deleted. | [optional] [default to False]
}

## Example

```python
from sailpoint.beta.models.vendor_connector_mapping_deleted_by import VendorConnectorMappingDeletedBy

vendor_connector_mapping_deleted_by = VendorConnectorMappingDeletedBy(
string='',
valid=False
)

```
[[Back to top]](#) 

