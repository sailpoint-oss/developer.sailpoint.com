---
id: v2025-machine-identity-aggregation-response
title: MachineIdentityAggregationResponse
pagination_label: MachineIdentityAggregationResponse
sidebar_label: MachineIdentityAggregationResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineIdentityAggregationResponse', 'V2025MachineIdentityAggregationResponse'] 
slug: /tools/sdk/powershell/v2025/models/machine-identity-aggregation-response
tags: ['SDK', 'Software Development Kit', 'MachineIdentityAggregationResponse', 'V2025MachineIdentityAggregationResponse']
---


# MachineIdentityAggregationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] 
**Type** |  **Enum** [  "QUARTZ",    "QPOC",    "QUEUED_TASK" ] | Type of task for aggregation | [optional] 
**UniqueName** | **String** | Name of the task for aggregation | [optional] 
**Description** | **String** | Description of the aggregation | [optional] 
**ParentName** | **String** | Name of the parent of the task for aggregation | [optional] 
**Launcher** | **String** | Service to execute the aggregation | [optional] 
**Target** | [**MachineIdentityAggregationResponseTarget**](machine-identity-aggregation-response-target) |  | [optional] 
**Created** | **System.DateTime** | Creation date of the aggregation | [optional] 
**Modified** | **System.DateTime** | Last modification date of the aggregation | [optional] 
**Launched** | **System.DateTime** | Launch date of the aggregation | [optional] 
**Completed** | **System.DateTime** | Completion date of the aggregation | [optional] 
**TaskDefinitionSummary** | [**TaskDefinitionSummary**](task-definition-summary) |  | [optional] 
**CompletionStatus** |  **Enum** [  "SUCCESS",    "WARNING",    "ERROR",    "TERMINATED",    "TEMPERROR" ] | Completion status of the aggregation | [optional] 
**Messages** | [**[]TaskStatusMessage**](task-status-message) | Messages associated with the aggregation | [optional] 
**Returns** | [**[]TaskReturnDetails**](task-return-details) | Return values associated with the aggregation | [optional] 
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Attributes of the aggregation | [optional] 
**Progress** | **String** | Current progress of aggregation | [optional] 
**PercentComplete** | **Int32** | Current percentage completion of aggregation | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineIdentityAggregationResponse = Initialize-V2025MachineIdentityAggregationResponse  -Id 8886e5e3-63d0-462f-a195-d98da885b8dc `
 -Type QUARTZ `
 -UniqueName AI Agent Aggregation - ID123 `
 -Description AI Agent Aggregation - From given dataset IDs `
 -ParentName Parent Task `
 -Launcher System `
 -Target null `
 -Created 2020-07-11T21:23:15Z `
 -Modified 2020-07-11T21:23:15Z `
 -Launched 2020-07-11T21:23:15Z `
 -Completed 2020-07-11T21:23:15Z `
 -TaskDefinitionSummary null `
 -CompletionStatus SUCCESS `
 -Messages null `
 -Returns null `
 -Attributes {creatorRequestId=ed5a371bbaba411fb8f1f6970b842334} `
 -Progress Started `
 -PercentComplete 100
```

- Convert the resource to JSON
```powershell
$MachineIdentityAggregationResponse | ConvertTo-JSON
```


[[Back to top]](#) 

