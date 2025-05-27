---
id: v2025-identity-attributes-changed
title: IdentityAttributesChanged
pagination_label: IdentityAttributesChanged
sidebar_label: IdentityAttributesChanged
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityAttributesChanged', 'V2025IdentityAttributesChanged'] 
slug: /tools/sdk/powershell/v2025/models/identity-attributes-changed
tags: ['SDK', 'Software Development Kit', 'IdentityAttributesChanged', 'V2025IdentityAttributesChanged']
---


# IdentityAttributesChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**IdentityAttributesChangedIdentity**](identity-attributes-changed-identity) |  | [required]
**Changes** | [**[]IdentityAttributesChangedChangesInner**](identity-attributes-changed-changes-inner) | A list of one or more identity attributes that changed on the identity. | [required]

## Examples

- Prepare the resource
```powershell
$IdentityAttributesChanged = Initialize-V2025IdentityAttributesChanged  -Identity null `
 -Changes null
```

- Convert the resource to JSON
```powershell
$IdentityAttributesChanged | ConvertTo-JSON
```


[[Back to top]](#) 

