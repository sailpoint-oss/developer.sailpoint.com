---
id: v2024-draft-response
title: DraftResponse
pagination_label: DraftResponse
sidebar_label: DraftResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DraftResponse', 'V2024DraftResponse'] 
slug: /tools/sdk/powershell/v2024/models/draft-response
tags: ['SDK', 'Software Development Kit', 'DraftResponse', 'V2024DraftResponse']
---


# DraftResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobId** |  Pointer to **String** | Unique id assigned to this job. | [optional] 
**Status** |  Pointer to  **Enum** [  "NOT_STARTED",    "IN_PROGRESS",    "COMPLETE",    "CANCELLED",    "FAILED" ] | Status of the job. | [optional] 
**Type** |  Pointer to  **Enum** [  "CREATE_DRAFT" ] | Type of the job, will always be CREATE_DRAFT for this type of job. | [optional] 
**Message** |  Pointer to **String** | Message providing information about the outcome of the draft process. | [optional] 
**RequesterName** |  Pointer to **String** | The name of user that that initiated the draft process. | [optional] 
**FileExists** |  Pointer to **Boolean** | Whether or not a file was generated for this draft. | [optional] [default to $true]
**Created** |  Pointer to **System.DateTime** | The time the job was started. | [optional] 
**Modified** |  Pointer to **System.DateTime** | The time of the last update to the job. | [optional] 
**Completed** |  Pointer to **System.DateTime** | The time the job was completed. | [optional] 
**Name** |  Pointer to **String** | Name of the draft. | [optional] 
**SourceTenant** |  Pointer to **String** | Tenant owner of the backup from which the draft was generated. | [optional] 
**SourceBackupId** |  Pointer to **String** | Id of the backup from which the draft was generated. | [optional] 
**SourceBackupName** |  Pointer to **String** | Name of the backup from which the draft was generated. | [optional] 
**Mode** |  Pointer to  **Enum** [  "RESTORE",    "PROMOTE",    "UPLOAD" ] | Denotes the origin of the source backup from which the draft was generated. - RESTORE - Same tenant. - PROMOTE - Different tenant. - UPLOAD - Uploaded configuration. | [optional] 
**ApprovalStatus** |  Pointer to  **Enum** [  "DEFAULT",    "PENDING_APPROVAL",    "APPROVED",    "DENIED" ] | Approval status of the draft used to determine whether or not the draft can be deployed. | [optional] 
**ApprovalComment** |  Pointer to [**[]ApprovalComment**](approval-comment) | List of comments that have been exchanged between an approval requester and an approver. | [optional] 

## Examples

- Prepare the resource
```powershell
$DraftResponse = Initialize-PSSailpoint.V2024DraftResponse  -JobId 07659d7d-2cce-47c0-9e49-185787ee565a `
 -Status COMPLETE `
 -Type CREATE_DRAFT `
 -Message Draft creation message `
 -RequesterName requester.name `
 -FileExists true `
 -Created 2021-05-11T22:23:16Z `
 -Modified 2021-05-11T22:23:16Z `
 -Completed 2021-05-11T22:23:16Z `
 -Name Draft name `
 -SourceTenant source-tenant `
 -SourceBackupId 549bf881-1ac4-4a64-9acf-6014e8a3a887 `
 -SourceBackupName Source backup name `
 -Mode RESTORE `
 -ApprovalStatus APPROVED `
 -ApprovalComment null
```

- Convert the resource to JSON
```powershell
$DraftResponse | ConvertTo-JSON
```


[[Back to top]](#) 

