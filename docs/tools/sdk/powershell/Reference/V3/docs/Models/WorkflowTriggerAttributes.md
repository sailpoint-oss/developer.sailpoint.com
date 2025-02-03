---
id: workflow-trigger-attributes
title: WorkflowTriggerAttributes
pagination_label: WorkflowTriggerAttributes
sidebar_label: WorkflowTriggerAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowTriggerAttributes', 'WorkflowTriggerAttributes'] 
slug: /tools/sdk/powershell/v3/models/workflow-trigger-attributes
tags: ['SDK', 'Software Development Kit', 'WorkflowTriggerAttributes', 'WorkflowTriggerAttributes']
---


# WorkflowTriggerAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | The unique ID of the trigger | [required]
**VarFilter** |  Pointer to **String** | JSON path expression that will limit which events the trigger will fire on | [optional] 
**Description** |  Pointer to **String** | Additonal context about the external trigger | [optional] 
**AttributeToFilter** |  Pointer to **String** | The attribute to filter on | [optional] 
**Name** |  Pointer to **String** | A unique name for the external trigger | [optional] 
**ClientId** |  Pointer to **String** | OAuth Client ID to authenticate with this trigger | [optional] 
**Url** |  Pointer to **String** | URL to invoke this workflow | [optional] 
**CronString** |  Pointer to **String** | A valid CRON expression | [optional] 
**Frequency** |   **Enum** [  "daily",    "weekly",    "monthly",    "yearly",    "cronSchedule" ] | Frequency of execution | [required]
**TimeZone** |  Pointer to **String** | Time zone identifier | [optional] 
**WeeklyDays** |  Pointer to **[]String** | Scheduled days of the week for execution | [optional] 
**WeeklyTimes** |  Pointer to **[]String** | Scheduled execution times | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowTriggerAttributes = Initialize-PSSailpoint.V3WorkflowTriggerAttributes  -Id idn:identity-attributes-changed `
 -VarFilter $.changes[?(@.attribute &#x3D;&#x3D; &#39;manager&#39;)] `
 -Description Run a search and notify the results `
 -AttributeToFilter LifecycleState `
 -Name search-and-notify `
 -ClientId 87e239b2-b85b-4bde-b9a7-55bf304ddcdc `
 -Url https://tenant.api.identitynow.com/beta/workflows/execute/external/c79e0079-562c-4df5-aa73-60a9e25c916d `
 -CronString 0 9 * * 1 `
 -Frequency null `
 -TimeZone America/Chicago `
 -WeeklyDays Monday `
 -WeeklyTimes Monday
```

- Convert the resource to JSON
```powershell
$WorkflowTriggerAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

