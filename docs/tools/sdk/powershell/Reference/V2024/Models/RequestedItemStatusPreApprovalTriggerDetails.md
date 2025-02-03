---
id: v2024-requested-item-status-pre-approval-trigger-details
title: RequestedItemStatusPreApprovalTriggerDetails
pagination_label: RequestedItemStatusPreApprovalTriggerDetails
sidebar_label: RequestedItemStatusPreApprovalTriggerDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestedItemStatusPreApprovalTriggerDetails', 'V2024RequestedItemStatusPreApprovalTriggerDetails'] 
slug: /tools/sdk/powershell/v2024/models/requested-item-status-pre-approval-trigger-details
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusPreApprovalTriggerDetails', 'V2024RequestedItemStatusPreApprovalTriggerDetails']
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
$RequestedItemStatusPreApprovalTriggerDetails = Initialize-PSSailpoint.V2024RequestedItemStatusPreApprovalTriggerDetails  -Comment Access is Approved `
 -Reviewer John Doe `
 -Decision APPROVED
```

- Convert the resource to JSON
```powershell
$RequestedItemStatusPreApprovalTriggerDetails | ConvertTo-JSON
```


[[Back to top]](#) 

