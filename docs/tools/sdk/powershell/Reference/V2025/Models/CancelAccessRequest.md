---
id: v2025-cancel-access-request
title: CancelAccessRequest
pagination_label: CancelAccessRequest
sidebar_label: CancelAccessRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CancelAccessRequest', 'V2025CancelAccessRequest'] 
slug: /tools/sdk/powershell/v2025/models/cancel-access-request
tags: ['SDK', 'Software Development Kit', 'CancelAccessRequest', 'V2025CancelAccessRequest']
---


# CancelAccessRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountActivityId** | **String** | This refers to the identityRequestId. To successfully cancel an access request, you must provide the identityRequestId. | [required]
**Comment** | **String** | Reason for cancelling the pending access request. | [required]

## Examples

- Prepare the resource
```powershell
$CancelAccessRequest = Initialize-V2025CancelAccessRequest  -AccountActivityId 2c9180835d2e5168015d32f890ca1581 `
 -Comment I requested this role by mistake.
```

- Convert the resource to JSON
```powershell
$CancelAccessRequest | ConvertTo-JSON
```


[[Back to top]](#) 

