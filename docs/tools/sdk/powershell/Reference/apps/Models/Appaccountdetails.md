---
id: appaccountdetails
title: Appaccountdetails
pagination_label: Appaccountdetails
sidebar_label: Appaccountdetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Appaccountdetails', 'Appaccountdetails'] 
slug: /tools/sdk/powershell/apps/models/appaccountdetails
tags: ['SDK', 'Software Development Kit', 'Appaccountdetails', 'Appaccountdetails']
---


# Appaccountdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppId** | **String** | The source app ID | [optional] 
**AppDisplayName** | **String** | The source app display name | [optional] 
**SourceAccount** | [**AppaccountdetailsSourceAccount**](appaccountdetails-source-account) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Appaccountdetails = Initialize-Appaccountdetails  -AppId fbf4f72280304f1a8bc808fc2a3bcf7b `
 -AppDisplayName AD source app `
 -SourceAccount null
```

- Convert the resource to JSON
```powershell
$Appaccountdetails | ConvertTo-JSON
```


[[Back to top]](#) 

