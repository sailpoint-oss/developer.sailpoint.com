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
**AccessType** |  Pointer to **String** | the access item type. accessProfile in this case | [optional] 
**Id** |  Pointer to **String** | the access item id | [optional] 
**Name** |  Pointer to **String** | the access profile name | [optional] 
**SourceName** |  Pointer to **String** | the name of the source | [optional] 
**SourceId** |  Pointer to **String** | the id of the source | [optional] 
**Description** |  Pointer to **String** | the description for the access profile | [optional] 
**DisplayName** |  Pointer to **String** | the display name of the identity | [optional] 
**EntitlementCount** |  Pointer to **String** | the number of entitlements the access profile will create | [optional] 
**AppDisplayName** |  Pointer to **String** | the name of | [optional] 
**RemoveDate** |  Pointer to **String** | the date the access profile is no longer assigned to the specified identity | [optional] 
**Standalone** |  **Boolean** | indicates whether the access profile is standalone | [required]
**Revocable** |  **Boolean** | indicates whether the access profile is | [required]

## Examples

- Prepare the resource
```powershell
$AccessItemAccessProfileResponse = Initialize-PSSailpoint.BetaAccessItemAccessProfileResponse  -AccessType accessProfile `
 -Id 2c918087763e69d901763e72e97f006f `
 -Name sample `
 -SourceName DataScienceDataset `
 -SourceId 2793o32dwd `
 -Description AccessProfile - Workday/Citizenship access `
 -DisplayName Dr. Arden Rogahn MD `
 -EntitlementCount 12 `
 -AppDisplayName AppName `
 -RemoveDate 2024-07-01T06:00:00.00Z `
 -Standalone false `
 -Revocable true
```

- Convert the resource to JSON
```powershell
$AccessItemAccessProfileResponse | ConvertTo-JSON
```


[[Back to top]](#) 

