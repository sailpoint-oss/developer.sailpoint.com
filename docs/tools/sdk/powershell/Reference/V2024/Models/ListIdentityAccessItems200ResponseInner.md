---
id: v2024-list-identity-access-items200-response-inner
title: ListIdentityAccessItems200ResponseInner
pagination_label: ListIdentityAccessItems200ResponseInner
sidebar_label: ListIdentityAccessItems200ResponseInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListIdentityAccessItems200ResponseInner', 'V2024ListIdentityAccessItems200ResponseInner'] 
slug: /tools/sdk/powershell/v2024/models/list-identity-access-items200-response-inner
tags: ['SDK', 'Software Development Kit', 'ListIdentityAccessItems200ResponseInner', 'V2024ListIdentityAccessItems200ResponseInner']
---


# ListIdentityAccessItems200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the access item id | [optional] 
**AccessType** | **String** | the access item type. entitlement in this case | [optional] 
**DisplayName** | **String** | the access item display name | [optional] 
**SourceName** | **String** | the associated source name if it exists | [optional] 
**Attribute** | **String** | the entitlement attribute | [required]
**Value** | **String** | the associated value | [required]
**Type** | **String** | the type of entitlement | [required]
**Description** | **String** | the description for the role | [optional] 
**SourceId** | **String** | the id of the source | [optional] 
**Standalone** | **Boolean** | indicates whether the access profile is standalone | [required]
**Privileged** | **Boolean** | indicates whether the entitlement is privileged | [required]
**CloudGoverned** | **Boolean** | indicates whether the entitlement is cloud governed | [required]
**EntitlementCount** | **Int32** | the number of entitlements the account will create | [required]
**AppRefs** | [**[]AccessItemAccessProfileResponseAppRefsInner**](access-item-access-profile-response-app-refs-inner) | the list of app ids associated with the access profile | [required]
**RemoveDate** | **String** | the date the role is no longer assigned to the specified identity | [optional] 
**Revocable** | **Boolean** | indicates whether the role is revocable | [required]
**NativeIdentity** | **String** | the native identifier used to uniquely identify an acccount | [required]
**AppRoleId** | **String** | the app role id | [required]

## Examples

- Prepare the resource
```powershell
$ListIdentityAccessItems200ResponseInner = Initialize-V2024ListIdentityAccessItems200ResponseInner  -Id 2c918087763e69d901763e72e97f006f `
 -AccessType app `
 -DisplayName Display Name `
 -SourceName appName `
 -Attribute groups `
 -Value Upward mobility access `
 -Type ENTITLEMENT `
 -Description Role - Workday/Citizenship access `
 -SourceId 2793o32dwd `
 -Standalone false `
 -Privileged false `
 -CloudGoverned true `
 -EntitlementCount 12 `
 -AppRefs [{cloudAppId=8c190e6787aa4ed9a90bd9d5344523fb, cloudAppName=Sample App}, {cloudAppId=2c91808a77ff216301782327a50f09bf, cloudAppName=Another App}] `
 -RemoveDate 2024-07-01T06:00:00.00Z `
 -Revocable true `
 -NativeIdentity dr.arden.ogahn.d `
 -AppRoleId 2c918087763e69d901763e72e97f006f
```

- Convert the resource to JSON
```powershell
$ListIdentityAccessItems200ResponseInner | ConvertTo-JSON
```


[[Back to top]](#) 

