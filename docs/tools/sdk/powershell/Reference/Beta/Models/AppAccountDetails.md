---
id: beta-app-account-details
title: AppAccountDetails
pagination_label: AppAccountDetails
sidebar_label: AppAccountDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AppAccountDetails', 'BetaAppAccountDetails'] 
slug: /tools/sdk/powershell/beta/models/app-account-details
tags: ['SDK', 'Software Development Kit', 'AppAccountDetails', 'BetaAppAccountDetails']
---


# AppAccountDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppId** | **String** | The source app ID | [optional] 
**AppDisplayName** | **String** | The source app display name | [optional] 
**SourceAccount** | [**AppAccountDetailsSourceAccount**](app-account-details-source-account) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AppAccountDetails = Initialize-PSSailpoint.BetaAppAccountDetails  -AppId fbf4f72280304f1a8bc808fc2a3bcf7b `
 -AppDisplayName AD source app `
 -SourceAccount null
```

- Convert the resource to JSON
```powershell
$AppAccountDetails | ConvertTo-JSON
```


[[Back to top]](#) 

