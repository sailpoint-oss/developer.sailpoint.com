---
id: v2025-vendor-connector-mapping-deleted-at
title: VendorConnectorMappingDeletedAt
pagination_label: VendorConnectorMappingDeletedAt
sidebar_label: VendorConnectorMappingDeletedAt
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'VendorConnectorMappingDeletedAt', 'V2025VendorConnectorMappingDeletedAt'] 
slug: /tools/sdk/powershell/v2025/models/vendor-connector-mapping-deleted-at
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMappingDeletedAt', 'V2025VendorConnectorMappingDeletedAt']
---


# VendorConnectorMappingDeletedAt

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Time** | **System.DateTime** | The timestamp when the mapping was deleted, represented in ISO 8601 format, if applicable. | [optional] 
**Valid** | **Boolean** | A flag indicating if the 'Time' field is set and valid, i.e., if the mapping has been deleted. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$VendorConnectorMappingDeletedAt = Initialize-V2025VendorConnectorMappingDeletedAt  -Time 0001-01-01T00:00Z `
 -Valid false
```

- Convert the resource to JSON
```powershell
$VendorConnectorMappingDeletedAt | ConvertTo-JSON
```


[[Back to top]](#) 

