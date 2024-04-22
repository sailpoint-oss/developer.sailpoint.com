---
id: identity-attributes-changed-changes-inner
title: IdentityAttributesChangedChangesInner
pagination_label: IdentityAttributesChangedChangesInner
sidebar_label: IdentityAttributesChangedChangesInner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityAttributesChangedChangesInner'] 
slug: /tools/sdk/powershell/beta/models/identity-attributes-changed-changes-inner
tags: ['SDK', 'Software Development Kit', 'IdentityAttributesChangedChangesInner']
---


# IdentityAttributesChangedChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** |  **String** | The name of the identity attribute that changed. | 
**OldValue** |  Pointer to [**IdentityAttributesChangedChangesInnerOldValue**](identity-attributes-changed-changes-inner-old-value) |  | [optional] 
**NewValue** |  Pointer to [**IdentityAttributesChangedChangesInnerNewValue**](identity-attributes-changed-changes-inner-new-value) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttributesChangedChangesInner = Initialize-BetaIdentityAttributesChangedChangesInner  -Attribute department `
 -OldValue null `
 -NewValue null
```

- Convert the resource to JSON
```powershell
$IdentityAttributesChangedChangesInner | ConvertTo-JSON
```


[[Back to top]](#) 

