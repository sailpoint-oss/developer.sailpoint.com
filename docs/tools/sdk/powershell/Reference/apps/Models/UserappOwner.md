---
id: userapp-owner
title: UserappOwner
pagination_label: UserappOwner
sidebar_label: UserappOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UserappOwner', 'UserappOwner'] 
slug: /tools/sdk/powershell/apps/models/userapp-owner
tags: ['SDK', 'Software Development Kit', 'UserappOwner', 'UserappOwner']
---


# UserappOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The identity ID | [optional] 
**Type** | **String** | It will always be ""IDENTITY"" | [optional] 
**Name** | **String** | The identity name | [optional] 
**Alias** | **String** | The identity alias | [optional] 

## Examples

- Prepare the resource
```powershell
$UserappOwner = Initialize-UserappOwner  -Id 2c9180827ca885d7017ca8ce28a000eb `
 -Type IDENTITY `
 -Name John `
 -Alias John.Doe
```

- Convert the resource to JSON
```powershell
$UserappOwner | ConvertTo-JSON
```


[[Back to top]](#) 

