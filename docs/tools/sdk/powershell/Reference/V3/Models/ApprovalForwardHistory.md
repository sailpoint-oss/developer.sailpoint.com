---
id: approval-forward-history
title: ApprovalForwardHistory
pagination_label: ApprovalForwardHistory
sidebar_label: ApprovalForwardHistory
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalForwardHistory', 'ApprovalForwardHistory'] 
slug: /tools/sdk/powershell/v3/models/approval-forward-history
tags: ['SDK', 'Software Development Kit', 'ApprovalForwardHistory', 'ApprovalForwardHistory']
---


# ApprovalForwardHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OldApproverName** |  Pointer to **String** | Display name of approver from whom the approval was forwarded. | [optional] 
**NewApproverName** |  Pointer to **String** | Display name of approver to whom the approval was forwarded. | [optional] 
**Comment** |  Pointer to **String** | Comment made while forwarding. | [optional] 
**Modified** |  Pointer to **System.DateTime** | Time at which approval was forwarded. | [optional] 
**ForwarderName** |  Pointer to **String** | Display name of forwarder who forwarded the approval. | [optional] 
**ReassignmentType** |  Pointer to [**ReassignmentType**](reassignment-type) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalForwardHistory = Initialize-PSSailpoint.V3ApprovalForwardHistory  -OldApproverName Frank Mir `
 -NewApproverName Al Volta `
 -Comment Forwarding from Frank to Al `
 -Modified 2019-08-23T18:52:57.398Z `
 -ForwarderName William Wilson `
 -ReassignmentType null
```

- Convert the resource to JSON
```powershell
$ApprovalForwardHistory | ConvertTo-JSON
```


[[Back to top]](#) 

