---
id: dimensionmembershipselector
title: Dimensionmembershipselector
pagination_label: Dimensionmembershipselector
sidebar_label: Dimensionmembershipselector
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Dimensionmembershipselector', 'Dimensionmembershipselector'] 
slug: /tools/sdk/powershell/dimensions/models/dimensionmembershipselector
tags: ['SDK', 'Software Development Kit', 'Dimensionmembershipselector', 'Dimensionmembershipselector']
---


# Dimensionmembershipselector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Dimensionmembershipselectortype**](dimensionmembershipselectortype) |  | [optional] 
**Criteria** | [**Dimensioncriterialevel1**](dimensioncriterialevel1) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Dimensionmembershipselector = Initialize-Dimensionmembershipselector  -Type null `
 -Criteria null
```

- Convert the resource to JSON
```powershell
$Dimensionmembershipselector | ConvertTo-JSON
```


[[Back to top]](#) 

