---
id: identity-with-new-access-access-refs-inner
title: IdentityWithNewAccessAccessRefsInner
pagination_label: IdentityWithNewAccessAccessRefsInner
sidebar_label: IdentityWithNewAccessAccessRefsInner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityWithNewAccessAccessRefsInner'] 
slug: /tools/sdk/powershell/v3/models/identity-with-new-access-access-refs-inner
tags: ['SDK', 'Software Development Kit', 'IdentityWithNewAccessAccessRefsInner']
---


# IdentityWithNewAccessAccessRefsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "ENTITLEMENT" ] | Entitlement&#39;s DTO type. | [optional] 
**Id** |  Pointer to **String** | Entitlement&#39;s ID. | [optional] 
**Name** |  Pointer to **String** | Entitlement&#39;s display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityWithNewAccessAccessRefsInner = Initialize-IdentityWithNewAccessAccessRefsInner  -Type ENTITLEMENT `
 -Id 2c91809773dee32014e13e122092014e `
 -Name CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local
```

- Convert the resource to JSON
```powershell
$IdentityWithNewAccessAccessRefsInner | ConvertTo-JSON
```


[[Back to top]](#) 

