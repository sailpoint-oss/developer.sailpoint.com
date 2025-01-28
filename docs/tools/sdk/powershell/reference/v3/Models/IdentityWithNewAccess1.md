---
id: identity-with-new-access1
title: IdentityWithNewAccess1
pagination_label: IdentityWithNewAccess1
sidebar_label: IdentityWithNewAccess1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityWithNewAccess1'] 
slug: /tools/sdk/powershell/v3/models/identity-with-new-access1
tags: ['SDK', 'Software Development Kit', 'IdentityWithNewAccess1']
---


# IdentityWithNewAccess1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** |  **String** | Set of identity IDs to be checked. | [required]
**AccessRefs** |  [**[]EntitlementRef1**](entitlement-ref1) | The bundle of access profiles to be added to the identities specified. All references must be ENTITLEMENT type. | [required]
**ClientMetadata** |  Pointer to **map[string]String** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityWithNewAccess1 = Initialize-PSSailpoint.V3IdentityWithNewAccess1  -IdentityId 2c91809050db617d0150e0bf3215385e `
 -AccessRefs null `
 -ClientMetadata {clientName&#x3D;client1, clientId&#x3D;2c91808f7892918f0178b78da4a305a1}
```

- Convert the resource to JSON
```powershell
$IdentityWithNewAccess1 | ConvertTo-JSON
```


[[Back to top]](#) 

