---
id: v2024-approval-info-response
title: ApprovalInfoResponse
pagination_label: ApprovalInfoResponse
sidebar_label: ApprovalInfoResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalInfoResponse', 'V2024ApprovalInfoResponse'] 
slug: /tools/sdk/powershell/v2024/models/approval-info-response
tags: ['SDK', 'Software Development Kit', 'ApprovalInfoResponse', 'V2024ApprovalInfoResponse']
---


# ApprovalInfoResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the id of approver | [optional] 
**Name** | **String** | the name of approver | [optional] 
**Status** | **String** | the status of the approval request | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalInfoResponse = Initialize-V2024ApprovalInfoResponse  -Id 8a80828f643d484f01643e14202e2000 `
 -Name John Snow `
 -Status Approved
```

- Convert the resource to JSON
```powershell
$ApprovalInfoResponse | ConvertTo-JSON
```


[[Back to top]](#) 

