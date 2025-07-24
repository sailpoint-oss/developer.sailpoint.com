---
id: v2025-account-status-changed
title: AccountStatusChanged
pagination_label: AccountStatusChanged
sidebar_label: AccountStatusChanged
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountStatusChanged', 'V2025AccountStatusChanged'] 
slug: /tools/sdk/powershell/v2025/models/account-status-changed
tags: ['SDK', 'Software Development Kit', 'AccountStatusChanged', 'V2025AccountStatusChanged']
---


# AccountStatusChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | **String** | the event type | [optional] 
**IdentityId** | **String** | the identity id | [optional] 
**DateTime** | **String** | the date of event | [optional] 
**Account** | [**AccountStatusChangedAccount**](account-status-changed-account) |  | [required]
**StatusChange** | [**AccountStatusChangedStatusChange**](account-status-changed-status-change) |  | [required]

## Examples

- Prepare the resource
```powershell
$AccountStatusChanged = Initialize-V2025AccountStatusChanged  -EventType AccountStatusChanged `
 -IdentityId 8a80828f643d484f01643e14202e206f `
 -DateTime 2019-03-08T22:37:33.901Z `
 -Account null `
 -StatusChange null
```

- Convert the resource to JSON
```powershell
$AccountStatusChanged | ConvertTo-JSON
```


[[Back to top]](#) 

