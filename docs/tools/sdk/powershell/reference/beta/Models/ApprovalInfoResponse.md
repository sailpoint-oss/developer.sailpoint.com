---
id: beta-approval-info-response
title: ApprovalInfoResponse
pagination_label: ApprovalInfoResponse
sidebar_label: ApprovalInfoResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalInfoResponse'] 
slug: /tools/sdk/powershell/beta/models/approval-info-response
tags: ['SDK', 'Software Development Kit', 'ApprovalInfoResponse']
---


# ApprovalInfoResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | the id of approver | [optional] 
**Name** |  Pointer to **String** | the name of approver | [optional] 
**Status** |  Pointer to **String** | the status of the approval request | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalInfoResponse = Initialize-PSSailpoint.BetaApprovalInfoResponse  -Id 8a80828f643d484f01643e14202e2000 `
 -Name John Snow `
 -Status Approved
```

- Convert the resource to JSON
```powershell
$ApprovalInfoResponse | ConvertTo-JSON
```


[[Back to top]](#) 

