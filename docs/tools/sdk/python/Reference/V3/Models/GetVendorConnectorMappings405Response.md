---
id: get-vendor-connector-mappings405-response
title: GetVendorConnectorMappings405Response
pagination_label: GetVendorConnectorMappings405Response
sidebar_label: GetVendorConnectorMappings405Response
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'GetVendorConnectorMappings405Response', 'GetVendorConnectorMappings405Response'] 
slug: /tools/sdk/python/v3/models/get-vendor-connector-mappings405-response
tags: ['SDK', 'Software Development Kit', 'GetVendorConnectorMappings405Response', 'GetVendorConnectorMappings405Response']
---

# GetVendorConnectorMappings405Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_name** | **object** | A message describing the error | [optional] 
**error_message** | **object** | Description of the error | [optional] 
**tracking_id** | **str** | Unique tracking id for the error. | [optional] 
}

## Example

```python
from sailpoint.v3.models.get_vendor_connector_mappings405_response import GetVendorConnectorMappings405Response

get_vendor_connector_mappings405_response = GetVendorConnectorMappings405Response(
error_name=NotSupportedException,
error_message=Cannot consume content type,
tracking_id='e7eab60924f64aa284175b9fa3309599'
)

```
[[Back to top]](#) 

