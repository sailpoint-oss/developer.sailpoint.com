---
id: v2024-access-requested
title: AccessRequested
pagination_label: AccessRequested
sidebar_label: AccessRequested
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequested', 'V2024AccessRequested'] 
slug: /tools/sdk/powershell/v2024/models/access-requested
tags: ['SDK', 'Software Development Kit', 'AccessRequested', 'V2024AccessRequested']
---


# AccessRequested

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | **String** | the event type | [optional] 
**IdentityId** | **String** | the identity id | [optional] 
**DateTime** | **String** | the date of event | [optional] 
**Account** | [**AccessRequestedAccount**](access-requested-account) |  | [required]
**StatusChange** | [**AccessRequestedStatusChange**](access-requested-status-change) |  | [required]

## Examples

- Prepare the resource
```powershell
$AccessRequested = Initialize-V2024AccessRequested  -EventType AccountStatusChanged `
 -IdentityId 8a80828f643d484f01643e14202e206f `
 -DateTime 2019-03-08T22:37:33.901Z `
 -Account null `
 -StatusChange null
```

- Convert the resource to JSON
```powershell
$AccessRequested | ConvertTo-JSON
```


[[Back to top]](#) 

