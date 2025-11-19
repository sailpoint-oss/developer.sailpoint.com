---
id: beta-identity-created
title: IdentityCreated
pagination_label: IdentityCreated
sidebar_label: IdentityCreated
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityCreated', 'BetaIdentityCreated'] 
slug: /tools/sdk/powershell/beta/models/identity-created
tags: ['SDK', 'Software Development Kit', 'IdentityCreated', 'BetaIdentityCreated']
---


# IdentityCreated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**IdentityCreatedIdentity**](identity-created-identity) |  | [required]
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Attributes assigned to the identity. These attributes are determined by the identity profile. | [required]

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

