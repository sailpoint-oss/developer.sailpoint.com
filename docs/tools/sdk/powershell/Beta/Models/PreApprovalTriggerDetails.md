---
id: pre-approval-trigger-details
title: PreApprovalTriggerDetails
pagination_label: PreApprovalTriggerDetails
sidebar_label: PreApprovalTriggerDetails
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'PreApprovalTriggerDetails'] 
slug: /tools/sdk/powershell/beta/models/pre-approval-trigger-details
tags: ['SDK', 'Software Development Kit', 'PreApprovalTriggerDetails']
---


# PreApprovalTriggerDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** |  Pointer to **String** | Comment left for the pre-approval decision | [optional] 
**Reviewer** |  Pointer to **String** | The reviewer of the pre-approval decision | [optional] 
**Decision** |  Pointer to  **Enum** [  "APPROVED",    "REJECTED" ] | The decision of the pre-approval trigger | [optional] 

## Examples

- Prepare the resource
```powershell
$PreApprovalTriggerDetails = Initialize-BetaPreApprovalTriggerDetails  -Comment Access is Approved `
 -Reviewer John Doe `
 -Decision APPROVED
```

- Convert the resource to JSON
```powershell
$PreApprovalTriggerDetails | ConvertTo-JSON
```


[[Back to top]](#) 

