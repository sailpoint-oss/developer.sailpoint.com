---
id: taggedobject
title: Taggedobject
pagination_label: Taggedobject
sidebar_label: Taggedobject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Taggedobject', 'Taggedobject'] 
slug: /tools/sdk/powershell/taggedobjects/models/taggedobject
tags: ['SDK', 'Software Development Kit', 'Taggedobject', 'Taggedobject']
---


# Taggedobject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRef** | [**Taggedobjectdto**](taggedobjectdto) |  | [optional] 
**Tags** | **[]String** | Labels to be applied to an Object | [optional] 

## Examples

- Prepare the resource
```powershell
$Taggedobject = Initialize-Taggedobject  -ObjectRef null `
 -Tags ["BU_FINANCE","PCI"]
```

- Convert the resource to JSON
```powershell
$Taggedobject | ConvertTo-JSON
```


[[Back to top]](#) 

