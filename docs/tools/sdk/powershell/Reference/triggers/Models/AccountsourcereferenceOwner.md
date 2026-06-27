---
id: accountsourcereference-owner
title: AccountsourcereferenceOwner
pagination_label: AccountsourcereferenceOwner
sidebar_label: AccountsourcereferenceOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountsourcereferenceOwner', 'AccountsourcereferenceOwner'] 
slug: /tools/sdk/powershell/triggers/models/accountsourcereference-owner
tags: ['SDK', 'Software Development Kit', 'AccountsourcereferenceOwner', 'AccountsourcereferenceOwner']
---


# AccountsourcereferenceOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the source owner. | [required]
**Name** | **String** | Name of the source owner. | [required]

## Examples

- Prepare the resource
```powershell
$AccountsourcereferenceOwner = Initialize-AccountsourcereferenceOwner  -Id owner-123 `
 -Name owner-name
```

- Convert the resource to JSON
```powershell
$AccountsourcereferenceOwner | ConvertTo-JSON
```


[[Back to top]](#) 

