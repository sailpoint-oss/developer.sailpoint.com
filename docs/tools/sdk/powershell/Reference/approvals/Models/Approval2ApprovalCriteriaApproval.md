---
id: approval2-approval-criteria-approval
title: Approval2ApprovalCriteriaApproval
pagination_label: Approval2ApprovalCriteriaApproval
sidebar_label: Approval2ApprovalCriteriaApproval
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approval2ApprovalCriteriaApproval', 'Approval2ApprovalCriteriaApproval'] 
slug: /tools/sdk/powershell/approvals/models/approval2-approval-criteria-approval
tags: ['SDK', 'Software Development Kit', 'Approval2ApprovalCriteriaApproval', 'Approval2ApprovalCriteriaApproval']
---


# Approval2ApprovalCriteriaApproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CalculationType** |  **Enum** [  "COUNT",    "PERCENT" ] | This defines what the field ""value"" will be used as, either a count or percentage of the total approvers that need to approve | [optional] 
**Value** | **Int64** | The value that needs to be met for the approval criteria | [optional] 

## Examples

- Prepare the resource
```powershell
$Approval2ApprovalCriteriaApproval = Initialize-Approval2ApprovalCriteriaApproval  -CalculationType COUNT `
 -Value 70
```

- Convert the resource to JSON
```powershell
$Approval2ApprovalCriteriaApproval | ConvertTo-JSON
```


[[Back to top]](#) 

