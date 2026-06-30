---
id: savedsearchname
title: Savedsearchname
pagination_label: Savedsearchname
sidebar_label: Savedsearchname
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Savedsearchname', 'Savedsearchname'] 
slug: /tools/sdk/powershell/savedsearch/models/savedsearchname
tags: ['SDK', 'Software Development Kit', 'Savedsearchname', 'Savedsearchname']
---


# Savedsearchname

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the saved search.  | [optional] 
**Description** | **String** | The description of the saved search.  | [optional] 

## Examples

- Prepare the resource
```powershell
$Savedsearchname = Initialize-Savedsearchname  -Name Disabled accounts `
 -Description Disabled accounts
```

- Convert the resource to JSON
```powershell
$Savedsearchname | ConvertTo-JSON
```


[[Back to top]](#) 

