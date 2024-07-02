---
id: account-correlated-source
title: AccountCorrelatedSource
pagination_label: AccountCorrelatedSource
sidebar_label: AccountCorrelatedSource
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccountCorrelatedSource'] 
slug: /tools/sdk/powershell/beta/models/account-correlated-source
tags: ['SDK', 'Software Development Kit', 'AccountCorrelatedSource']
---


# AccountCorrelatedSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "SOURCE" ] | The DTO type of the source the accounts are being correlated from. | 
**Id** |  **String** | The ID of the source the accounts are being correlated from. | 
**Name** |  **String** | Display name of the source the accounts are being correlated from. | 

## Examples

- Prepare the resource
```powershell
$AccountCorrelatedSource = Initialize-BetaAccountCorrelatedSource  -Type SOURCE `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name HR Active Directory
```

- Convert the resource to JSON
```powershell
$AccountCorrelatedSource | ConvertTo-JSON
```


[[Back to top]](#) 

