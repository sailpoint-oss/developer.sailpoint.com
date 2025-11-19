---
id: v2024-approval-batch
title: ApprovalBatch
pagination_label: ApprovalBatch
sidebar_label: ApprovalBatch
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalBatch', 'V2024ApprovalBatch'] 
slug: /tools/sdk/powershell/v2024/models/approval-batch
tags: ['SDK', 'Software Development Kit', 'ApprovalBatch', 'V2024ApprovalBatch']
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
$ApprovalBatch = Initialize-V2024ApprovalBatch  -BatchId 38453251-6be2-5f8f-df93-5ce19e295837 `
 -BatchSize 100
```

- Convert the resource to JSON
```powershell
$ApprovalBatch | ConvertTo-JSON
```


[[Back to top]](#) 

