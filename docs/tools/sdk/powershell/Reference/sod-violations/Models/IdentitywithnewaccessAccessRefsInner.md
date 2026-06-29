---
id: identitywithnewaccess-access-refs-inner
title: IdentitywithnewaccessAccessRefsInner
pagination_label: IdentitywithnewaccessAccessRefsInner
sidebar_label: IdentitywithnewaccessAccessRefsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentitywithnewaccessAccessRefsInner', 'IdentitywithnewaccessAccessRefsInner'] 
slug: /tools/sdk/powershell/sodviolations/models/identitywithnewaccess-access-refs-inner
tags: ['SDK', 'Software Development Kit', 'IdentitywithnewaccessAccessRefsInner', 'IdentitywithnewaccessAccessRefsInner']
---


# IdentitywithnewaccessAccessRefsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ENTITLEMENT" ] | Entitlement's DTO type. | [optional] 
**Id** | **String** | Entitlement's ID. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentitywithnewaccessAccessRefsInner = Initialize-IdentitywithnewaccessAccessRefsInner  -Type ENTITLEMENT `
 -Id 2c91809773dee32014e13e122092014e
```

- Convert the resource to JSON
```powershell
$IdentitywithnewaccessAccessRefsInner | ConvertTo-JSON
```


[[Back to top]](#) 

