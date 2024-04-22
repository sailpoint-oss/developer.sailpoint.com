---
id: identity-attributes-changed
title: IdentityAttributesChanged
pagination_label: IdentityAttributesChanged
sidebar_label: IdentityAttributesChanged
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityAttributesChanged'] 
slug: /tools/sdk/powershell/beta/models/identity-attributes-changed
tags: ['SDK', 'Software Development Kit', 'IdentityAttributesChanged']
---


# IdentityAttributesChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** |  [**IdentityAttributesChangedIdentity**](identity-attributes-changed-identity) |  | 
**Changes** |  [**[]IdentityAttributesChangedChangesInner**](identity-attributes-changed-changes-inner) | A list of one or more identity attributes that changed on the identity. | 

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

