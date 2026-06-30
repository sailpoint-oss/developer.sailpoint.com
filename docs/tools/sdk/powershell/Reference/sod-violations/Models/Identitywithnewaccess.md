---
id: identitywithnewaccess
title: Identitywithnewaccess
pagination_label: Identitywithnewaccess
sidebar_label: Identitywithnewaccess
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identitywithnewaccess', 'Identitywithnewaccess'] 
slug: /tools/sdk/powershell/sodviolations/models/identitywithnewaccess
tags: ['SDK', 'Software Development Kit', 'Identitywithnewaccess', 'Identitywithnewaccess']
---


# Identitywithnewaccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | Identity id to be checked. | [required]
**AccessRefs** | [**[]IdentitywithnewaccessAccessRefsInner**](identitywithnewaccess-access-refs-inner) | The list of entitlements to consider for possible violations in a preventive check. | [required]

## Examples

- Prepare the resource
```powershell
$Identitywithnewaccess = Initialize-Identitywithnewaccess  -IdentityId 2c91808568c529c60168cca6f90c1313 `
 -AccessRefs [{"type":"ENTITLEMENT","id":"2c918087682f9a86016839c050861ab1"},{"type":"ENTITLEMENT","id":"2c918087682f9a86016839c0509c1ab2"}]
```

- Convert the resource to JSON
```powershell
$Identitywithnewaccess | ConvertTo-JSON
```


[[Back to top]](#) 

