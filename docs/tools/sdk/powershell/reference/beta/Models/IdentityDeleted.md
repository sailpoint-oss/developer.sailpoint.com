---
id: identity-deleted
title: IdentityDeleted
pagination_label: IdentityDeleted
sidebar_label: IdentityDeleted
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityDeleted'] 
slug: /tools/sdk/powershell/beta/models/identity-deleted
tags: ['SDK', 'Software Development Kit', 'IdentityDeleted']
---


# IdentityDeleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** |  [**IdentityDeletedIdentity**](identity-deleted-identity) |  | [required]
**Attributes** |  [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | The attributes assigned to the identity. Attributes are determined by the identity profile. | [required]

## Examples

- Prepare the resource
```powershell
$IdentityDeleted = Initialize-PSSailpoint.BetaIdentityDeleted  -Identity null `
 -Attributes {firstname&#x3D;John}
```

- Convert the resource to JSON
```powershell
$IdentityDeleted | ConvertTo-JSON
```


[[Back to top]](#) 

