---
id: v2025-access-item-account-response
title: AccessItemAccountResponse
pagination_label: AccessItemAccountResponse
sidebar_label: AccessItemAccountResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemAccountResponse', 'V2025AccessItemAccountResponse'] 
slug: /tools/sdk/powershell/v2025/models/access-item-account-response
tags: ['SDK', 'Software Development Kit', 'AccessItemAccountResponse', 'V2025AccessItemAccountResponse']
---


# AccessItemAccountResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the access item id | [optional] 
**AccessType** | **String** | the access item type. account in this case | [optional] 
**DisplayName** | **String** | the display name of the identity | [optional] 
**SourceName** | **String** | the name of the source | [optional] 
**NativeIdentity** | **String** | the native identifier used to uniquely identify an acccount | [required]
**SourceId** | **String** | the id of the source | [optional] 
**EntitlementCount** | **Int32** | the number of entitlements the account will create | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemAccountResponse = Initialize-V2025AccessItemAccountResponse  -Id 2c918087763e69d901763e72e97f006f `
 -AccessType account `
 -DisplayName Dr. Arden Rogahn MD `
 -SourceName DataScienceDataset `
 -NativeIdentity dr.arden.ogahn.d `
 -SourceId 2793o32dwd `
 -EntitlementCount 12
```

- Convert the resource to JSON
```powershell
$AccessItemAccountResponse | ConvertTo-JSON
```


[[Back to top]](#) 

