---
id: v2024-vendor-connector-mapping-updated-by
title: VendorConnectorMappingUpdatedBy
pagination_label: VendorConnectorMappingUpdatedBy
sidebar_label: VendorConnectorMappingUpdatedBy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'VendorConnectorMappingUpdatedBy'] 
slug: /tools/sdk/powershell/v2024/models/vendor-connector-mapping-updated-by
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMappingUpdatedBy']
---


# VendorConnectorMappingUpdatedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**String** |  Pointer to **String** | The identifier of the user who last updated the mapping, if available. | [optional] 
**Valid** |  Pointer to **Boolean** | A flag indicating if the 'String' field is set and valid. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$VendorConnectorMappingUpdatedBy = Initialize-PSSailpoint.V2024VendorConnectorMappingUpdatedBy  -String user-67891 `
 -Valid true
```

- Convert the resource to JSON
```powershell
$VendorConnectorMappingUpdatedBy | ConvertTo-JSON
```


[[Back to top]](#) 

