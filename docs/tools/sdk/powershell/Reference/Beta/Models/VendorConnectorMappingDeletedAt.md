---
id: beta-vendor-connector-mapping-deleted-at
title: VendorConnectorMappingDeletedAt
pagination_label: VendorConnectorMappingDeletedAt
sidebar_label: VendorConnectorMappingDeletedAt
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'VendorConnectorMappingDeletedAt', 'BetaVendorConnectorMappingDeletedAt'] 
slug: /tools/sdk/powershell/beta/models/vendor-connector-mapping-deleted-at
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMappingDeletedAt', 'BetaVendorConnectorMappingDeletedAt']
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
$VendorConnectorMappingDeletedAt = Initialize-BetaVendorConnectorMappingDeletedAt  -Time 0001-01-01T00:00Z `
 -Valid false
```

- Convert the resource to JSON
```powershell
$VendorConnectorMappingDeletedAt | ConvertTo-JSON
```


[[Back to top]](#) 

