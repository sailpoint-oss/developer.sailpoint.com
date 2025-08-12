---
id: v2025-access-request-phases
title: AccessRequestPhases
pagination_label: AccessRequestPhases
sidebar_label: AccessRequestPhases
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestPhases', 'V2025AccessRequestPhases'] 
slug: /tools/sdk/powershell/v2025/models/access-request-phases
tags: ['SDK', 'Software Development Kit', 'AccessRequestPhases', 'V2025AccessRequestPhases']
---


# AccessRequestPhases

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Started** | **System.DateTime** | The time that this phase started. | [optional] 
**Finished** | **System.DateTime** | The time that this phase finished. | [optional] 
**Name** | **String** | The name of this phase. | [optional] 
**State** |  **Enum** [  "PENDING",    "EXECUTING",    "COMPLETED",    "CANCELLED",    "NOT_EXECUTED" ] | The state of this phase. | [optional] 
**Result** |  **Enum** [  "SUCCESSFUL",    "FAILED" ] | The state of this phase. | [optional] 
**PhaseReference** | **String** | A reference to another object on the RequestedItemStatus that contains more details about the phase. Note that for the Provisioning phase, this will be empty if there are no manual work items. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestPhases = Initialize-V2025AccessRequestPhases  -Started 2020-07-11T00:00Z `
 -Finished 2020-07-12T00:00Z `
 -Name APPROVAL_PHASE `
 -State COMPLETED `
 -Result SUCCESSFUL `
 -PhaseReference approvalDetails
```

- Convert the resource to JSON
```powershell
$AccessRequestPhases | ConvertTo-JSON
```


[[Back to top]](#) 

