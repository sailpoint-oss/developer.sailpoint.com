---
id: bulk-cancel-access-request
title: BulkCancelAccessRequest
pagination_label: BulkCancelAccessRequest
sidebar_label: BulkCancelAccessRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BulkCancelAccessRequest'] 
slug: /tools/sdk/powershell/v2024/models/bulk-cancel-access-request
tags: ['SDK', 'Software Development Kit', 'BulkCancelAccessRequest']
---


# BulkCancelAccessRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestIds** |  **[]String** | List of access requests ids to cancel the pending requests | [required]
**Comment** |  **String** | Reason for cancelling the pending access request. | [required]

## Examples

- Prepare the resource
```powershell
$BulkCancelAccessRequest = Initialize-PSSailpoint.V2024BulkCancelAccessRequest  -AccessRequestIds [2c9180835d2e5168015d32f890ca1581, 2c9180835d2e5168015d32f890ca1582] `
 -Comment I requested this role by mistake.
```

- Convert the resource to JSON
```powershell
$BulkCancelAccessRequest | ConvertTo-JSON
```


[[Back to top]](#) 

