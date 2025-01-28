---
id: v2024-account-correlated-source
title: AccountCorrelatedSource
pagination_label: AccountCorrelatedSource
sidebar_label: AccountCorrelatedSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountCorrelatedSource', 'V2024AccountCorrelatedSource'] 
slug: /tools/sdk/powershell/v2024/models/account-correlated-source
tags: ['SDK', 'Software Development Kit', 'AccountCorrelatedSource', 'V2024AccountCorrelatedSource']
---


# AccountCorrelatedSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "SOURCE" ] | The DTO type of the source the accounts are being correlated from. | [required]
**Id** |  **String** | The ID of the source the accounts are being correlated from. | [required]
**Name** |  **String** | Display name of the source the accounts are being correlated from. | [required]

## Examples

- Prepare the resource
```powershell
$AccountCorrelatedSource = Initialize-PSSailpoint.V2024AccountCorrelatedSource  -Type SOURCE `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name HR Active Directory
```

- Convert the resource to JSON
```powershell
$AccountCorrelatedSource | ConvertTo-JSON
```


[[Back to top]](#) 

