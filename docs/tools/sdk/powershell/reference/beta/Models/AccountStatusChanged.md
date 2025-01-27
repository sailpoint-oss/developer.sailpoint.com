---
id: beta-account-status-changed
title: AccountStatusChanged
pagination_label: AccountStatusChanged
sidebar_label: AccountStatusChanged
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountStatusChanged'] 
slug: /tools/sdk/powershell/beta/models/account-status-changed
tags: ['SDK', 'Software Development Kit', 'AccountStatusChanged']
---


# AccountStatusChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** |  Pointer to **String** | the event type | [optional] 
**IdentityId** |  Pointer to **String** | the identity id | [optional] 
**Dt** |  Pointer to **String** | the date of event | [optional] 
**Account** |  Pointer to [**AccountStatusChangedAccount**](account-status-changed-account) |  | [optional] 
**StatusChange** |  Pointer to [**AccountStatusChangedStatusChange**](account-status-changed-status-change) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountStatusChanged = Initialize-PSSailpoint.BetaAccountStatusChanged  -EventType null `
 -IdentityId null `
 -Dt null `
 -Account null `
 -StatusChange null
```

- Convert the resource to JSON
```powershell
$AccountStatusChanged | ConvertTo-JSON
```


[[Back to top]](#) 

