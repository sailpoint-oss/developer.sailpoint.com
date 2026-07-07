---
id: accessactionconfiguration
title: Accessactionconfiguration
pagination_label: Accessactionconfiguration
sidebar_label: Accessactionconfiguration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessactionconfiguration', 'Accessactionconfiguration'] 
slug: /tools/sdk/powershell/lifecyclestates/models/accessactionconfiguration
tags: ['SDK', 'Software Development Kit', 'Accessactionconfiguration', 'Accessactionconfiguration']
---


# Accessactionconfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RemoveAllAccessEnabled** | **Boolean** | If true, then all accesses are marked for removal. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Accessactionconfiguration = Initialize-Accessactionconfiguration  -RemoveAllAccessEnabled true
```

- Convert the resource to JSON
```powershell
$Accessactionconfiguration | ConvertTo-JSON
```


[[Back to top]](#) 

