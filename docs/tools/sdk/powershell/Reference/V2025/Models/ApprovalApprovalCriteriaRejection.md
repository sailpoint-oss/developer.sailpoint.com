---
id: v2025-approval-approval-criteria-rejection
title: ApprovalApprovalCriteriaRejection
pagination_label: ApprovalApprovalCriteriaRejection
sidebar_label: ApprovalApprovalCriteriaRejection
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalApprovalCriteriaRejection', 'V2025ApprovalApprovalCriteriaRejection'] 
slug: /tools/sdk/powershell/v2025/models/approval-approval-criteria-rejection
tags: ['SDK', 'Software Development Kit', 'ApprovalApprovalCriteriaRejection', 'V2025ApprovalApprovalCriteriaRejection']
---


# ApprovalApprovalCriteriaRejection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CalculationType** |  **Enum** [  "COUNT",    "PERCENT" ] | This defines what the field ""value"" will be used as, either a count or percentage of the total approvers that need to reject | [optional] 
**Value** | **Int64** | The value that needs to be met for the rejection criteria | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalApprovalCriteriaRejection = Initialize-V2025ApprovalApprovalCriteriaRejection  -CalculationType COUNT `
 -Value 30
```

- Convert the resource to JSON
```powershell
$ApprovalApprovalCriteriaRejection | ConvertTo-JSON
```


[[Back to top]](#) 

