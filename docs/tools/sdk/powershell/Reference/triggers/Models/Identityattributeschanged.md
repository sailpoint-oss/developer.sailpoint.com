---
id: identityattributeschanged
title: Identityattributeschanged
pagination_label: Identityattributeschanged
sidebar_label: Identityattributeschanged
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identityattributeschanged', 'Identityattributeschanged'] 
slug: /tools/sdk/powershell/triggers/models/identityattributeschanged
tags: ['SDK', 'Software Development Kit', 'Identityattributeschanged', 'Identityattributeschanged']
---


# Identityattributeschanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**IdentityattributeschangedIdentity**](identityattributeschanged-identity) |  | [required]
**Changes** | [**[]IdentityattributeschangedChangesInner**](identityattributeschanged-changes-inner) | A list of one or more identity attributes that changed on the identity. | [required]

## Examples

- Prepare the resource
```powershell
$Identityattributeschanged = Initialize-Identityattributeschanged  -Identity null `
 -Changes null
```

- Convert the resource to JSON
```powershell
$Identityattributeschanged | ConvertTo-JSON
```


[[Back to top]](#) 

