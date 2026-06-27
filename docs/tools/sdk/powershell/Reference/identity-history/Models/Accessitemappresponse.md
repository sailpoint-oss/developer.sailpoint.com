---
id: accessitemappresponse
title: Accessitemappresponse
pagination_label: Accessitemappresponse
sidebar_label: Accessitemappresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessitemappresponse', 'Accessitemappresponse'] 
slug: /tools/sdk/powershell/identityhistory/models/accessitemappresponse
tags: ['SDK', 'Software Development Kit', 'Accessitemappresponse', 'Accessitemappresponse']
---


# Accessitemappresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the access item id | [optional] 
**AccessType** | **String** | the access item type. entitlement in this case | [optional] 
**DisplayName** | **String** | the access item display name | [optional] 
**SourceName** | **String** | the associated source name if it exists | [optional] 
**AppRoleId** | **String** | the app role id | [required]

## Examples

- Prepare the resource
```powershell
$Accessitemappresponse = Initialize-Accessitemappresponse  -Id 2c918087763e69d901763e72e97f006f `
 -AccessType app `
 -DisplayName Display Name `
 -SourceName appName `
 -AppRoleId 2c918087763e69d901763e72e97f006f
```

- Convert the resource to JSON
```powershell
$Accessitemappresponse | ConvertTo-JSON
```


[[Back to top]](#) 

