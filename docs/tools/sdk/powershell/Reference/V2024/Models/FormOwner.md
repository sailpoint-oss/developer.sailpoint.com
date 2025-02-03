---
id: v2024-form-owner
title: FormOwner
pagination_label: FormOwner
sidebar_label: FormOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormOwner', 'V2024FormOwner'] 
slug: /tools/sdk/powershell/v2024/models/form-owner
tags: ['SDK', 'Software Development Kit', 'FormOwner', 'V2024FormOwner']
---


# FormOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | FormOwnerType value. IDENTITY FormOwnerTypeIdentity | [optional] 
**Id** |  Pointer to **String** | Unique identifier of the form's owner. | [optional] 
**Name** |  Pointer to **String** | Name of the form's owner. | [optional] 

## Examples

- Prepare the resource
```powershell
$FormOwner = Initialize-PSSailpoint.V2024FormOwner  -Type IDENTITY `
 -Id 2c9180867624cbd7017642d8c8c81f67 `
 -Name Grant Smith
```

- Convert the resource to JSON
```powershell
$FormOwner | ConvertTo-JSON
```


[[Back to top]](#) 

