---
id: v2025-vendor-connector-mapping-updated-by
title: VendorConnectorMappingUpdatedBy
pagination_label: VendorConnectorMappingUpdatedBy
sidebar_label: VendorConnectorMappingUpdatedBy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'VendorConnectorMappingUpdatedBy', 'V2025VendorConnectorMappingUpdatedBy'] 
slug: /tools/sdk/powershell/v2025/models/vendor-connector-mapping-updated-by
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMappingUpdatedBy', 'V2025VendorConnectorMappingUpdatedBy']
---


# VendorConnectorMappingUpdatedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**String** | **String** | The identifier of the user who last updated the mapping, if available. | [optional] 
**Valid** | **Boolean** | A flag indicating if the 'String' field is set and valid. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$VendorConnectorMappingUpdatedBy = Initialize-PSSailpoint.V2025VendorConnectorMappingUpdatedBy  -String user-67891 `
 -Valid true
```

- Convert the resource to JSON
```powershell
$VendorConnectorMappingUpdatedBy | ConvertTo-JSON
```


[[Back to top]](#) 

