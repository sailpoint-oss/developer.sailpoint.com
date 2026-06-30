---
id: workflowtrigger
title: Workflowtrigger
pagination_label: Workflowtrigger
sidebar_label: Workflowtrigger
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Workflowtrigger', 'Workflowtrigger'] 
slug: /tools/sdk/powershell/workflows/models/workflowtrigger
tags: ['SDK', 'Software Development Kit', 'Workflowtrigger', 'Workflowtrigger']
---


# Workflowtrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "EVENT",    "EXTERNAL",    "SCHEDULED",    "" ] | The trigger type | [required]
**DisplayName** | **String** | The trigger display name | [optional] 
**Attributes** | [**WorkflowtriggerAttributes**](workflowtrigger-attributes) |  | [required]

## Examples

- Prepare the resource
```powershell
$Workflowtrigger = Initialize-Workflowtrigger  -Type EVENT `
 -DisplayName null `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$Workflowtrigger | ConvertTo-JSON
```


[[Back to top]](#) 

