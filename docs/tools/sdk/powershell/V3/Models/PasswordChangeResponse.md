---
id: password-change-response
title: PasswordChangeResponse
pagination_label: PasswordChangeResponse
sidebar_label: PasswordChangeResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'PasswordChangeResponse'] 
slug: /tools/sdk/powershell/v3/models/password-change-response
tags: ['SDK', 'Software Development Kit', 'PasswordChangeResponse']
---


# PasswordChangeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** |  Pointer to **String** | The password change request ID | [optional] 
**State** |  Pointer to  **Enum** [  "IN_PROGRESS",    "FINISHED",    "FAILED" ] | Password change state | [optional] 

## Examples

- Prepare the resource
```powershell
$PasswordChangeResponse = Initialize-PSSailpointPasswordChangeResponse  -RequestId 089899f13a8f4da7824996191587bab9 `
 -State IN_PROGRESS
```

- Convert the resource to JSON
```powershell
$PasswordChangeResponse | ConvertTo-JSON
```


[[Back to top]](#) 

