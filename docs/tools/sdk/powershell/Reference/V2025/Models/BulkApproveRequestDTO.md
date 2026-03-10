---
id: v2025-bulk-approve-request-dto
title: BulkApproveRequestDTO
pagination_label: BulkApproveRequestDTO
sidebar_label: BulkApproveRequestDTO
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BulkApproveRequestDTO', 'V2025BulkApproveRequestDTO'] 
slug: /tools/sdk/powershell/v2025/models/bulk-approve-request-dto
tags: ['SDK', 'Software Development Kit', 'BulkApproveRequestDTO', 'V2025BulkApproveRequestDTO']
---


# BulkApproveRequestDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalIds** | **[]String** | Array of Approval IDs to be bulk approved | [optional] 
**Comment** | **String** | Optional comment to include with the bulk approval request | [optional] 
**AdditionalAttributes** | [**map[string]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Additional attributes to include with the bulk approval request | [optional] 

## Examples

- Prepare the resource
```powershell
$BulkApproveRequestDTO = Initialize-V2025BulkApproveRequestDTO  -ApprovalIds [38453251-6be2-5f8f-df93-5ce19e295837, 38453251-6be2-5f8f-df93-5ce19e295838] `
 -Comment Bulk approved by admin for monthly review `
 -AdditionalAttributes {source=automation, urgency=high}
```

- Convert the resource to JSON
```powershell
$BulkApproveRequestDTO | ConvertTo-JSON
```


[[Back to top]](#) 

