---
id: vendor-connector-mapping-deleted-by
title: VendorConnectorMappingDeletedBy
pagination_label: VendorConnectorMappingDeletedBy
sidebar_label: VendorConnectorMappingDeletedBy
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'VendorConnectorMappingDeletedBy'] 
slug: /tools/sdk/powershell/beta/models/vendor-connector-mapping-deleted-by
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMappingDeletedBy']
---


# VendorConnectorMappingDeletedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**String** |  Pointer to **String** | The identifier of the user who deleted the mapping, if applicable. | [optional] 
**Valid** |  Pointer to **Boolean** | A flag indicating if the &#39;String&#39; field is set and valid, i.e., if the mapping has been deleted. | [optional] [default to $false]

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

