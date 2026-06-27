---
id: passwordstatus
title: Passwordstatus
pagination_label: Passwordstatus
sidebar_label: Passwordstatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Passwordstatus', 'Passwordstatus'] 
slug: /tools/sdk/powershell/passwordmanagement/models/passwordstatus
tags: ['SDK', 'Software Development Kit', 'Passwordstatus', 'Passwordstatus']
---


# Passwordstatus

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
$Passwordstatus = Initialize-Passwordstatus  -RequestId 089899f13a8f4da7824996191587bab9 `
 -State IN_PROGRESS `
 -Errors ["The password change payload is invalid"] `
 -SourceIds ["2c918083746f642c01746f990884012a"]
```

- Convert the resource to JSON
```powershell
$Passwordstatus | ConvertTo-JSON
```


[[Back to top]](#) 

