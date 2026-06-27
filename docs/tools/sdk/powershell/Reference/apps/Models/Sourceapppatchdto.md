---
id: sourceapppatchdto
title: Sourceapppatchdto
pagination_label: Sourceapppatchdto
sidebar_label: Sourceapppatchdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sourceapppatchdto', 'Sourceapppatchdto'] 
slug: /tools/sdk/powershell/apps/models/sourceapppatchdto
tags: ['SDK', 'Software Development Kit', 'Sourceapppatchdto', 'Sourceapppatchdto']
---


# Sourceapppatchdto

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
**AccessProfiles** | **[]String** | List of IDs of access profiles | [optional] 
**AccountSource** | [**SourceappAccountSource**](sourceapp-account-source) |  | [optional] 
**Owner** | [**Basereferencedto**](basereferencedto) | The owner of source app | [optional] 

## Examples

- Prepare the resource
```powershell
$Sourceapppatchdto = Initialize-Sourceapppatchdto  -Id 2c91808874ff91550175097daaec161c `
 -CloudAppId 9854520 `
 -Name my app `
 -Created 2020-10-08T18:33:52.029Z `
 -Modified 2020-10-08T18:33:52.029Z `
 -Enabled true `
 -ProvisionRequestEnabled true `
 -Description the source app for engineers `
 -MatchAllAccounts true `
 -AppCenterEnabled true `
 -AccessProfiles ["2c9180857725c14301772a93bb77242d","c9dc28e148a24d65b3ccb5fb8ca5ddd9"] `
 -AccountSource null `
 -Owner null
```

- Convert the resource to JSON
```powershell
$Sourceapppatchdto | ConvertTo-JSON
```


[[Back to top]](#) 

