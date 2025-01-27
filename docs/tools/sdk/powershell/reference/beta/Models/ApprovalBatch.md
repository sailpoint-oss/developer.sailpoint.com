---
id: beta-approval-batch
title: ApprovalBatch
pagination_label: ApprovalBatch
sidebar_label: ApprovalBatch
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalBatch'] 
slug: /tools/sdk/powershell/beta/models/approval-batch
tags: ['SDK', 'Software Development Kit', 'ApprovalBatch']
---


# ApprovalBatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchId** |  Pointer to **String** | ID of the batch | [optional] 
**BatchSize** |  Pointer to **Int64** | How many approvals are going to be in this batch. Defaults to 1 if not provided. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalBatch = Initialize-PSSailpoint.BetaApprovalBatch  -BatchId 38453251-6be2-5f8f-df93-5ce19e295837 `
 -BatchSize 100
```

- Convert the resource to JSON
```powershell
$ApprovalBatch | ConvertTo-JSON
```


[[Back to top]](#) 

