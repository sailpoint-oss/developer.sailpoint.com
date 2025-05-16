---
id: v2025-approval-batch
title: ApprovalBatch
pagination_label: ApprovalBatch
sidebar_label: ApprovalBatch
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalBatch', 'V2025ApprovalBatch'] 
slug: /tools/sdk/powershell/v2025/models/approval-batch
tags: ['SDK', 'Software Development Kit', 'ApprovalBatch', 'V2025ApprovalBatch']
---


# ApprovalBatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchId** | **String** | ID of the batch | [optional] 
**BatchSize** | **Int64** | How many approvals are going to be in this batch. Defaults to 1 if not provided. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalBatch = Initialize-V2025ApprovalBatch  -BatchId 38453251-6be2-5f8f-df93-5ce19e295837 `
 -BatchSize 100
```

- Convert the resource to JSON
```powershell
$ApprovalBatch | ConvertTo-JSON
```


[[Back to top]](#) 

