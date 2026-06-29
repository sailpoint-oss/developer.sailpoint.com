---
id: accountsourcereference-governance-group
title: AccountsourcereferenceGovernanceGroup
pagination_label: AccountsourcereferenceGovernanceGroup
sidebar_label: AccountsourcereferenceGovernanceGroup
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountsourcereferenceGovernanceGroup', 'AccountsourcereferenceGovernanceGroup'] 
slug: /tools/sdk/powershell/triggers/models/accountsourcereference-governance-group
tags: ['SDK', 'Software Development Kit', 'AccountsourcereferenceGovernanceGroup', 'AccountsourcereferenceGovernanceGroup']
---


# AccountsourcereferenceGovernanceGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the governance group. | [required]
**Name** | **String** | Name of the governance group. | [required]

## Examples

- Prepare the resource
```powershell
$AccountsourcereferenceGovernanceGroup = Initialize-AccountsourcereferenceGovernanceGroup  -Id group-456 `
 -Name governance-group-name
```

- Convert the resource to JSON
```powershell
$AccountsourcereferenceGovernanceGroup | ConvertTo-JSON
```


[[Back to top]](#) 

