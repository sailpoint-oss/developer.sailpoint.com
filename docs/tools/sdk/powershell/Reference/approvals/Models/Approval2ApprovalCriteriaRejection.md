---
id: approval2-approval-criteria-rejection
title: Approval2ApprovalCriteriaRejection
pagination_label: Approval2ApprovalCriteriaRejection
sidebar_label: Approval2ApprovalCriteriaRejection
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approval2ApprovalCriteriaRejection', 'Approval2ApprovalCriteriaRejection'] 
slug: /tools/sdk/powershell/approvals/models/approval2-approval-criteria-rejection
tags: ['SDK', 'Software Development Kit', 'Approval2ApprovalCriteriaRejection', 'Approval2ApprovalCriteriaRejection']
---


# Approval2ApprovalCriteriaRejection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CalculationType** |  **Enum** [  "COUNT",    "PERCENT" ] | This defines what the field ""value"" will be used as, either a count or percentage of the total approvers that need to reject | [optional] 
**Value** | **Int64** | The value that needs to be met for the rejection criteria | [optional] 

## Examples

- Prepare the resource
```powershell
$Approval2ApprovalCriteriaRejection = Initialize-Approval2ApprovalCriteriaRejection  -CalculationType COUNT `
 -Value 30
```

- Convert the resource to JSON
```powershell
$Approval2ApprovalCriteriaRejection | ConvertTo-JSON
```


[[Back to top]](#) 

