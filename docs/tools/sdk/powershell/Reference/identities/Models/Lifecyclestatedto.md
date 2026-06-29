---
id: lifecyclestatedto
title: Lifecyclestatedto
pagination_label: Lifecyclestatedto
sidebar_label: Lifecyclestatedto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Lifecyclestatedto', 'Lifecyclestatedto'] 
slug: /tools/sdk/powershell/identities/models/lifecyclestatedto
tags: ['SDK', 'Software Development Kit', 'Lifecyclestatedto', 'Lifecyclestatedto']
---


# Lifecyclestatedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StateName** | **String** | The name of the lifecycle state | [required]
**ManuallyUpdated** | **Boolean** | Whether the lifecycle state has been manually or automatically set | [required]

## Examples

- Prepare the resource
```powershell
$Lifecyclestatedto = Initialize-Lifecyclestatedto  -StateName active `
 -ManuallyUpdated true
```

- Convert the resource to JSON
```powershell
$Lifecyclestatedto | ConvertTo-JSON
```


[[Back to top]](#) 

