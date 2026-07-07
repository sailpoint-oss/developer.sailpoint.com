---
id: role-propagation-status-response
title: RolePropagationStatusResponse
pagination_label: RolePropagationStatusResponse
sidebar_label: RolePropagationStatusResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RolePropagationStatusResponse', 'RolePropagationStatusResponse'] 
slug: /tools/sdk/powershell/rolepropagation/models/role-propagation-status-response
tags: ['SDK', 'Software Development Kit', 'RolePropagationStatusResponse', 'RolePropagationStatusResponse']
---


# RolePropagationStatusResponse

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
$RolePropagationStatusResponse = Initialize-RolePropagationStatusResponse  -Id 47b9fb02-e12e-42ba-8bfe-1860d78c88eb `
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
$RolePropagationStatusResponse | ConvertTo-JSON
```


[[Back to top]](#) 

