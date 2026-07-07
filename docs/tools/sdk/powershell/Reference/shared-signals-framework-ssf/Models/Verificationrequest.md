---
id: verificationrequest
title: Verificationrequest
pagination_label: Verificationrequest
sidebar_label: Verificationrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Verificationrequest', 'Verificationrequest'] 
slug: /tools/sdk/powershell/sharedsignalsframeworkssf/models/verificationrequest
tags: ['SDK', 'Software Development Kit', 'Verificationrequest', 'Verificationrequest']
---


# Verificationrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StreamId** | **String** | Stream ID for verification. | [required]
**State** | **String** | Optional state value for verification challenge. | [optional] 

## Examples

- Prepare the resource
```powershell
$Verificationrequest = Initialize-Verificationrequest  -StreamId 550e8400-e29b-41d4-a716-446655440000 `
 -State verification-challenge-state-123
```

- Convert the resource to JSON
```powershell
$Verificationrequest | ConvertTo-JSON
```


[[Back to top]](#) 

