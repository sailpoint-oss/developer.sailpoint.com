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
**SourceIdAndNativeIdToEntitlementIdsMappings** | [**[]SourceIdAndNativeIdToEntitlementIdsMapping**](source-id-and-native-id-to-entitlement-ids-mapping) | Mappings between sourceId and nativeId to entitlement IDs for which access is requested. This is only being used for ARM analysis in case of user having multiple accounts on the same source on which entitlement is requested. Optional parameter that helps identify which account the entitlement is requested on. For scenarios where users have a single account on the source and do not provide this field, the available account is chosen. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityWithNewAccess = Initialize-V2024IdentityWithNewAccess  -IdentityId 2c91808568c529c60168cca6f90c1313 `
 -AccessRefs [{type=ENTITLEMENT, id=2c918087682f9a86016839c050861ab1}, {type=ENTITLEMENT, id=2c918087682f9a86016839c0509c1ab2}] `
 -SourceIdAndNativeIdToEntitlementIdsMappings null
```

- Convert the resource to JSON
```powershell
$IdentityWithNewAccess | ConvertTo-JSON
```


[[Back to top]](#) 

