---
id: accountupdated-single-value-attribute-changes-inner
title: AccountupdatedSingleValueAttributeChangesInner
pagination_label: AccountupdatedSingleValueAttributeChangesInner
sidebar_label: AccountupdatedSingleValueAttributeChangesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountupdatedSingleValueAttributeChangesInner', 'AccountupdatedSingleValueAttributeChangesInner'] 
slug: /tools/sdk/powershell/triggers/models/accountupdated-single-value-attribute-changes-inner
tags: ['SDK', 'Software Development Kit', 'AccountupdatedSingleValueAttributeChangesInner', 'AccountupdatedSingleValueAttributeChangesInner']
---


# AccountupdatedSingleValueAttributeChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the attribute that was changed. | [required]
**OldValue** | [**AccountupdatedSingleValueAttributeChangesInnerOldValue**](accountupdated-single-value-attribute-changes-inner-old-value) |  | [required]
**NewValue** | [**AccountupdatedSingleValueAttributeChangesInnerNewValue**](accountupdated-single-value-attribute-changes-inner-new-value) |  | [required]

## Examples

- Prepare the resource
```powershell
$AccountupdatedSingleValueAttributeChangesInner = Initialize-AccountupdatedSingleValueAttributeChangesInner  -Name displayName `
 -OldValue null `
 -NewValue null
```

- Convert the resource to JSON
```powershell
$AccountupdatedSingleValueAttributeChangesInner | ConvertTo-JSON
```


[[Back to top]](#) 

