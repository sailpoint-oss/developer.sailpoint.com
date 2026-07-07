---
id: multihostintegrations-accounts-file
title: MultihostintegrationsAccountsFile
pagination_label: MultihostintegrationsAccountsFile
sidebar_label: MultihostintegrationsAccountsFile
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultihostintegrationsAccountsFile', 'MultihostintegrationsAccountsFile'] 
slug: /tools/sdk/powershell/multihostintegration/models/multihostintegrations-accounts-file
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsAccountsFile', 'MultihostintegrationsAccountsFile']
---


# MultihostintegrationsAccountsFile

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
$MultihostintegrationsAccountsFile = Initialize-MultihostintegrationsAccountsFile  -Name My Accounts File `
 -Key 2c91808568c529c60168cca6f90c2222 `
 -UploadTime 2022-02-08T14:50:03.827Z `
 -Expiry 2022-02-08T14:50:03.827Z `
 -Expired false
```

- Convert the resource to JSON
```powershell
$MultihostintegrationsAccountsFile | ConvertTo-JSON
```


[[Back to top]](#) 

