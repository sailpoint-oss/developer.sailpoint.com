---
id: accountattributeschanged-changes-inner
title: AccountattributeschangedChangesInner
pagination_label: AccountattributeschangedChangesInner
sidebar_label: AccountattributeschangedChangesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountattributeschangedChangesInner', 'AccountattributeschangedChangesInner'] 
slug: /tools/sdk/powershell/triggers/models/accountattributeschanged-changes-inner
tags: ['SDK', 'Software Development Kit', 'AccountattributeschangedChangesInner', 'AccountattributeschangedChangesInner']
---


# AccountattributeschangedChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **String** | The name of the attribute. | [required]
**OldValue** | [**AccountattributeschangedChangesInnerOldValue**](accountattributeschanged-changes-inner-old-value) |  | [required]
**NewValue** | [**AccountattributeschangedChangesInnerNewValue**](accountattributeschanged-changes-inner-new-value) |  | [required]

## Examples

- Prepare the resource
```powershell
$AccountattributeschangedChangesInner = Initialize-AccountattributeschangedChangesInner  -Attribute sn `
 -OldValue null `
 -NewValue null
```

- Convert the resource to JSON
```powershell
$AccountattributeschangedChangesInner | ConvertTo-JSON
```


[[Back to top]](#) 

