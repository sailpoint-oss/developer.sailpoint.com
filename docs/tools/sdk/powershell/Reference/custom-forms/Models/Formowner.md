---
id: formowner
title: Formowner
pagination_label: Formowner
sidebar_label: Formowner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Formowner', 'Formowner'] 
slug: /tools/sdk/powershell/customforms/models/formowner
tags: ['SDK', 'Software Development Kit', 'Formowner', 'Formowner']
---


# Formowner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | FormOwnerType value. IDENTITY FormOwnerTypeIdentity | [optional] 
**Id** | **String** | Unique identifier of the form's owner. | [optional] 
**Name** | **String** | Name of the form's owner. | [optional] 

## Examples

- Prepare the resource
```powershell
$Formowner = Initialize-Formowner  -Type IDENTITY `
 -Id 2c9180867624cbd7017642d8c8c81f67 `
 -Name Grant Smith
```

- Convert the resource to JSON
```powershell
$Formowner | ConvertTo-JSON
```


[[Back to top]](#) 

