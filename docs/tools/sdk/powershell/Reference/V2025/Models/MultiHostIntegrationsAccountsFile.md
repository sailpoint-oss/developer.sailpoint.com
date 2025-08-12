---
id: v2025-multi-host-integrations-accounts-file
title: MultiHostIntegrationsAccountsFile
pagination_label: MultiHostIntegrationsAccountsFile
sidebar_label: MultiHostIntegrationsAccountsFile
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostIntegrationsAccountsFile', 'V2025MultiHostIntegrationsAccountsFile'] 
slug: /tools/sdk/powershell/v2025/models/multi-host-integrations-accounts-file
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsAccountsFile', 'V2025MultiHostIntegrationsAccountsFile']
---


# MultiHostIntegrationsAccountsFile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the accounts file. | [optional] 
**Key** | **String** | The accounts file key. | [optional] 
**UploadTime** | **System.DateTime** | Date-time when the file was uploaded | [optional] 
**Expiry** | **System.DateTime** | Date-time when the accounts file expired. | [optional] 
**Expired** | **Boolean** | If this is true, it indicates that the accounts file has expired. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$MultiHostIntegrationsAccountsFile = Initialize-V2025MultiHostIntegrationsAccountsFile  -Name My Accounts File `
 -Key 2c91808568c529c60168cca6f90c2222 `
 -UploadTime 2022-02-08T14:50:03.827Z `
 -Expiry 2022-02-08T14:50:03.827Z `
 -Expired false
```

- Convert the resource to JSON
```powershell
$MultiHostIntegrationsAccountsFile | ConvertTo-JSON
```


[[Back to top]](#) 

