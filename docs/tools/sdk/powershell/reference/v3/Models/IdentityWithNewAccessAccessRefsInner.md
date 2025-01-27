---
id: identity-with-new-access-access-refs-inner
title: IdentityWithNewAccessAccessRefsInner
pagination_label: IdentityWithNewAccessAccessRefsInner
sidebar_label: IdentityWithNewAccessAccessRefsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityWithNewAccessAccessRefsInner'] 
slug: /tools/sdk/powershell/v3/models/identity-with-new-access-access-refs-inner
tags: ['SDK', 'Software Development Kit', 'IdentityWithNewAccessAccessRefsInner']
---


# IdentityWithNewAccessAccessRefsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "ENTITLEMENT" ] | Entitlement's DTO type. | [optional] 
**Id** |  Pointer to **String** | Entitlement's ID. | [optional] 
**Name** |  Pointer to **String** | Entitlement's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityWithNewAccessAccessRefsInner = Initialize-PSSailpoint.V3IdentityWithNewAccessAccessRefsInner  -Type ENTITLEMENT `
 -Id 2c91809773dee32014e13e122092014e `
 -Name CN&#x3D;entitlement.490efde5,OU&#x3D;OrgCo,OU&#x3D;ServiceDept,DC&#x3D;HQAD,DC&#x3D;local
```

- Convert the resource to JSON
```powershell
$IdentityWithNewAccessAccessRefsInner | ConvertTo-JSON
```


[[Back to top]](#) 

