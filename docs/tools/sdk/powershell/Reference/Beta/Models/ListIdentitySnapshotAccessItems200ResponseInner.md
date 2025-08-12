---
id: beta-list-identity-snapshot-access-items200-response-inner
title: ListIdentitySnapshotAccessItems200ResponseInner
pagination_label: ListIdentitySnapshotAccessItems200ResponseInner
sidebar_label: ListIdentitySnapshotAccessItems200ResponseInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListIdentitySnapshotAccessItems200ResponseInner', 'BetaListIdentitySnapshotAccessItems200ResponseInner'] 
slug: /tools/sdk/powershell/beta/models/list-identity-snapshot-access-items200-response-inner
tags: ['SDK', 'Software Development Kit', 'ListIdentitySnapshotAccessItems200ResponseInner', 'BetaListIdentitySnapshotAccessItems200ResponseInner']
---


# ListIdentitySnapshotAccessItems200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the access item id | [optional] 
**AccessType** | **String** | the access item type. role in this case | [optional] 
**DisplayName** | **String** | the role display name | [optional] 
**SourceName** | **String** | the associated source name if it exists | [optional] 
**EntitlementCount** | **Int32** | the number of entitlements the account will create | [required]
**Description** | **String** | the description for the role | [optional] 
**SourceId** | **String** | the id of the source | [optional] 
**AppRefs** | [**[]AccessItemAccessProfileResponseAppRefsInner**](access-item-access-profile-response-app-refs-inner) | the list of app ids associated with the access profile | [required]
**RemoveDate** | **String** | the date the role is no longer assigned to the specified identity | [optional] 
**Standalone** | **Boolean** | indicates whether the entitlement is standalone | [required]
**Revocable** | **Boolean** | indicates whether the role is revocable | [required]
**NativeIdentity** | **String** | the native identifier used to uniquely identify an acccount | [required]
**AppRoleId** | **String** | the app role id | [required]
**Attribute** | **String** | the entitlement attribute | [required]
**Value** | **String** | the associated value | [required]
**Type** | **String** | the type of entitlement | [required]
**Privileged** | **Boolean** | indicates whether the entitlement is privileged | [required]
**CloudGoverned** | **Boolean** | indicates whether the entitlement is cloud governed | [required]

## Examples

- Prepare the resource
```powershell
$ListIdentitySnapshotAccessItems200ResponseInner = Initialize-BetaListIdentitySnapshotAccessItems200ResponseInner  -Id 2c918087763e69d901763e72e97f006f `
 -AccessType role `
 -DisplayName sample `
 -SourceName Source Name `
 -EntitlementCount 12 `
 -Description Role - Workday/Citizenship access `
 -SourceId 2793o32dwd `
 -AppRefs [{cloudAppId=8c190e6787aa4ed9a90bd9d5344523fb, cloudAppName=Sample App}, {cloudAppId=2c91808a77ff216301782327a50f09bf, cloudAppName=Another App}] `
 -RemoveDate 2024-07-01T06:00:00.00Z `
 -Standalone true `
 -Revocable true `
 -NativeIdentity dr.arden.ogahn.d `
 -AppRoleId 2c918087763e69d901763e72e97f006f `
 -Attribute groups `
 -Value Upward mobility access `
 -Type ENTITLEMENT `
 -Privileged false `
 -CloudGoverned true
```

- Convert the resource to JSON
```powershell
$ListIdentitySnapshotAccessItems200ResponseInner | ConvertTo-JSON
```


[[Back to top]](#) 

