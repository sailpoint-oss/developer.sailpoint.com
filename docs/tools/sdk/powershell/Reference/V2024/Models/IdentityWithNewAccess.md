---
id: v2024-identity-with-new-access
title: IdentityWithNewAccess
pagination_label: IdentityWithNewAccess
sidebar_label: IdentityWithNewAccess
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityWithNewAccess', 'V2024IdentityWithNewAccess'] 
slug: /tools/sdk/powershell/v2024/models/identity-with-new-access
tags: ['SDK', 'Software Development Kit', 'IdentityWithNewAccess', 'V2024IdentityWithNewAccess']
---


# IdentityWithNewAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | Identity id to be checked. | [required]
**AccessRefs** | [**[]IdentityWithNewAccessAccessRefsInner**](identity-with-new-access-access-refs-inner) | The list of entitlements to consider for possible violations in a preventive check. | [required]

## Examples

- Prepare the resource
```powershell
$IdentityWithNewAccess = Initialize-V2024IdentityWithNewAccess  -IdentityId 2c91808568c529c60168cca6f90c1313 `
 -AccessRefs [{type=ENTITLEMENT, id=2c918087682f9a86016839c050861ab1}, {type=ENTITLEMENT, id=2c918087682f9a86016839c0509c1ab2}]
```

- Convert the resource to JSON
```powershell
$IdentityWithNewAccess | ConvertTo-JSON
```


[[Back to top]](#) 

