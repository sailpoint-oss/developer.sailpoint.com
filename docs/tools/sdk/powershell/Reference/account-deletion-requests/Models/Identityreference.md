---
id: identityreference
title: Identityreference
pagination_label: Identityreference
sidebar_label: Identityreference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identityreference', 'Identityreference'] 
slug: /tools/sdk/powershell/accountdeletionrequests/models/identityreference
tags: ['SDK', 'Software Development Kit', 'Identityreference', 'Identityreference']
---


# Identityreference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Dtotype**](dtotype) |  | [optional] 
**Id** | **String** | Identity id | [optional] 
**Name** | **String** | Human-readable display name of identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$Identityreference = Initialize-Identityreference  -Type null `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Thomas Edison
```

- Convert the resource to JSON
```powershell
$Identityreference | ConvertTo-JSON
```


[[Back to top]](#) 

