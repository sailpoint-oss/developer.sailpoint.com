---
id: workflow
title: Workflow
pagination_label: Workflow
sidebar_label: Workflow
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Workflow'] 
slug: /tools/sdk/powershell/beta/models/workflow
tags: ['SDK', 'Software Development Kit', 'Workflow']
---


# Workflow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | The name of the workflow | [optional] 
**Owner** |  Pointer to [**WorkflowBodyOwner**](workflow-body-owner) |  | [optional] 
**Description** |  Pointer to **String** | Description of what the workflow accomplishes | [optional] 
**Definition** |  Pointer to [**WorkflowDefinition**](workflow-definition) |  | [optional] 
**Enabled** |  Pointer to **Boolean** | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [optional] [default to $false]
**Trigger** |  Pointer to [**WorkflowTrigger**](workflow-trigger) |  | [optional] 
**Id** |  Pointer to **String** | Workflow ID. This is a UUID generated upon creation. | [optional] 
**Modified** |  Pointer to **System.DateTime** | The date and time the workflow was modified. | [optional] 
**ModifiedBy** |  Pointer to [**WorkflowModifiedBy**](workflow-modified-by) |  | [optional] 
**ExecutionCount** |  Pointer to **Int32** | The number of times this workflow has been executed. | [optional] 
**FailureCount** |  Pointer to **Int32** | The number of times this workflow has failed during execution. | [optional] 
**Created** |  Pointer to **System.DateTime** | The date and time the workflow was created. | [optional] 
**Creator** |  Pointer to [**WorkflowAllOfCreator**](workflow-all-of-creator) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Workflow = Initialize-PSSailpoint.BetaWorkflow  -Name Send Email `
 -Owner null `
 -Description Send an email to the identity who&#39;s attributes changed. `
 -Definition null `
 -Enabled false `
 -Trigger null `
 -Id d201c5e9-d37b-4aff-af14-66414f39d569 `
 -Modified 2023-12-05T15:18:27.699132301Z `
 -ModifiedBy null `
 -ExecutionCount 2 `
 -FailureCount 0 `
 -Created 2022-01-10T16:06:16.636381447Z `
 -Creator null
```

- Convert the resource to JSON
```powershell
$Workflow | ConvertTo-JSON
```


[[Back to top]](#) 

