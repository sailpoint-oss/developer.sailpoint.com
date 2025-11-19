---
id: v2025-approval-reject-request
title: ApprovalRejectRequest
pagination_label: ApprovalRejectRequest
sidebar_label: ApprovalRejectRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalRejectRequest', 'V2025ApprovalRejectRequest'] 
slug: /tools/sdk/powershell/v2025/models/approval-reject-request
tags: ['SDK', 'Software Development Kit', 'ApprovalRejectRequest', 'V2025ApprovalRejectRequest']
---


# ApprovalRejectRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment associated with the reject request. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalRejectRequest = Initialize-V2025ApprovalRejectRequest  -Comment string
```

- Convert the resource to JSON
```powershell
$ApprovalRejectRequest | ConvertTo-JSON
```


[[Back to top]](#) 

