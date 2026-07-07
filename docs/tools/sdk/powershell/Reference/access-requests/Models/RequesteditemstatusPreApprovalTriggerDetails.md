---
id: requesteditemstatus-pre-approval-trigger-details
title: RequesteditemstatusPreApprovalTriggerDetails
pagination_label: RequesteditemstatusPreApprovalTriggerDetails
sidebar_label: RequesteditemstatusPreApprovalTriggerDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequesteditemstatusPreApprovalTriggerDetails', 'RequesteditemstatusPreApprovalTriggerDetails'] 
slug: /tools/sdk/powershell/accessrequests/models/requesteditemstatus-pre-approval-trigger-details
tags: ['SDK', 'Software Development Kit', 'RequesteditemstatusPreApprovalTriggerDetails', 'RequesteditemstatusPreApprovalTriggerDetails']
---


# RequesteditemstatusPreApprovalTriggerDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment left for the pre-approval decision | [optional] 
**Reviewer** | **String** | The reviewer of the pre-approval decision | [optional] 
**Decision** |  **Enum** [  "APPROVED",    "REJECTED" ] | The decision of the pre-approval trigger | [optional] 

## Examples

- Prepare the resource
```powershell
$RequesteditemstatusPreApprovalTriggerDetails = Initialize-RequesteditemstatusPreApprovalTriggerDetails  -Comment Access is Approved `
 -Reviewer John Doe `
 -Decision APPROVED
```

- Convert the resource to JSON
```powershell
$RequesteditemstatusPreApprovalTriggerDetails | ConvertTo-JSON
```


[[Back to top]](#) 

