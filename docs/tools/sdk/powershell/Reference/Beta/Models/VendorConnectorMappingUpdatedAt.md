---
id: beta-vendor-connector-mapping-updated-at
title: VendorConnectorMappingUpdatedAt
pagination_label: VendorConnectorMappingUpdatedAt
sidebar_label: VendorConnectorMappingUpdatedAt
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'VendorConnectorMappingUpdatedAt', 'BetaVendorConnectorMappingUpdatedAt'] 
slug: /tools/sdk/powershell/beta/models/vendor-connector-mapping-updated-at
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMappingUpdatedAt', 'BetaVendorConnectorMappingUpdatedAt']
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
$VendorConnectorMappingUpdatedAt = Initialize-BetaVendorConnectorMappingUpdatedAt  -Time 2024-03-14T12:56:19.391294Z `
 -Valid true
```

- Convert the resource to JSON
```powershell
$VendorConnectorMappingUpdatedAt | ConvertTo-JSON
```


[[Back to top]](#) 

