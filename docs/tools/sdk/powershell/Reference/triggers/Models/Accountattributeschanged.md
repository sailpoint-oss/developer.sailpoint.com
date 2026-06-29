---
id: accountattributeschanged
title: Accountattributeschanged
pagination_label: Accountattributeschanged
sidebar_label: Accountattributeschanged
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountattributeschanged', 'Accountattributeschanged'] 
slug: /tools/sdk/powershell/triggers/models/accountattributeschanged
tags: ['SDK', 'Software Development Kit', 'Accountattributeschanged', 'Accountattributeschanged']
---


# Accountattributeschanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**AccountattributeschangedIdentity**](accountattributeschanged-identity) |  | [required]
**Source** | [**AccountattributeschangedSource**](accountattributeschanged-source) |  | [required]
**Account** | [**AccountattributeschangedAccount**](accountattributeschanged-account) |  | [required]
**Changes** | [**[]AccountattributeschangedChangesInner**](accountattributeschanged-changes-inner) | A list of attributes that changed. | [required]

## Examples

- Prepare the resource
```powershell
$Accountattributeschanged = Initialize-Accountattributeschanged  -Identity null `
 -Source null `
 -Account null `
 -Changes null
```

- Convert the resource to JSON
```powershell
$Accountattributeschanged | ConvertTo-JSON
```


[[Back to top]](#) 

