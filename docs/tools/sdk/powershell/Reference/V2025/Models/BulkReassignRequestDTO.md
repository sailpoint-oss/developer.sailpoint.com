---
id: v2025-bulk-reassign-request-dto
title: BulkReassignRequestDTO
pagination_label: BulkReassignRequestDTO
sidebar_label: BulkReassignRequestDTO
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BulkReassignRequestDTO', 'V2025BulkReassignRequestDTO'] 
slug: /tools/sdk/powershell/v2025/models/bulk-reassign-request-dto
tags: ['SDK', 'Software Development Kit', 'BulkReassignRequestDTO', 'V2025BulkReassignRequestDTO']
---


# BulkReassignRequestDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalIds** | **[]String** | Array of Approval IDs to be bulk reassigned | [optional] 
**Comment** | **String** | Optional comment to include with the bulk reassignment request | [optional] 
**ReassignFrom** | **String** | Identity ID from which the approval requests are being reassigned | [optional] 
**ReassignTo** | **String** | ReassignTo signifies the Identity ID that the approval request is being reassigned to | [optional] 

## Examples

- Prepare the resource
```powershell
$BulkReassignRequestDTO = Initialize-V2025BulkReassignRequestDTO  -ApprovalIds [38453251-6be2-5f8f-df93-5ce19e295837, 38453251-6be2-5f8f-df93-5ce19e295838] `
 -Comment Bulk reassignment by admin `
 -ReassignFrom 12353251-6be2-5f8f-df93-5ce19b6e5837 `
 -ReassignTo 32454251-6ce2-5d8f-df93-5ce19e295238
```

- Convert the resource to JSON
```powershell
$BulkReassignRequestDTO | ConvertTo-JSON
```


[[Back to top]](#) 

