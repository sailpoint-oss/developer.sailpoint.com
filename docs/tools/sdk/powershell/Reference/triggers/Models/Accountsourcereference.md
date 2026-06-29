---
id: accountsourcereference
title: Accountsourcereference
pagination_label: Accountsourcereference
sidebar_label: Accountsourcereference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountsourcereference', 'Accountsourcereference'] 
slug: /tools/sdk/powershell/triggers/models/accountsourcereference
tags: ['SDK', 'Software Development Kit', 'Accountsourcereference', 'Accountsourcereference']
---


# Accountsourcereference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the source. | [required]
**Name** | **String** | The name of the source. | [required]
**Alias** | **String** | The alias of the source. | [required]
**Owner** | [**AccountsourcereferenceOwner**](accountsourcereference-owner) |  | [required]
**GovernanceGroup** | [**AccountsourcereferenceGovernanceGroup**](accountsourcereference-governance-group) |  | [required]

## Examples

- Prepare the resource
```powershell
$Accountsourcereference = Initialize-Accountsourcereference  -Id 2c918082814e693601816e09471b29b6 `
 -Name Active Directory `
 -Alias AD `
 -Owner null `
 -GovernanceGroup null
```

- Convert the resource to JSON
```powershell
$Accountsourcereference | ConvertTo-JSON
```


[[Back to top]](#) 

