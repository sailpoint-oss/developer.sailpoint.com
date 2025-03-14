---
id: beta-identity-attributes-changed-changes-inner
title: IdentityAttributesChangedChangesInner
pagination_label: IdentityAttributesChangedChangesInner
sidebar_label: IdentityAttributesChangedChangesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityAttributesChangedChangesInner', 'BetaIdentityAttributesChangedChangesInner'] 
slug: /tools/sdk/powershell/beta/models/identity-attributes-changed-changes-inner
tags: ['SDK', 'Software Development Kit', 'IdentityAttributesChangedChangesInner', 'BetaIdentityAttributesChangedChangesInner']
---


# IdentityAttributesChangedChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **String** | Identity attribute's name. | [required]
**OldValue** | [**IdentityAttributesChangedChangesInnerOldValue**](identity-attributes-changed-changes-inner-old-value) |  | [optional] 
**NewValue** | [**IdentityAttributesChangedChangesInnerNewValue**](identity-attributes-changed-changes-inner-new-value) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttributesChangedChangesInner = Initialize-PSSailpoint.BetaIdentityAttributesChangedChangesInner  -Attribute department `
 -OldValue null `
 -NewValue null
```

- Convert the resource to JSON
```powershell
$IdentityAttributesChangedChangesInner | ConvertTo-JSON
```


[[Back to top]](#) 

