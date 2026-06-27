---
id: attributevaluedto
title: Attributevaluedto
pagination_label: Attributevaluedto
sidebar_label: Attributevaluedto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Attributevaluedto', 'Attributevaluedto'] 
slug: /tools/sdk/powershell/accessprofiles/models/attributevaluedto
tags: ['SDK', 'Software Development Kit', 'Attributevaluedto', 'Attributevaluedto']
---


# Attributevaluedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **String** | Technical name of the Attribute value. This is unique and cannot be changed after creation. | [optional] 
**Name** | **String** | The display name of the Attribute value. | [optional] 
**Status** | **String** | The status of the Attribute value. | [optional] 

## Examples

- Prepare the resource
```powershell
$Attributevaluedto = Initialize-Attributevaluedto  -Value public `
 -Name Public `
 -Status active
```

- Convert the resource to JSON
```powershell
$Attributevaluedto | ConvertTo-JSON
```


[[Back to top]](#) 

