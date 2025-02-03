---
id: beta-workflow-trigger-attributes
title: WorkflowTriggerAttributes
pagination_label: WorkflowTriggerAttributes
sidebar_label: WorkflowTriggerAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowTriggerAttributes', 'BetaWorkflowTriggerAttributes'] 
slug: /tools/sdk/powershell/beta/models/workflow-trigger-attributes
tags: ['SDK', 'Software Development Kit', 'WorkflowTriggerAttributes', 'BetaWorkflowTriggerAttributes']
---


# WorkflowTriggerAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | The unique ID of the trigger | [required]
**VarFilter** |  Pointer to **String** | JSON path expression that will limit which events the trigger will fire on | [optional] 
**Description** |  Pointer to **String** | Additional context about the external trigger | [optional] 
**Name** |  Pointer to **String** | A unique name for the external trigger | [optional] 
**ClientId** |  Pointer to **String** | OAuth Client ID to authenticate with this trigger | [optional] 
**Url** |  Pointer to **String** | URL to invoke this workflow | [optional] 
**Frequency** |   **Enum** [  "daily",    "weekly",    "monthly",    "yearly",    "cronSchedule" ] | Frequency of execution | [required]
**TimeZone** |  Pointer to **String** | Time zone identifier | [optional] 
**CronString** |  Pointer to **String** |  | [optional] 
**WeeklyDays** |  Pointer to **[]String** | Scheduled days of the week for execution | [optional] 
**WeeklyTimes** |  Pointer to **[]String** | Scheduled execution times | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowTriggerAttributes = Initialize-PSSailpoint.BetaWorkflowTriggerAttributes  -Id idn:identity-attributes-changed `
 -VarFilter $.changes[?(@.attribute &#x3D;&#x3D; &#39;manager&#39;)] `
 -Description Run a search and notify the results `
 -Name search-and-notify `
 -ClientId 87e239b2-b85b-4bde-b9a7-55bf304ddcdc `
 -Url https://tenant.api.identitynow.com/beta/workflows/execute/external/c79e0079-562c-4df5-aa73-60a9e25c916d `
 -Frequency null `
 -TimeZone America/Chicago `
 -CronString 0 9 * * 1 `
 -WeeklyDays Monday `
 -WeeklyTimes Monday
```

- Convert the resource to JSON
```powershell
$WorkflowTriggerAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

