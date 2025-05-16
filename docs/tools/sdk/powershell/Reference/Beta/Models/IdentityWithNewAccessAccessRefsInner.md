---
id: beta-identity-with-new-access-access-refs-inner
title: IdentityWithNewAccessAccessRefsInner
pagination_label: IdentityWithNewAccessAccessRefsInner
sidebar_label: IdentityWithNewAccessAccessRefsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityWithNewAccessAccessRefsInner', 'BetaIdentityWithNewAccessAccessRefsInner'] 
slug: /tools/sdk/powershell/beta/models/identity-with-new-access-access-refs-inner
tags: ['SDK', 'Software Development Kit', 'IdentityWithNewAccessAccessRefsInner', 'BetaIdentityWithNewAccessAccessRefsInner']
---


# IdentityWithNewAccessAccessRefsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ENTITLEMENT" ] | Entitlement's DTO type. | [optional] 
**Id** | **String** | Entitlement's ID. | [optional] 
**Name** | **String** | Entitlement's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityWithNewAccessAccessRefsInner = Initialize-BetaIdentityWithNewAccessAccessRefsInner  -Type ENTITLEMENT `
 -Id 2c91809773dee32014e13e122092014e `
 -Name CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local
```

- Convert the resource to JSON
```powershell
$IdentityWithNewAccessAccessRefsInner | ConvertTo-JSON
```


[[Back to top]](#) 

