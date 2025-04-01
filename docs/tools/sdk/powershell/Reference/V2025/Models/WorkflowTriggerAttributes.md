---
id: v2025-workflow-trigger-attributes
title: WorkflowTriggerAttributes
pagination_label: WorkflowTriggerAttributes
sidebar_label: WorkflowTriggerAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowTriggerAttributes', 'V2025WorkflowTriggerAttributes'] 
slug: /tools/sdk/powershell/v2025/models/workflow-trigger-attributes
tags: ['SDK', 'Software Development Kit', 'WorkflowTriggerAttributes', 'V2025WorkflowTriggerAttributes']
---


# WorkflowTriggerAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the trigger | [required]
**VarFilter** | **String** | JSON path expression that will limit which events the trigger will fire on | [optional] 
**Description** | **String** | Additional context about the external trigger | [optional] 
**AttributeToFilter** | **String** | The attribute to filter on | [optional] 
**FormDefinitionId** | **String** | Form definition's unique identifier. | [optional] 
**Name** | **String** | A unique name for the external trigger | [optional] 
**ClientId** | **String** | OAuth Client ID to authenticate with this trigger | [optional] 
**Url** | **String** | URL to invoke this workflow | [optional] 
**Frequency** |  **Enum** [  "daily",    "weekly",    "monthly",    "yearly",    "cronSchedule" ] | Frequency of execution | [required]
**TimeZone** | **String** | Time zone identifier | [optional] 
**CronString** | **String** | A valid CRON expression | [optional] 
**WeeklyDays** | **[]String** | Scheduled days of the week for execution | [optional] 
**WeeklyTimes** | **[]String** | Scheduled execution times | [optional] 
**YearlyTimes** | **[]String** | Scheduled execution times | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowTriggerAttributes = Initialize-PSSailpoint.V2025WorkflowTriggerAttributes  -Id idn:identity-attributes-changed `
 -VarFilter $.changes[?(@.attribute == 'manager')] `
 -Description Run a search and notify the results `
 -AttributeToFilter LifecycleState `
 -FormDefinitionId Admin_Access_Request_Form `
 -Name search-and-notify `
 -ClientId 87e239b2-b85b-4bde-b9a7-55bf304ddcdc `
 -Url https://tenant.api.identitynow.com/beta/workflows/execute/external/c79e0079-562c-4df5-aa73-60a9e25c916d `
 -Frequency daily `
 -TimeZone America/Chicago `
 -CronString 0 9 * * 1 `
 -WeeklyDays Monday `
 -WeeklyTimes Monday `
 -YearlyTimes 1969-12-31T09:00:00.000Z
```

- Convert the resource to JSON
```powershell
$WorkflowTriggerAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

