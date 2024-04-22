---
id: password-status
title: PasswordStatus
pagination_label: PasswordStatus
sidebar_label: PasswordStatus
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'PasswordStatus'] 
slug: /tools/sdk/powershell/v3/models/password-status
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
$PasswordStatus = Initialize-PasswordStatus  -RequestId 089899f13a8f4da7824996191587bab9 `
 -State IN_PROGRESS `
 -Errors [The password change payload is invalid] `
 -SourceIds [2c918083746f642c01746f990884012a]
```

- Convert the resource to JSON
```powershell
$PasswordStatus | ConvertTo-JSON
```


[[Back to top]](#) 

