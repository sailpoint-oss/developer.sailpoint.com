---
id: v2025-approval-approval-criteria-approval
title: ApprovalApprovalCriteriaApproval
pagination_label: ApprovalApprovalCriteriaApproval
sidebar_label: ApprovalApprovalCriteriaApproval
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalApprovalCriteriaApproval', 'V2025ApprovalApprovalCriteriaApproval'] 
slug: /tools/sdk/powershell/v2025/models/approval-approval-criteria-approval
tags: ['SDK', 'Software Development Kit', 'ApprovalApprovalCriteriaApproval', 'V2025ApprovalApprovalCriteriaApproval']
---


# ApprovalApprovalCriteriaApproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CalculationType** |  **Enum** [  "COUNT",    "PERCENT" ] | This defines what the field ""value"" will be used as, either a count or percentage of the total approvers that need to approve | [optional] 
**Value** | **Int64** | The value that needs to be met for the approval criteria | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalApprovalCriteriaApproval = Initialize-V2025ApprovalApprovalCriteriaApproval  -CalculationType COUNT `
 -Value 70
```

- Convert the resource to JSON
```powershell
$ApprovalApprovalCriteriaApproval | ConvertTo-JSON
```


[[Back to top]](#) 

