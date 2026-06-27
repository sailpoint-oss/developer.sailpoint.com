---
id: accessapps
title: Accessapps
pagination_label: Accessapps
sidebar_label: Accessapps
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessapps', 'Accessapps'] 
slug: /tools/sdk/powershell/search/models/accessapps
tags: ['SDK', 'Software Development Kit', 'Accessapps', 'Accessapps']
---


# Accessapps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | Name of application | [optional] 
**Description** | **String** | Description of application. | [optional] 
**Owner** | [**AccessappsOwner**](accessapps-owner) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessapps = Initialize-Accessapps  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name Travel and Expense `
 -Description Travel and Expense Application `
 -Owner null
```

- Convert the resource to JSON
```powershell
$Accessapps | ConvertTo-JSON
```


[[Back to top]](#) 

