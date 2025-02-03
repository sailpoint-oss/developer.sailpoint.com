---
id: v2024-bulk-approve-access-request
title: BulkApproveAccessRequest
pagination_label: BulkApproveAccessRequest
sidebar_label: BulkApproveAccessRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BulkApproveAccessRequest', 'V2024BulkApproveAccessRequest'] 
slug: /tools/sdk/powershell/v2024/models/bulk-approve-access-request
tags: ['SDK', 'Software Development Kit', 'BulkApproveAccessRequest', 'V2024BulkApproveAccessRequest']
---


# BulkApproveAccessRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalIds** | **[]String** | List of approval ids to approve the pending requests | [required]
**Comment** | **String** | Reason for approving the pending access request. | [required]

## Examples

- Prepare the resource
```powershell
$BulkApproveAccessRequest = Initialize-PSSailpoint.V2024BulkApproveAccessRequest  -ApprovalIds [2c9180835d2e5168015d32f890ca1581, 2c9180835d2e5168015d32f890ca1582] `
 -Comment I approve these request items
```

- Convert the resource to JSON
```powershell
$BulkApproveAccessRequest | ConvertTo-JSON
```


[[Back to top]](#) 

