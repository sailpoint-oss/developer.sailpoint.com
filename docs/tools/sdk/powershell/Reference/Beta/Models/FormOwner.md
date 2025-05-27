---
id: beta-form-owner
title: FormOwner
pagination_label: FormOwner
sidebar_label: FormOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormOwner', 'BetaFormOwner'] 
slug: /tools/sdk/powershell/beta/models/form-owner
tags: ['SDK', 'Software Development Kit', 'FormOwner', 'BetaFormOwner']
---


# FormOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | FormOwnerType value. IDENTITY FormOwnerTypeIdentity | [optional] 
**Id** | **String** | Unique identifier of the form's owner. | [optional] 
**Name** | **String** | Name of the form's owner. | [optional] 

## Examples

- Prepare the resource
```powershell
$FormOwner = Initialize-BetaFormOwner  -Type IDENTITY `
 -Id 2c9180867624cbd7017642d8c8c81f67 `
 -Name Grant Smith
```

- Convert the resource to JSON
```powershell
$FormOwner | ConvertTo-JSON
```


[[Back to top]](#) 

