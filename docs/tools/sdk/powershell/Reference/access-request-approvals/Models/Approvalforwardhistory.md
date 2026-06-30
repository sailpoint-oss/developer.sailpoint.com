---
id: approvalforwardhistory
title: Approvalforwardhistory
pagination_label: Approvalforwardhistory
sidebar_label: Approvalforwardhistory
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approvalforwardhistory', 'Approvalforwardhistory'] 
slug: /tools/sdk/powershell/accessrequestapprovals/models/approvalforwardhistory
tags: ['SDK', 'Software Development Kit', 'Approvalforwardhistory', 'Approvalforwardhistory']
---


# Approvalforwardhistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OldApproverName** | **String** | Display name of approver from whom the approval was forwarded. | [optional] 
**NewApproverName** | **String** | Display name of approver to whom the approval was forwarded. | [optional] 
**Comment** | **String** | Comment made while forwarding. | [optional] 
**Modified** | **System.DateTime** | Time at which approval was forwarded. | [optional] 
**ForwarderName** | **String** | Display name of forwarder who forwarded the approval. | [optional] 
**ReassignmentType** | [**Reassignmenttype**](reassignmenttype) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Approvalforwardhistory = Initialize-Approvalforwardhistory  -OldApproverName Frank Mir `
 -NewApproverName Al Volta `
 -Comment Forwarding from Frank to Al `
 -Modified 2019-08-23T18:52:57.398Z `
 -ForwarderName William Wilson `
 -ReassignmentType null
```

- Convert the resource to JSON
```powershell
$Approvalforwardhistory | ConvertTo-JSON
```


[[Back to top]](#) 

