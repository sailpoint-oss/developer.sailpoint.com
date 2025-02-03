---
id: v2024-certification-task
title: CertificationTask
pagination_label: CertificationTask
sidebar_label: CertificationTask
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CertificationTask', 'V2024CertificationTask'] 
slug: /tools/sdk/powershell/v2024/models/certification-task
tags: ['SDK', 'Software Development Kit', 'CertificationTask', 'V2024CertificationTask']
---


# CertificationTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The ID of the certification task. | [optional] 
**Type** |  Pointer to  **Enum** [  "REASSIGN",    "ADMIN_REASSIGN",    "COMPLETE_CERTIFICATION",    "FINISH_CERTIFICATION",    "COMPLETE_CAMPAIGN",    "ACTIVATE_CAMPAIGN",    "CAMPAIGN_CREATE",    "CAMPAIGN_DELETE" ] | The type of the certification task. More values may be added in the future. | [optional] 
**TargetType** |  Pointer to  **Enum** [  "CERTIFICATION",    "CAMPAIGN" ] | The type of item that is being operated on by this task whose ID is stored in the targetId field. | [optional] 
**TargetId** |  Pointer to **String** | The ID of the item being operated on by this task. | [optional] 
**Status** |  Pointer to  **Enum** [  "QUEUED",    "IN_PROGRESS",    "SUCCESS",    "ERROR" ] | The status of the task. | [optional] 
**Errors** |  Pointer to [**[]ErrorMessageDto**](error-message-dto) |  | [optional] 
**ReassignmentTrailDTOs** |  Pointer to [**[]ReassignmentTrailDTO**](reassignment-trail-dto) | Reassignment trails that lead to self certification identity | [optional] 
**Created** |  Pointer to **System.DateTime** | The date and time on which this task was created. | [optional] 

## Examples

- Prepare the resource
```powershell
$CertificationTask = Initialize-PSSailpoint.V2024CertificationTask  -Id 2c918086719eec070171a7e3355a360a `
 -Type ADMIN_REASSIGN `
 -TargetType CAMPAIGN `
 -TargetId 2c918086719eec070171a7e3355a834c `
 -Status QUEUED `
 -Errors null `
 -ReassignmentTrailDTOs {previousOwner&#x3D;ef38f94347e94562b5bb8424a56397d8, newOwner&#x3D;ef38f94347e94562b5bb8424a56397a3, reassignmentType&#x3D;AUTOMATIC_REASSIGNMENT} `
 -Created 2020-09-24T18:10:47.693Z
```

- Convert the resource to JSON
```powershell
$CertificationTask | ConvertTo-JSON
```


[[Back to top]](#) 

