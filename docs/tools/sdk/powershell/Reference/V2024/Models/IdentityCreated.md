---
id: v2024-identity-created
title: IdentityCreated
pagination_label: IdentityCreated
sidebar_label: IdentityCreated
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityCreated', 'V2024IdentityCreated'] 
slug: /tools/sdk/powershell/v2024/models/identity-created
tags: ['SDK', 'Software Development Kit', 'IdentityCreated', 'V2024IdentityCreated']
---


# IdentityCreated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**IdentityCreatedIdentity**](identity-created-identity) |  | [required]
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | The attributes assigned to the identity. Attributes are determined by the identity profile. | [required]

## Examples

- Prepare the resource
```powershell
$IdentityCreated = Initialize-PSSailpoint.V2024IdentityCreated  -Identity null `
 -Attributes {firstname&#x3D;John}
```

- Convert the resource to JSON
```powershell
$IdentityCreated | ConvertTo-JSON
```


[[Back to top]](#) 

