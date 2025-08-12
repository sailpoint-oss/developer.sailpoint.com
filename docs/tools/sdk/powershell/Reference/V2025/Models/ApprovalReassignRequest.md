---
id: v2025-approval-reassign-request
title: ApprovalReassignRequest
pagination_label: ApprovalReassignRequest
sidebar_label: ApprovalReassignRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalReassignRequest', 'V2025ApprovalReassignRequest'] 
slug: /tools/sdk/powershell/v2025/models/approval-reassign-request
tags: ['SDK', 'Software Development Kit', 'ApprovalReassignRequest', 'V2025ApprovalReassignRequest']
---


# ApprovalReassignRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment associated with the reassign request. | [optional] 
**ReassignFrom** | **String** | Identity from which the approval is being reassigned. If left blank, and the approval is currently assigned to the user calling this endpoint, it will use the calling user's identity. If left blank, and the approval is not currently assigned to the user calling this endpoint, you need to be an admin, which would add the reassignTo as a new approver. | [optional] 
**ReassignTo** | **String** | Identity to which the approval is being reassigned. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalReassignRequest = Initialize-V2025ApprovalReassignRequest  -Comment comment `
 -ReassignFrom 384532516be25f8fdf935ce19e295837 `
 -ReassignTo 152354832eb6f8f539fd738592e19ec5
```

- Convert the resource to JSON
```powershell
$ApprovalReassignRequest | ConvertTo-JSON
```


[[Back to top]](#) 

