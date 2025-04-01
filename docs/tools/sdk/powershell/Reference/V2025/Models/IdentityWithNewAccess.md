---
id: v2025-identity-with-new-access
title: IdentityWithNewAccess
pagination_label: IdentityWithNewAccess
sidebar_label: IdentityWithNewAccess
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityWithNewAccess', 'V2025IdentityWithNewAccess'] 
slug: /tools/sdk/powershell/v2025/models/identity-with-new-access
tags: ['SDK', 'Software Development Kit', 'IdentityWithNewAccess', 'V2025IdentityWithNewAccess']
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
$IdentityWithNewAccess = Initialize-PSSailpoint.V2025IdentityWithNewAccess  -IdentityId 2c91808568c529c60168cca6f90c1313 `
 -AccessRefs [{type=ENTITLEMENT, id=2c918087682f9a86016839c050861ab1, name=CN=Information Access,OU=test,OU=test-service,DC=TestAD,DC=local}, {type=ENTITLEMENT, id=2c918087682f9a86016839c0509c1ab2, name=CN=Information Technology,OU=test,OU=test-service,DC=TestAD,DC=local}]
```

- Convert the resource to JSON
```powershell
$IdentityWithNewAccess | ConvertTo-JSON
```


[[Back to top]](#) 

