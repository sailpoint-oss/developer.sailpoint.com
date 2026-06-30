---
id: attributerequest
title: Attributerequest
pagination_label: Attributerequest
sidebar_label: Attributerequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Attributerequest', 'Attributerequest'] 
slug: /tools/sdk/powershell/search/models/attributerequest
tags: ['SDK', 'Software Development Kit', 'Attributerequest', 'Attributerequest']
---


# Attributerequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Attribute name. | [optional] 
**Op** | **String** | Operation to perform on attribute. | [optional] 
**Value** | [**AttributerequestValue**](attributerequest-value) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Attributerequest = Initialize-Attributerequest  -Name groups `
 -Op Add `
 -Value null
```

- Convert the resource to JSON
```powershell
$Attributerequest | ConvertTo-JSON
```


[[Back to top]](#) 

