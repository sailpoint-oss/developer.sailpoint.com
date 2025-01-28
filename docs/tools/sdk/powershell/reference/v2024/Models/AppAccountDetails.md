---
id: v2024-app-account-details
title: AppAccountDetails
pagination_label: AppAccountDetails
sidebar_label: AppAccountDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AppAccountDetails', 'V2024AppAccountDetails'] 
slug: /tools/sdk/powershell/v2024/models/app-account-details
tags: ['SDK', 'Software Development Kit', 'AppAccountDetails', 'V2024AppAccountDetails']
---


# AppAccountDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppId** |  Pointer to **String** | The source app ID | [optional] 
**AppDisplayName** |  Pointer to **String** | The source app display name | [optional] 
**SourceAccount** |  Pointer to [**AppAccountDetailsSourceAccount**](app-account-details-source-account) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AppAccountDetails = Initialize-PSSailpoint.V2024AppAccountDetails  -AppId fbf4f72280304f1a8bc808fc2a3bcf7b `
 -AppDisplayName AD source app `
 -SourceAccount null
```

- Convert the resource to JSON
```powershell
$AppAccountDetails | ConvertTo-JSON
```


[[Back to top]](#) 

