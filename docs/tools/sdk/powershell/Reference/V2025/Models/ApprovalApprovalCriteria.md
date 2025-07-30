---
id: v2025-approval-approval-criteria
title: ApprovalApprovalCriteria
pagination_label: ApprovalApprovalCriteria
sidebar_label: ApprovalApprovalCriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalApprovalCriteria', 'V2025ApprovalApprovalCriteria'] 
slug: /tools/sdk/powershell/v2025/models/approval-approval-criteria
tags: ['SDK', 'Software Development Kit', 'ApprovalApprovalCriteria', 'V2025ApprovalApprovalCriteria']
---


# ApprovalApprovalCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | Type of approval criteria, such as SERIAL or PARALLEL | [optional] 
**Approval** | [**ApprovalApprovalCriteriaApproval**](approval-approval-criteria-approval) |  | [optional] 
**Rejection** | [**ApprovalApprovalCriteriaRejection**](approval-approval-criteria-rejection) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalApprovalCriteria = Initialize-V2025ApprovalApprovalCriteria  -Type SERIAL `
 -Approval null `
 -Rejection null
```

- Convert the resource to JSON
```powershell
$ApprovalApprovalCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

