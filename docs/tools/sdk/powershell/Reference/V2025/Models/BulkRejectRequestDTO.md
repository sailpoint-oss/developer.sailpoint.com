---
id: v2025-bulk-reject-request-dto
title: BulkRejectRequestDTO
pagination_label: BulkRejectRequestDTO
sidebar_label: BulkRejectRequestDTO
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BulkRejectRequestDTO', 'V2025BulkRejectRequestDTO'] 
slug: /tools/sdk/powershell/v2025/models/bulk-reject-request-dto
tags: ['SDK', 'Software Development Kit', 'BulkRejectRequestDTO', 'V2025BulkRejectRequestDTO']
---


# BulkRejectRequestDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalIds** | **[]String** | Array of Approval IDs to be bulk rejected | [optional] 
**Comment** | **String** | Optional comment to include with the bulk reject request | [optional] 

## Examples

- Prepare the resource
```powershell
$BulkRejectRequestDTO = Initialize-V2025BulkRejectRequestDTO  -ApprovalIds [38453251-6be2-5f8f-df93-5ce19e295837, 38453251-6be2-5f8f-df93-5ce19e295838] `
 -Comment Bulk reject by admin
```

- Convert the resource to JSON
```powershell
$BulkRejectRequestDTO | ConvertTo-JSON
```


[[Back to top]](#) 

