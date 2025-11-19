---
id: v2025-identity-attributes-changed-changes-inner
title: IdentityAttributesChangedChangesInner
pagination_label: IdentityAttributesChangedChangesInner
sidebar_label: IdentityAttributesChangedChangesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityAttributesChangedChangesInner', 'V2025IdentityAttributesChangedChangesInner'] 
slug: /tools/sdk/powershell/v2025/models/identity-attributes-changed-changes-inner
tags: ['SDK', 'Software Development Kit', 'IdentityAttributesChangedChangesInner', 'V2025IdentityAttributesChangedChangesInner']
---


# IdentityAttributesChangedChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **String** | The name of the identity attribute that changed. | [required]
**OldValue** | [**IdentityAttributesChangedChangesInnerOldValue**](identity-attributes-changed-changes-inner-old-value) |  | [optional] 
**NewValue** | [**IdentityAttributesChangedChangesInnerNewValue**](identity-attributes-changed-changes-inner-new-value) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttributesChangedChangesInner = Initialize-V2025IdentityAttributesChangedChangesInner  -Attribute department `
 -OldValue null `
 -NewValue null
```

- Convert the resource to JSON
```powershell
$IdentityAttributesChangedChangesInner | ConvertTo-JSON
```


[[Back to top]](#) 

