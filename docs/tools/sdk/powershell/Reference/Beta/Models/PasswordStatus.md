---
id: beta-password-status
title: PasswordStatus
pagination_label: PasswordStatus
sidebar_label: PasswordStatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PasswordStatus', 'BetaPasswordStatus'] 
slug: /tools/sdk/powershell/beta/models/password-status
tags: ['SDK', 'Software Development Kit', 'PasswordStatus', 'BetaPasswordStatus']
---


# PasswordStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **String** | The password change request ID | [optional] 
**State** |  **Enum** [  "IN_PROGRESS",    "FINISHED",    "FAILED" ] | Password change state | [optional] 
**Errors** | **[]String** | The errors during the password change request | [optional] 
**SourceIds** | **[]String** | List of source IDs in the password change request | [optional] 

## Examples

- Prepare the resource
```powershell
$PasswordStatus = Initialize-PSSailpoint.BetaPasswordStatus  -RequestId 089899f13a8f4da7824996191587bab9 `
 -State null `
 -Errors null `
 -SourceIds null
```

- Convert the resource to JSON
```powershell
$PasswordStatus | ConvertTo-JSON
```


[[Back to top]](#) 

