---
id: vendor-connector-mapping
title: VendorConnectorMapping
pagination_label: VendorConnectorMapping
sidebar_label: VendorConnectorMapping
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'VendorConnectorMapping'] 
slug: /tools/sdk/powershell/v3/models/vendor-connector-mapping
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMapping']
---


# VendorConnectorMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The unique identifier for the vendor-connector mapping. | [optional] 
**Vendor** |  Pointer to **String** | The name of the vendor. | [optional] 
**Connector** |  Pointer to **String** | The name of the connector. | [optional] 
**CreatedAt** |  Pointer to **System.DateTime** | The creation timestamp of the mapping. | [optional] 
**CreatedBy** |  Pointer to **String** | The identifier of the user who created the mapping. | [optional] 
**UpdatedAt** |  Pointer to [**VendorConnectorMappingUpdatedAt**](vendor-connector-mapping-updated-at) |  | [optional] 
**UpdatedBy** |  Pointer to [**VendorConnectorMappingUpdatedBy**](vendor-connector-mapping-updated-by) |  | [optional] 
**DeletedAt** |  Pointer to [**VendorConnectorMappingDeletedAt**](vendor-connector-mapping-deleted-at) |  | [optional] 
**DeletedBy** |  Pointer to [**VendorConnectorMappingDeletedBy**](vendor-connector-mapping-deleted-by) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$VendorConnectorMapping = Initialize-PSSailpoint.V3VendorConnectorMapping  -Id 78733556-9ea3-4f59-bf69-e5cd92b011b4 `
 -Vendor Example vendor `
 -Connector Example connector `
 -CreatedAt 2024-03-13T12:56:19.391294Z `
 -CreatedBy admin `
 -UpdatedAt null `
 -UpdatedBy null `
 -DeletedAt null `
 -DeletedBy null
```

- Convert the resource to JSON
```powershell
$VendorConnectorMapping | ConvertTo-JSON
```


[[Back to top]](#) 

