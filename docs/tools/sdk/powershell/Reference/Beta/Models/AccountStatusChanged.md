---
id: beta-account-status-changed
title: AccountStatusChanged
pagination_label: AccountStatusChanged
sidebar_label: AccountStatusChanged
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountStatusChanged', 'BetaAccountStatusChanged'] 
slug: /tools/sdk/powershell/beta/models/account-status-changed
tags: ['SDK', 'Software Development Kit', 'AccountStatusChanged', 'BetaAccountStatusChanged']
---


# AccountStatusChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | **String** | the event type | [optional] 
**IdentityId** | **String** | the identity id | [optional] 
**Dt** | **String** | the date of event | [optional] 
**Account** | [**AccountStatusChangedAccount**](account-status-changed-account) |  | [optional] 
**StatusChange** | [**AccountStatusChangedStatusChange**](account-status-changed-status-change) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountStatusChanged = Initialize-BetaAccountStatusChanged  -EventType null `
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

