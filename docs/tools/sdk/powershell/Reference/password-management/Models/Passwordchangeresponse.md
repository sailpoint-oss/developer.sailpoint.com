---
id: passwordchangeresponse
title: Passwordchangeresponse
pagination_label: Passwordchangeresponse
sidebar_label: Passwordchangeresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Passwordchangeresponse', 'Passwordchangeresponse'] 
slug: /tools/sdk/powershell/passwordmanagement/models/passwordchangeresponse
tags: ['SDK', 'Software Development Kit', 'Passwordchangeresponse', 'Passwordchangeresponse']
---


# Passwordchangeresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **String** | The password change request ID | [optional] 
**State** |  **Enum** [  "IN_PROGRESS",    "FINISHED",    "FAILED" ] | Password change state | [optional] 

## Examples

- Prepare the resource
```powershell
$Passwordchangeresponse = Initialize-Passwordchangeresponse  -RequestId 089899f13a8f4da7824996191587bab9 `
 -State IN_PROGRESS
```

- Convert the resource to JSON
```powershell
$Passwordchangeresponse | ConvertTo-JSON
```


[[Back to top]](#) 

