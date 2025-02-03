---
id: requested-item-status-pre-approval-trigger-details
title: RequestedItemStatusPreApprovalTriggerDetails
pagination_label: RequestedItemStatusPreApprovalTriggerDetails
sidebar_label: RequestedItemStatusPreApprovalTriggerDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestedItemStatusPreApprovalTriggerDetails', 'RequestedItemStatusPreApprovalTriggerDetails'] 
slug: /tools/sdk/powershell/v3/models/requested-item-status-pre-approval-trigger-details
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusPreApprovalTriggerDetails', 'RequestedItemStatusPreApprovalTriggerDetails']
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
$RequestedItemStatusPreApprovalTriggerDetails = Initialize-PSSailpoint.V3RequestedItemStatusPreApprovalTriggerDetails  -Comment Access is Approved `
 -Reviewer John Doe `
 -Decision APPROVED
```

- Convert the resource to JSON
```powershell
$RequestedItemStatusPreApprovalTriggerDetails | ConvertTo-JSON
```


[[Back to top]](#) 

