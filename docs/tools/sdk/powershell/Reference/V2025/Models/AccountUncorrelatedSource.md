---
id: v2025-account-uncorrelated-source
title: AccountUncorrelatedSource
pagination_label: AccountUncorrelatedSource
sidebar_label: AccountUncorrelatedSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountUncorrelatedSource', 'V2025AccountUncorrelatedSource'] 
slug: /tools/sdk/powershell/v2025/models/account-uncorrelated-source
tags: ['SDK', 'Software Development Kit', 'AccountUncorrelatedSource', 'V2025AccountUncorrelatedSource']
---


# AccountUncorrelatedSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "SOURCE" ] | The DTO type of the source the accounts are uncorrelated from. | [required]
**Id** | **String** | The ID of the source the accounts are uncorrelated from. | [required]
**Name** | **String** | Display name of the source the accounts are uncorrelated from. | [required]

## Examples

- Prepare the resource
```powershell
$AccountUncorrelatedSource = Initialize-PSSailpoint.V2025AccountUncorrelatedSource  -Type SOURCE `
 -Id 2c6180835d191a86015d28455b4b231b `
 -Name Corporate Directory
```

- Convert the resource to JSON
```powershell
$AccountUncorrelatedSource | ConvertTo-JSON
```


[[Back to top]](#) 

