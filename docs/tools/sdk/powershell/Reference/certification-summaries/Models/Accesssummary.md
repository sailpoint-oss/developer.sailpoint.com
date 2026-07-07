---
id: accesssummary
title: Accesssummary
pagination_label: Accesssummary
sidebar_label: Accesssummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accesssummary', 'Accesssummary'] 
slug: /tools/sdk/powershell/certificationsummaries/models/accesssummary
tags: ['SDK', 'Software Development Kit', 'Accesssummary', 'Accesssummary']
---


# Accesssummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Access** | [**AccesssummaryAccess**](accesssummary-access) |  | [optional] 
**Entitlement** | [**Reviewableentitlement**](reviewableentitlement) |  | [optional] 
**AccessProfile** | [**Reviewableaccessprofile**](reviewableaccessprofile) |  | [optional] 
**Role** | [**Reviewablerole**](reviewablerole) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Accesssummary = Initialize-Accesssummary  -Access null `
 -Entitlement null `
 -AccessProfile null `
 -Role null
```

- Convert the resource to JSON
```powershell
$Accesssummary | ConvertTo-JSON
```


[[Back to top]](#) 

