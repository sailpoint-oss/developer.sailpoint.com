---
id: accountcreated
title: Accountcreated
pagination_label: Accountcreated
sidebar_label: Accountcreated
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountcreated', 'Accountcreated'] 
slug: /tools/sdk/powershell/triggers/models/accountcreated
tags: ['SDK', 'Software Development Kit', 'Accountcreated', 'Accountcreated']
---


# Accountcreated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarEvent** | [**AccountcreatedEvent**](accountcreated-event) |  | [required]
**Source** | [**Accountsourcereference**](accountsourcereference) |  | [required]
**Account** | [**Accountv2**](accountv2) |  | [required]
**Identity** | [**Identityreference2**](identityreference2) |  | [required]

## Examples

- Prepare the resource
```powershell
$Accountcreated = Initialize-Accountcreated  -VarEvent null `
 -Source null `
 -Account null `
 -Identity null
```

- Convert the resource to JSON
```powershell
$Accountcreated | ConvertTo-JSON
```


[[Back to top]](#) 

