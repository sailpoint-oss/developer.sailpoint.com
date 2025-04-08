---
id: v2025-vendor-connector-mapping-updated-at
title: VendorConnectorMappingUpdatedAt
pagination_label: VendorConnectorMappingUpdatedAt
sidebar_label: VendorConnectorMappingUpdatedAt
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'VendorConnectorMappingUpdatedAt', 'V2025VendorConnectorMappingUpdatedAt'] 
slug: /tools/sdk/powershell/v2025/models/vendor-connector-mapping-updated-at
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMappingUpdatedAt', 'V2025VendorConnectorMappingUpdatedAt']
---


# VendorConnectorMappingUpdatedAt

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Time** | **System.DateTime** | The timestamp when the mapping was last updated, represented in ISO 8601 format. | [optional] 
**Valid** | **Boolean** | A flag indicating if the 'Time' field is set and valid. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$VendorConnectorMappingUpdatedAt = Initialize-PSSailpoint.V2025VendorConnectorMappingUpdatedAt  -Time 2024-03-14T12:56:19.391294Z `
 -Valid true
```

- Convert the resource to JSON
```powershell
$VendorConnectorMappingUpdatedAt | ConvertTo-JSON
```


[[Back to top]](#) 

