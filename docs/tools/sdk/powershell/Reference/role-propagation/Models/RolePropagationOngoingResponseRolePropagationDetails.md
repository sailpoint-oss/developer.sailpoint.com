---
id: role-propagation-ongoing-response-role-propagation-details
title: RolePropagationOngoingResponseRolePropagationDetails
pagination_label: RolePropagationOngoingResponseRolePropagationDetails
sidebar_label: RolePropagationOngoingResponseRolePropagationDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RolePropagationOngoingResponseRolePropagationDetails', 'RolePropagationOngoingResponseRolePropagationDetails'] 
slug: /tools/sdk/powershell/rolepropagation/models/role-propagation-ongoing-response-role-propagation-details
tags: ['SDK', 'Software Development Kit', 'RolePropagationOngoingResponseRolePropagationDetails', 'RolePropagationOngoingResponseRolePropagationDetails']
---


# RolePropagationOngoingResponseRolePropagationDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the Role Propagation process triggered. | [optional] 
**Status** |  **Enum** [  "RUNNING",    "COMPLETED" ] | Status of the Role Propagation process. | [optional] 
**ExecutionStage** |  **Enum** [  "PENDING",    "DATA_AGGREGATION_RUNNING",    "LAUNCH_PROVISIONING",    "SUCCEEDED",    "FAILED",    "TERMINATED" ] | Current execution stage of the Role Propagation process. | [optional] 
**Launched** | **System.DateTime** | Time when the Role Propagation process was launched. | [optional] 
**LaunchedBy** | [**RolePropagationStatusResponseLaunchedBy**](role-propagation-status-response-launched-by) |  | [optional] 
**TerminatedBy** | [**RolePropagationStatusResponseTerminatedBy**](role-propagation-status-response-terminated-by) |  | [optional] 
**Completed** | **System.DateTime** | Time when the Role Propagation process was completed. | [optional] 
**FailureReason** | **String** | Reason for failure if the Role Propagation process failed. | [optional] 
**SkipRoleRefresh** | **Boolean** | Indicates if the role refresh was skipped during the Role Propagation process. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$RolePropagationOngoingResponseRolePropagationDetails = Initialize-RolePropagationOngoingResponseRolePropagationDetails  -Id 47b9fb02-e12e-42ba-8bfe-1860d78c88eb `
 -Status RUNNING `
 -ExecutionStage PENDING `
 -Launched 2023-10-01T12:00Z `
 -LaunchedBy null `
 -TerminatedBy null `
 -Completed 2023-10-01T12:30Z `
 -FailureReason Network error `
 -SkipRoleRefresh false
```

- Convert the resource to JSON
```powershell
$RolePropagationOngoingResponseRolePropagationDetails | ConvertTo-JSON
```


[[Back to top]](#) 

