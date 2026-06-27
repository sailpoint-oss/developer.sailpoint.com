---
id: approvalcomment
title: Approvalcomment
pagination_label: Approvalcomment
sidebar_label: Approvalcomment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approvalcomment', 'Approvalcomment'] 
slug: /tools/sdk/powershell/configurationhub/models/approvalcomment
tags: ['SDK', 'Software Development Kit', 'Approvalcomment', 'Approvalcomment']
---


# Approvalcomment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment provided either by the approval requester or the approver. | [required]
**Timestamp** | **System.DateTime** | The time when this comment was provided. | [required]
**User** | **String** | Name of the user that provided this comment. | [required]
**Id** | **String** | Id of the user that provided this comment. | [required]
**ChangedToStatus** |  **Enum** [  "PENDING_APPROVAL",    "APPROVED",    "REJECTED" ] | Status transition of the draft. | [required]

## Examples

- Prepare the resource
```powershell
$Approvalcomment = Initialize-Approvalcomment  -Comment Approval comment `
 -Timestamp 2021-05-11T22:23:16Z `
 -User user.name `
 -Id 549bf881-1ac4-4a64-9acf-6014e8a3a887 `
 -ChangedToStatus PENDING_APPROVAL
```

- Convert the resource to JSON
```powershell
$Approvalcomment | ConvertTo-JSON
```


[[Back to top]](#) 

