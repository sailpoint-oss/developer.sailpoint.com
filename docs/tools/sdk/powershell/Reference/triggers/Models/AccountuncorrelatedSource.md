---
id: accountuncorrelated-source
title: AccountuncorrelatedSource
pagination_label: AccountuncorrelatedSource
sidebar_label: AccountuncorrelatedSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountuncorrelatedSource', 'AccountuncorrelatedSource'] 
slug: /tools/sdk/powershell/triggers/models/accountuncorrelated-source
tags: ['SDK', 'Software Development Kit', 'AccountuncorrelatedSource', 'AccountuncorrelatedSource']
---


# AccountuncorrelatedSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "SOURCE" ] | The DTO type of the source the accounts are uncorrelated from. | [required]
**Id** | **String** | The ID of the source the accounts are uncorrelated from. | [required]
**Name** | **String** | Display name of the source the accounts are uncorrelated from. | [required]

## Examples

- Prepare the resource
```powershell
$AccountuncorrelatedSource = Initialize-AccountuncorrelatedSource  -Type SOURCE `
 -Id 2c6180835d191a86015d28455b4b231b `
 -Name Corporate Directory
```

- Convert the resource to JSON
```powershell
$AccountuncorrelatedSource | ConvertTo-JSON
```


[[Back to top]](#) 

