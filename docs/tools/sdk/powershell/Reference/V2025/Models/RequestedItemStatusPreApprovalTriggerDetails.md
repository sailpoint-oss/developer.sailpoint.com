---
id: v2025-requested-item-status-pre-approval-trigger-details
title: RequestedItemStatusPreApprovalTriggerDetails
pagination_label: RequestedItemStatusPreApprovalTriggerDetails
sidebar_label: RequestedItemStatusPreApprovalTriggerDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestedItemStatusPreApprovalTriggerDetails', 'V2025RequestedItemStatusPreApprovalTriggerDetails'] 
slug: /tools/sdk/powershell/v2025/models/requested-item-status-pre-approval-trigger-details
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusPreApprovalTriggerDetails', 'V2025RequestedItemStatusPreApprovalTriggerDetails']
---


# RequestedItemStatusPreApprovalTriggerDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment left for the pre-approval decision | [optional] 
**Reviewer** | **String** | The reviewer of the pre-approval decision | [optional] 
**Decision** |  **Enum** [  "APPROVED",    "REJECTED" ] | The decision of the pre-approval trigger | [optional] 

## Examples

- Prepare the resource
```powershell
$RequestedItemStatusPreApprovalTriggerDetails = Initialize-V2025RequestedItemStatusPreApprovalTriggerDetails  -Comment Access is Approved `
 -Reviewer John Doe `
 -Decision APPROVED
```

- Convert the resource to JSON
```powershell
$RequestedItemStatusPreApprovalTriggerDetails | ConvertTo-JSON
```


[[Back to top]](#) 

