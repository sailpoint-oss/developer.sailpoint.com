---
id: vendor-connector-mapping
title: VendorConnectorMapping
pagination_label: VendorConnectorMapping
sidebar_label: VendorConnectorMapping
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'VendorConnectorMapping', 'VendorConnectorMapping'] 
slug: /tools/sdk/python/v3/models/vendor-connector-mapping
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMapping', 'VendorConnectorMapping']
---

# VendorConnectorMapping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier for the vendor-connector mapping. | [optional] 
**vendor** | **str** | The name of the vendor. | [optional] 
**connector** | **str** | The name of the connector. | [optional] 
**created_at** | **datetime** | The creation timestamp of the mapping. | [optional] 
**created_by** | **str** | The identifier of the user who created the mapping. | [optional] 
**updated_at** | [**VendorConnectorMappingUpdatedAt**](vendor-connector-mapping-updated-at) |  | [optional] 
**updated_by** | [**VendorConnectorMappingUpdatedBy**](vendor-connector-mapping-updated-by) |  | [optional] 
**deleted_at** | [**VendorConnectorMappingDeletedAt**](vendor-connector-mapping-deleted-at) |  | [optional] 
**deleted_by** | [**VendorConnectorMappingDeletedBy**](vendor-connector-mapping-deleted-by) |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.vendor_connector_mapping import VendorConnectorMapping

vendor_connector_mapping = VendorConnectorMapping(
id='78733556-9ea3-4f59-bf69-e5cd92b011b4',
vendor='Example vendor',
connector='Example connector',
created_at='2024-03-13T12:56:19.391294Z',
created_by='admin',
updated_at=sailpoint.v3.models.vendor_connector_mapping_updated_at.VendorConnectorMapping_updatedAt(
                    time = '2024-03-14T12:56:19.391294Z', 
                    valid = True, ),
updated_by=sailpoint.v3.models.vendor_connector_mapping_updated_by.VendorConnectorMapping_updatedBy(
                    string = 'user-67891', 
                    valid = True, ),
deleted_at=sailpoint.v3.models.vendor_connector_mapping_deleted_at.VendorConnectorMapping_deletedAt(
                    time = '0001-01-01T00:00Z', 
                    valid = False, ),
deleted_by=sailpoint.v3.models.vendor_connector_mapping_deleted_by.VendorConnectorMapping_deletedBy(
                    string = '', 
                    valid = False, )
)

```
[[Back to top]](#) 

