---
id: beta-vendor-connector-mapping-deleted-by
title: VendorConnectorMappingDeletedBy
pagination_label: VendorConnectorMappingDeletedBy
sidebar_label: VendorConnectorMappingDeletedBy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'VendorConnectorMappingDeletedBy', 'BetaVendorConnectorMappingDeletedBy'] 
slug: /tools/sdk/powershell/beta/models/vendor-connector-mapping-deleted-by
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMappingDeletedBy', 'BetaVendorConnectorMappingDeletedBy']
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
$VendorConnectorMappingDeletedBy = Initialize-BetaVendorConnectorMappingDeletedBy  -String  `
 -Valid false
```

- Convert the resource to JSON
```powershell
$VendorConnectorMappingDeletedBy | ConvertTo-JSON
```


[[Back to top]](#) 

