---
id: identity-deleted
title: IdentityDeleted
pagination_label: IdentityDeleted
sidebar_label: IdentityDeleted
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityDeleted'] 
slug: /tools/sdk/powershell/beta/models/identity-deleted
tags: ['SDK', 'Software Development Kit', 'IdentityDeleted']
---


# IdentityDeleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** |  [**IdentityDeletedIdentity**](identity-deleted-identity) |  | 
**Attributes** |  [map[string] **Any**] | The attributes assigned to the identity. Attributes are determined by the identity profile. | 

## Examples

- Prepare the resource
```powershell
$IdentityDeleted = Initialize-PSSailpointBetaIdentityDeleted  -Identity null `
 -Attributes {firstname&#x3D;John}
```

- Convert the resource to JSON
```powershell
$IdentityDeleted | ConvertTo-JSON
```


[[Back to top]](#) 

