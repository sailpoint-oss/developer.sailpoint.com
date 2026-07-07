---
id: accountcorrelated-source
title: AccountcorrelatedSource
pagination_label: AccountcorrelatedSource
sidebar_label: AccountcorrelatedSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountcorrelatedSource', 'AccountcorrelatedSource'] 
slug: /tools/sdk/powershell/triggers/models/accountcorrelated-source
tags: ['SDK', 'Software Development Kit', 'AccountcorrelatedSource', 'AccountcorrelatedSource']
---


# AccountcorrelatedSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "SOURCE" ] | The DTO type of the source the accounts are being correlated from. | [required]
**Id** | **String** | The ID of the source the accounts are being correlated from. | [required]
**Name** | **String** | Display name of the source the accounts are being correlated from. | [required]

## Examples

- Prepare the resource
```powershell
$AccountcorrelatedSource = Initialize-AccountcorrelatedSource  -Type SOURCE `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name HR Active Directory
```

- Convert the resource to JSON
```powershell
$AccountcorrelatedSource | ConvertTo-JSON
```


[[Back to top]](#) 

