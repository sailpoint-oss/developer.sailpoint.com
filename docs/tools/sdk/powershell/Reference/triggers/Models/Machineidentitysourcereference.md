---
id: machineidentitysourcereference
title: Machineidentitysourcereference
pagination_label: Machineidentitysourcereference
sidebar_label: Machineidentitysourcereference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Machineidentitysourcereference', 'Machineidentitysourcereference'] 
slug: /tools/sdk/powershell/triggers/models/machineidentitysourcereference
tags: ['SDK', 'Software Development Kit', 'Machineidentitysourcereference', 'Machineidentitysourcereference']
---


# Machineidentitysourcereference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | Source Type. | [required]
**Id** | **String** | Unique identifier. | [required]
**Name** | **String** | Display name. | [required]

## Examples

- Prepare the resource
```powershell
$Machineidentitysourcereference = Initialize-Machineidentitysourcereference  -Type SOURCE `
 -Id c0201251a6ce4d268aba536cdd60a7f2 `
 -Name IdentityNow
```

- Convert the resource to JSON
```powershell
$Machineidentitysourcereference | ConvertTo-JSON
```


[[Back to top]](#) 

