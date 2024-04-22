---
id: workflow-trigger-attributes
title: WorkflowTriggerAttributes
pagination_label: WorkflowTriggerAttributes
sidebar_label: WorkflowTriggerAttributes
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'WorkflowTriggerAttributes'] 
slug: /tools/sdk/powershell/v3/models/workflow-trigger-attributes
tags: ['SDK', 'Software Development Kit', 'WorkflowTriggerAttributes']
---


# WorkflowTriggerAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | The unique ID of the trigger | 
**VarFilter** |  Pointer to **String** | JSON path expression that will limit which events the trigger will fire on | [optional] 
**Name** |  **String** | A unique name for the external trigger | 
**Description** |  Pointer to **String** | Additonal context about the external trigger | [optional] 
**CronString** |  **String** | A valid CRON expression | 

## Examples

- Prepare the resource
```powershell
$WorkflowTriggerAttributes = Initialize-WorkflowTriggerAttributes  -Id idn:identity-attributes-changed `
 -VarFilter $.changes[?(@.attribute == 'manager')] `
 -Name search-and-notify `
 -Description Run a search and notify the results `
 -CronString 0 * */3 */5 *
```

- Convert the resource to JSON
```powershell
$WorkflowTriggerAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

