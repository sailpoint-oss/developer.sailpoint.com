---
id: identity-created
title: IdentityCreated
pagination_label: IdentityCreated
sidebar_label: IdentityCreated
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityCreated'] 
slug: /tools/sdk/powershell/beta/models/identity-created
tags: ['SDK', 'Software Development Kit', 'IdentityCreated']
---


# IdentityCreated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** |  [**IdentityCreatedIdentity**](identity-created-identity) |  | 
**Attributes** |  [map[string] **Any**] | The attributes assigned to the identity. Attributes are determined by the identity profile. | 

## Examples

- Prepare the resource
```powershell
$IdentityCreated = Initialize-BetaIdentityCreated  -Identity null `
 -Attributes {firstname=John}
```

- Convert the resource to JSON
```powershell
$IdentityCreated | ConvertTo-JSON
```


[[Back to top]](#) 

