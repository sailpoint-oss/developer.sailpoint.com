---
id: attributechange
title: Attributechange
pagination_label: Attributechange
sidebar_label: Attributechange
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Attributechange', 'Attributechange'] 
slug: /tools/sdk/powershell/identityhistory/models/attributechange
tags: ['SDK', 'Software Development Kit', 'Attributechange', 'Attributechange']
---


# Attributechange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | the attribute name | [optional] 
**PreviousValue** | **String** | the old value of attribute | [optional] 
**NewValue** | **String** | the new value of attribute | [optional] 

## Examples

- Prepare the resource
```powershell
$Attributechange = Initialize-Attributechange  -Name firstname `
 -PreviousValue adam `
 -NewValue zampa
```

- Convert the resource to JSON
```powershell
$Attributechange | ConvertTo-JSON
```


[[Back to top]](#) 

