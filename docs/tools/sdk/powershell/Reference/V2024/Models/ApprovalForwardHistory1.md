---
id: v2024-approval-forward-history1
title: ApprovalForwardHistory1
pagination_label: ApprovalForwardHistory1
sidebar_label: ApprovalForwardHistory1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalForwardHistory1', 'V2024ApprovalForwardHistory1'] 
slug: /tools/sdk/powershell/v2024/models/approval-forward-history1
tags: ['SDK', 'Software Development Kit', 'ApprovalForwardHistory1', 'V2024ApprovalForwardHistory1']
---


# ApprovalForwardHistory1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OldApproverName** | **String** | Display name of approver from whom the approval was forwarded. | [optional] 
**NewApproverName** | **String** | Display name of approver to whom the approval was forwarded. | [optional] 
**Comment** | **String** | Comment made while forwarding. | [optional] 
**Modified** | **System.DateTime** | Time at which approval was forwarded. | [optional] 
**ForwarderName** | **String** | Display name of forwarder who forwarded the approval. | [optional] 
**ReassignmentType** | [**ReassignmentType**](reassignment-type) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalForwardHistory1 = Initialize-PSSailpoint.V2024ApprovalForwardHistory1  -OldApproverName Frank Mir `
 -NewApproverName Al Volta `
 -Comment Forwarding from Frank to Al `
 -Modified 2019-08-23T18:52:57.398Z `
 -ForwarderName William Wilson `
 -ReassignmentType null
```

- Convert the resource to JSON
```powershell
$ApprovalForwardHistory1 | ConvertTo-JSON
```


[[Back to top]](#) 

