---
id: bulktaggedobjectresponse
title: Bulktaggedobjectresponse
pagination_label: Bulktaggedobjectresponse
sidebar_label: Bulktaggedobjectresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Bulktaggedobjectresponse', 'Bulktaggedobjectresponse'] 
slug: /tools/sdk/powershell/taggedobjects/models/bulktaggedobjectresponse
tags: ['SDK', 'Software Development Kit', 'Bulktaggedobjectresponse', 'Bulktaggedobjectresponse']
---


# Bulktaggedobjectresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRefs** | [**[]Taggedobjectdto**](taggedobjectdto) |  | [optional] 
**Tags** | **[]String** | Label to be applied to an Object | [optional] 

## Examples

- Prepare the resource
```powershell
$Bulktaggedobjectresponse = Initialize-Bulktaggedobjectresponse  -ObjectRefs null `
 -Tags ["BU_FINANCE","PCI"]
```

- Convert the resource to JSON
```powershell
$Bulktaggedobjectresponse | ConvertTo-JSON
```


[[Back to top]](#) 

