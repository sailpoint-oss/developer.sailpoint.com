---
id: v2025-pre-approval-trigger-details
title: PreApprovalTriggerDetails
pagination_label: PreApprovalTriggerDetails
sidebar_label: PreApprovalTriggerDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PreApprovalTriggerDetails', 'V2025PreApprovalTriggerDetails'] 
slug: /tools/sdk/powershell/v2025/models/pre-approval-trigger-details
tags: ['SDK', 'Software Development Kit', 'PreApprovalTriggerDetails', 'V2025PreApprovalTriggerDetails']
---


# PreApprovalTriggerDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment left for the pre-approval decision | [optional] 
**Reviewer** | **String** | The reviewer of the pre-approval decision | [optional] 
**Decision** |  **Enum** [  "APPROVED",    "REJECTED" ] | The decision of the pre-approval trigger | [optional] 

## Examples

- Prepare the resource
```powershell
$PreApprovalTriggerDetails = Initialize-PSSailpoint.V2025PreApprovalTriggerDetails  -Comment Access is Approved `
 -Reviewer John Doe `
 -Decision APPROVED
```

- Convert the resource to JSON
```powershell
$PreApprovalTriggerDetails | ConvertTo-JSON
```


[[Back to top]](#) 

