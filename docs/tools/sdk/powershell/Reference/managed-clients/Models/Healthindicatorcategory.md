---
id: healthindicatorcategory
title: Healthindicatorcategory
pagination_label: Healthindicatorcategory
sidebar_label: Healthindicatorcategory
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Healthindicatorcategory', 'Healthindicatorcategory'] 
slug: /tools/sdk/powershell/managedclients/models/healthindicatorcategory
tags: ['SDK', 'Software Development Kit', 'Healthindicatorcategory', 'Healthindicatorcategory']
---


# Healthindicatorcategory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Errors** | [**[]Healthevent**](healthevent) | List of error events for this category | [optional] 
**Warnings** | [**[]Healthevent**](healthevent) | List of warning events for this category | [optional] 

## Examples

- Prepare the resource
```powershell
$Healthindicatorcategory = Initialize-Healthindicatorcategory  -Errors null `
 -Warnings null
```

- Convert the resource to JSON
```powershell
$Healthindicatorcategory | ConvertTo-JSON
```


[[Back to top]](#) 

