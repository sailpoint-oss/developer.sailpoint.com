---
id: v2025-vendor-connector-mapping-deleted-by
title: VendorConnectorMappingDeletedBy
pagination_label: VendorConnectorMappingDeletedBy
sidebar_label: VendorConnectorMappingDeletedBy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'VendorConnectorMappingDeletedBy', 'V2025VendorConnectorMappingDeletedBy'] 
slug: /tools/sdk/powershell/v2025/models/vendor-connector-mapping-deleted-by
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMappingDeletedBy', 'V2025VendorConnectorMappingDeletedBy']
---


# VendorConnectorMappingDeletedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**String** | **String** | The identifier of the user who deleted the mapping, if applicable. | [optional] 
**Valid** | **Boolean** | A flag indicating if the 'String' field is set and valid, i.e., if the mapping has been deleted. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$VendorConnectorMappingDeletedBy = Initialize-PSSailpoint.V2025VendorConnectorMappingDeletedBy  -String  `
 -Valid false
```

- Convert the resource to JSON
```powershell
$VendorConnectorMappingDeletedBy | ConvertTo-JSON
```


[[Back to top]](#) 

