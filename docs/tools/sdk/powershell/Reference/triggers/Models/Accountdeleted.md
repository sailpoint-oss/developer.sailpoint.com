---
id: accountdeleted
title: Accountdeleted
pagination_label: Accountdeleted
sidebar_label: Accountdeleted
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountdeleted', 'Accountdeleted'] 
slug: /tools/sdk/powershell/triggers/models/accountdeleted
tags: ['SDK', 'Software Development Kit', 'Accountdeleted', 'Accountdeleted']
---


# Accountdeleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarEvent** | [**AccountdeletedEvent**](accountdeleted-event) |  | [required]
**Source** | [**Accountsourcereference**](accountsourcereference) |  | [required]
**Account** | [**Accountv2**](accountv2) |  | [required]
**Identity** | [**Identityreference2**](identityreference2) |  | [required]

## Examples

- Prepare the resource
```powershell
$Accountdeleted = Initialize-Accountdeleted  -VarEvent null `
 -Source null `
 -Account null `
 -Identity null
```

- Convert the resource to JSON
```powershell
$Accountdeleted | ConvertTo-JSON
```


[[Back to top]](#) 

