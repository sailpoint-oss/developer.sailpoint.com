---
id: userapp
title: Userapp
pagination_label: Userapp
sidebar_label: Userapp
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Userapp', 'Userapp'] 
slug: /tools/sdk/powershell/apps/models/userapp
tags: ['SDK', 'Software Development Kit', 'Userapp', 'Userapp']
---


# Userapp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The user app id | [optional] 
**Created** | **System.DateTime** | Time when the user app was created | [optional] 
**Modified** | **System.DateTime** | Time when the user app was last modified | [optional] 
**HasMultipleAccounts** | **Boolean** | True if the owner has multiple accounts for the source | [optional] [default to $false]
**UseForPasswordManagement** | **Boolean** | True if the source has password feature | [optional] [default to $false]
**ProvisionRequestEnabled** | **Boolean** | True if the app allows access request | [optional] [default to $false]
**AppCenterEnabled** | **Boolean** | True if the app is visible in the request center | [optional] [default to $true]
**SourceApp** | [**UserappSourceApp**](userapp-source-app) |  | [optional] 
**Source** | [**UserappSource**](userapp-source) |  | [optional] 
**Account** | [**UserappAccount**](userapp-account) |  | [optional] 
**Owner** | [**UserappOwner**](userapp-owner) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Userapp = Initialize-Userapp  -Id 2c91808874ff91550175097daaec161c `
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
$Userapp | ConvertTo-JSON
```


[[Back to top]](#) 

