---
id: authprofilesummary
title: Authprofilesummary
pagination_label: Authprofilesummary
sidebar_label: Authprofilesummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Authprofilesummary', 'Authprofilesummary'] 
slug: /tools/sdk/powershell/authprofile/models/authprofilesummary
tags: ['SDK', 'Software Development Kit', 'Authprofilesummary', 'Authprofilesummary']
---


# Authprofilesummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Tenant** | **String** | Tenant name. | [optional] 
**Id** | **String** | Identity ID. | [optional] 

## Examples

- Prepare the resource
```powershell
$Authprofilesummary = Initialize-Authprofilesummary  -Tenant test-tenant `
 -Id 2c91808458ae7a4f0158b1bbf8af0628
```

- Convert the resource to JSON
```powershell
$Authprofilesummary | ConvertTo-JSON
```


[[Back to top]](#) 

