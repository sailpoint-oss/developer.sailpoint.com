---
id: bulkremovetaggedobject
title: Bulkremovetaggedobject
pagination_label: Bulkremovetaggedobject
sidebar_label: Bulkremovetaggedobject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Bulkremovetaggedobject', 'Bulkremovetaggedobject'] 
slug: /tools/sdk/powershell/taggedobjects/models/bulkremovetaggedobject
tags: ['SDK', 'Software Development Kit', 'Bulkremovetaggedobject', 'Bulkremovetaggedobject']
---


# Bulkremovetaggedobject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRefs** | [**[]Taggedobjectdto**](taggedobjectdto) |  | [optional] 
**Tags** | **[]String** | Label to be applied to an Object | [optional] 

## Examples

- Prepare the resource
```powershell
$Bulkremovetaggedobject = Initialize-Bulkremovetaggedobject  -ObjectRefs null `
 -Tags ["BU_FINANCE","PCI"]
```

- Convert the resource to JSON
```powershell
$Bulkremovetaggedobject | ConvertTo-JSON
```


[[Back to top]](#) 

