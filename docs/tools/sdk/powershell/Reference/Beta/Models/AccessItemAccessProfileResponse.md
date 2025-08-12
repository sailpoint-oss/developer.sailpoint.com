---
id: beta-access-item-access-profile-response
title: AccessItemAccessProfileResponse
pagination_label: AccessItemAccessProfileResponse
sidebar_label: AccessItemAccessProfileResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemAccessProfileResponse', 'BetaAccessItemAccessProfileResponse'] 
slug: /tools/sdk/powershell/beta/models/access-item-access-profile-response
tags: ['SDK', 'Software Development Kit', 'AccessItemAccessProfileResponse', 'BetaAccessItemAccessProfileResponse']
---


# AccessItemAccessProfileResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the access item id | [optional] 
**AccessType** | **String** | the access item type. accessProfile in this case | [optional] 
**DisplayName** | **String** | the display name of the identity | [optional] 
**SourceName** | **String** | the name of the source | [optional] 
**EntitlementCount** | **Int32** | the number of entitlements the access profile will create | [required]
**Description** | **String** | the description for the access profile | [optional] 
**SourceId** | **String** | the id of the source | [optional] 
**AppRefs** | [**[]AccessItemAccessProfileResponseAppRefsInner**](access-item-access-profile-response-app-refs-inner) | the list of app ids associated with the access profile | [required]
**RemoveDate** | **String** | the date the access profile is no longer assigned to the specified identity | [optional] 
**Standalone** | **Boolean** | indicates whether the access profile is standalone | [required]
**Revocable** | **Boolean** | indicates whether the access profile is revocable | [required]

## Examples

- Prepare the resource
```powershell
$AccessItemAccessProfileResponse = Initialize-BetaAccessItemAccessProfileResponse  -Id 2c918087763e69d901763e72e97f006f `
 -AccessType accessProfile `
 -DisplayName Dr. Arden Rogahn MD `
 -SourceName DataScienceDataset `
 -EntitlementCount 12 `
 -Description AccessProfile - Workday/Citizenship access `
 -SourceId 2793o32dwd `
 -AppRefs [{cloudAppId=8c190e6787aa4ed9a90bd9d5344523fb, cloudAppName=Sample App}, {cloudAppId=2c91808a77ff216301782327a50f09bf, cloudAppName=Another App}] `
 -RemoveDate 2024-07-01T06:00:00.00Z `
 -Standalone false `
 -Revocable true
```

- Convert the resource to JSON
```powershell
$AccessItemAccessProfileResponse | ConvertTo-JSON
```


[[Back to top]](#) 

