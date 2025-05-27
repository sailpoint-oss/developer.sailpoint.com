---
id: beta-identity-attributes-changed
title: IdentityAttributesChanged
pagination_label: IdentityAttributesChanged
sidebar_label: IdentityAttributesChanged
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityAttributesChanged', 'BetaIdentityAttributesChanged'] 
slug: /tools/sdk/powershell/beta/models/identity-attributes-changed
tags: ['SDK', 'Software Development Kit', 'IdentityAttributesChanged', 'BetaIdentityAttributesChanged']
---


# IdentityAttributesChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**IdentityAttributesChangedIdentity**](identity-attributes-changed-identity) |  | [required]
**Changes** | [**[]IdentityAttributesChangedChangesInner**](identity-attributes-changed-changes-inner) | List of identity's attributes that changed. | [required]

## Examples

- Prepare the resource
```powershell
$IdentityAttributesChanged = Initialize-BetaIdentityAttributesChanged  -Identity null `
 -Changes null
```

- Convert the resource to JSON
```powershell
$IdentityAttributesChanged | ConvertTo-JSON
```


[[Back to top]](#) 

