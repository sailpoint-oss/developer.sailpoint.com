---
id: beta-requested-item-status-pre-approval-trigger-details
title: RequestedItemStatusPreApprovalTriggerDetails
pagination_label: RequestedItemStatusPreApprovalTriggerDetails
sidebar_label: RequestedItemStatusPreApprovalTriggerDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestedItemStatusPreApprovalTriggerDetails', 'BetaRequestedItemStatusPreApprovalTriggerDetails'] 
slug: /tools/sdk/powershell/beta/models/requested-item-status-pre-approval-trigger-details
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusPreApprovalTriggerDetails', 'BetaRequestedItemStatusPreApprovalTriggerDetails']
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
$RequestedItemStatusPreApprovalTriggerDetails = Initialize-BetaRequestedItemStatusPreApprovalTriggerDetails  -Comment Access is Approved `
 -Reviewer John Doe `
 -Decision APPROVED
```

- Convert the resource to JSON
```powershell
$RequestedItemStatusPreApprovalTriggerDetails | ConvertTo-JSON
```


[[Back to top]](#) 

