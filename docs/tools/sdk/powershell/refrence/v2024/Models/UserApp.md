---
id: user-app
title: UserApp
pagination_label: UserApp
sidebar_label: UserApp
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UserApp'] 
slug: /tools/sdk/powershell/v2024/models/user-app
tags: ['SDK', 'Software Development Kit', 'UserApp']
---


# UserApp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The user app id | [optional] 
**Created** |  Pointer to **System.DateTime** | Time when the user app was created | [optional] 
**Modified** |  Pointer to **System.DateTime** | Time when the user app was last modified | [optional] 
**HasMultipleAccounts** |  Pointer to **Boolean** | True if the owner has multiple accounts for the source | [optional] [default to $false]
**UseForPasswordManagement** |  Pointer to **Boolean** | True if the source has password feature | [optional] [default to $false]
**ProvisionRequestEnabled** |  Pointer to **Boolean** | True if the source app related to the user app is provision request enabled | [optional] [default to $false]
**AppCenterEnabled** |  Pointer to **Boolean** | True if the source app related to the user app is shown in the app center | [optional] [default to $true]
**SourceApp** |  Pointer to [**UserAppSourceApp**](user-app-source-app) |  | [optional] 
**Source** |  Pointer to [**UserAppSource**](user-app-source) |  | [optional] 
**Account** |  Pointer to [**UserAppAccount**](user-app-account) |  | [optional] 
**Owner** |  Pointer to [**UserAppOwner**](user-app-owner) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$UserApp = Initialize-PSSailpoint.V2024UserApp  -Id 2c91808874ff91550175097daaec161c `
 -Created 2020-10-08T18:33:52.029Z `
 -Modified 2020-10-08T18:33:52.029Z `
 -HasMultipleAccounts false `
 -UseForPasswordManagement true `
 -ProvisionRequestEnabled true `
 -AppCenterEnabled true `
 -SourceApp null `
 -Source null `
 -Account null `
 -Owner null
```

- Convert the resource to JSON
```powershell
$UserApp | ConvertTo-JSON
```


[[Back to top]](#) 

