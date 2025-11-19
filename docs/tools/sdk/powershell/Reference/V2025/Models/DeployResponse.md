---
id: v2025-deploy-response
title: DeployResponse
pagination_label: DeployResponse
sidebar_label: DeployResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DeployResponse', 'V2025DeployResponse'] 
slug: /tools/sdk/powershell/v2025/models/deploy-response
tags: ['SDK', 'Software Development Kit', 'DeployResponse', 'V2025DeployResponse']
---


# DeployResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobId** | **String** | Unique id assigned to this job. | [optional] 
**Status** |  **Enum** [  "NOT_STARTED",    "IN_PROGRESS",    "COMPLETE",    "CANCELLED",    "FAILED" ] | Status of the job. | [optional] 
**Type** |  **Enum** [  "CONFIG_DEPLOY_DRAFT" ] | Type of the job, will always be CONFIG_DEPLOY_DRAFT for this type of job. | [optional] 
**Message** | **String** | Message providing information about the outcome of the deploy process. | [optional] 
**RequesterName** | **String** | The name of the user that initiated the deploy process. | [optional] 
**FileExists** | **Boolean** | Whether or not a results file was created and stored for this deploy. | [optional] [default to $true]
**Created** | **System.DateTime** | The time the job was started. | [optional] 
**Modified** | **System.DateTime** | The time of the last update to the job. | [optional] 
**Completed** | **System.DateTime** | The time the job was completed. | [optional] 
**DraftId** | **String** | The id of the draft that was used for this deploy. | [optional] 
**DraftName** | **String** | The name of the draft that was used for this deploy. | [optional] 
**CloudStorageStatus** |  **Enum** [  "SYNCED",    "NOT_SYNCED",    "SYNC_FAILED" ] | Whether this deploy results file has been transferred to a customer storage location. | [optional] 

## Examples

- Prepare the resource
```powershell
$DeployResponse = Initialize-V2025DeployResponse  -JobId 07659d7d-2cce-47c0-9e49-185787ee565a `
 -Status COMPLETE `
 -Type CONFIG_DEPLOY_DRAFT `
 -Message Deploy creation message `
 -RequesterName requester.name `
 -FileExists true `
 -Created 2021-05-11T22:23:16Z `
 -Modified 2021-05-11T22:23:16Z `
 -Completed 2021-05-11T22:23:16Z `
 -DraftId 07659d7d-2cce-47c0-9e49-185787ee565a `
 -DraftName Draft Name `
 -CloudStorageStatus SYNCED
```

- Convert the resource to JSON
```powershell
$DeployResponse | ConvertTo-JSON
```


[[Back to top]](#) 

