---
id: identityattributeschanged-changes-inner
title: IdentityattributeschangedChangesInner
pagination_label: IdentityattributeschangedChangesInner
sidebar_label: IdentityattributeschangedChangesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityattributeschangedChangesInner', 'IdentityattributeschangedChangesInner'] 
slug: /tools/sdk/powershell/triggers/models/identityattributeschanged-changes-inner
tags: ['SDK', 'Software Development Kit', 'IdentityattributeschangedChangesInner', 'IdentityattributeschangedChangesInner']
---


# IdentityattributeschangedChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **String** | The name of the identity attribute that changed. | [required]
**OldValue** | [**IdentityattributeschangedChangesInnerOldValue**](identityattributeschanged-changes-inner-old-value) |  | [optional] 
**NewValue** | [**IdentityattributeschangedChangesInnerNewValue**](identityattributeschanged-changes-inner-new-value) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityattributeschangedChangesInner = Initialize-IdentityattributeschangedChangesInner  -Attribute department `
 -OldValue null `
 -NewValue null
```

- Convert the resource to JSON
```powershell
$IdentityattributeschangedChangesInner | ConvertTo-JSON
```


[[Back to top]](#) 

