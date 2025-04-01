---
id: v2025-password-status
title: PasswordStatus
pagination_label: PasswordStatus
sidebar_label: PasswordStatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PasswordStatus', 'V2025PasswordStatus'] 
slug: /tools/sdk/powershell/v2025/models/password-status
tags: ['SDK', 'Software Development Kit', 'PasswordStatus', 'V2025PasswordStatus']
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
$PasswordStatus = Initialize-PSSailpoint.V2025PasswordStatus  -RequestId 089899f13a8f4da7824996191587bab9 `
 -State IN_PROGRESS `
 -Errors [The password change payload is invalid] `
 -SourceIds [2c918083746f642c01746f990884012a]
```

- Convert the resource to JSON
```powershell
$PasswordStatus | ConvertTo-JSON
```


[[Back to top]](#) 

