---
id: cancel-access-request
title: CancelAccessRequest
pagination_label: CancelAccessRequest
sidebar_label: CancelAccessRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CancelAccessRequest'] 
slug: /tools/sdk/powershell/v3/models/cancel-access-request
tags: ['SDK', 'Software Development Kit', 'CancelAccessRequest']
---


# CancelAccessRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountActivityId** |  **String** | This refers to the identityRequestId. To successfully cancel an access request, you must provide the identityRequestId. | 
**Comment** |  **String** | Reason for cancelling the pending access request. | 

## Examples

- Prepare the resource
```powershell
$CancelAccessRequest = Initialize-PSSailpointCancelAccessRequest  -AccountActivityId 2c9180835d2e5168015d32f890ca1581 `
 -Comment I requested this role by mistake.
```

- Convert the resource to JSON
```powershell
$CancelAccessRequest | ConvertTo-JSON
```


[[Back to top]](#) 

