---
id: v2024-identity-attributes-changed
title: IdentityAttributesChanged
pagination_label: IdentityAttributesChanged
sidebar_label: IdentityAttributesChanged
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityAttributesChanged', 'V2024IdentityAttributesChanged'] 
slug: /tools/sdk/powershell/v2024/models/identity-attributes-changed
tags: ['SDK', 'Software Development Kit', 'IdentityAttributesChanged', 'V2024IdentityAttributesChanged']
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
$IdentityAttributesChanged = Initialize-V2024IdentityAttributesChanged  -Identity null `
 -Changes null
```

- Convert the resource to JSON
```powershell
$IdentityAttributesChanged | ConvertTo-JSON
```


[[Back to top]](#) 

