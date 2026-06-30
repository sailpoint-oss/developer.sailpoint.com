---
id: sourceapp
title: Sourceapp
pagination_label: Sourceapp
sidebar_label: Sourceapp
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sourceapp', 'Sourceapp'] 
slug: /tools/sdk/powershell/apps/models/sourceapp
tags: ['SDK', 'Software Development Kit', 'Sourceapp', 'Sourceapp']
---


# Sourceapp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The source app id | [optional] 
**CloudAppId** | **String** | The deprecated source app id | [optional] 
**Name** | **String** | The source app name | [optional] 
**Created** | **System.DateTime** | Time when the source app was created | [optional] 
**Modified** | **System.DateTime** | Time when the source app was last modified | [optional] 
**Enabled** | **Boolean** | True if the source app is enabled | [optional] [default to $false]
**ProvisionRequestEnabled** | **Boolean** | True if the app allows access request | [optional] [default to $false]
**Description** | **String** | The description of the source app | [optional] 
**MatchAllAccounts** | **Boolean** | True if the source app match all accounts | [optional] [default to $false]
**AppCenterEnabled** | **Boolean** | True if the app is visible in the request center | [optional] [default to $true]
**AccountSource** | [**SourceappAccountSource**](sourceapp-account-source) |  | [optional] 
**Owner** | [**Basereferencedto**](basereferencedto) | The owner of source app | [optional] 

## Examples

- Prepare the resource
```powershell
$Sourceapp = Initialize-Sourceapp  -Id 2c91808874ff91550175097daaec161c `
 -CloudAppId 9854520 `
 -Name my app `
 -Created 2020-10-08T18:33:52.029Z `
 -Modified 2020-10-08T18:33:52.029Z `
 -Enabled true `
 -ProvisionRequestEnabled true `
 -Description the source app for engineers `
 -MatchAllAccounts true `
 -AppCenterEnabled true `
 -AccountSource null `
 -Owner null
```

- Convert the resource to JSON
```powershell
$Sourceapp | ConvertTo-JSON
```


[[Back to top]](#) 

