---
id: beta-access-item-account-response
title: AccessItemAccountResponse
pagination_label: AccessItemAccountResponse
sidebar_label: AccessItemAccountResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemAccountResponse', 'BetaAccessItemAccountResponse'] 
slug: /tools/sdk/powershell/beta/models/access-item-account-response
tags: ['SDK', 'Software Development Kit', 'AccessItemAccountResponse', 'BetaAccessItemAccountResponse']
---


# AccessItemAccountResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessType** | **String** | the access item type. account in this case | [optional] 
**Id** | **String** | the access item id | [optional] 
**NativeIdentity** | **String** | the native identifier used to uniquely identify an acccount | [optional] 
**SourceName** | **String** | the name of the source | [optional] 
**SourceId** | **String** | the id of the source | [optional] 
**EntitlementCount** | **String** | the number of entitlements the account will create | [optional] 
**DisplayName** | **String** | the display name of the identity | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemAccountResponse = Initialize-BetaAccessItemAccountResponse  -AccessType account `
 -Id 2c918087763e69d901763e72e97f006f `
 -NativeIdentity dr.arden.ogahn.d `
 -SourceName DataScienceDataset `
 -SourceId 2793o32dwd `
 -EntitlementCount 12 `
 -DisplayName Dr. Arden Rogahn MD
```

- Convert the resource to JSON
```powershell
$AccessItemAccountResponse | ConvertTo-JSON
```


[[Back to top]](#) 

