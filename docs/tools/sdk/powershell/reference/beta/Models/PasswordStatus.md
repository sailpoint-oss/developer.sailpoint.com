---
id: beta-password-status
title: PasswordStatus
pagination_label: PasswordStatus
sidebar_label: PasswordStatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PasswordStatus'] 
slug: /tools/sdk/powershell/beta/models/password-status
tags: ['SDK', 'Software Development Kit', 'PasswordStatus']
---


# PasswordStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** |  Pointer to **String** | The password change request ID | [optional] 
**State** |  Pointer to  **Enum** [  "IN_PROGRESS",    "FINISHED",    "FAILED" ] | Password change state | [optional] 
**Errors** |  Pointer to **[]String** | The errors during the password change request | [optional] 
**SourceIds** |  Pointer to **[]String** | List of source IDs in the password change request | [optional] 

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

