---
id: beta-workflow
title: Workflow
pagination_label: Workflow
sidebar_label: Workflow
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Workflow', 'BetaWorkflow'] 
slug: /tools/sdk/powershell/beta/models/workflow
tags: ['SDK', 'Software Development Kit', 'Workflow', 'BetaWorkflow']
---


# Workflow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the workflow | [optional] 
**Owner** | [**WorkflowBodyOwner**](workflow-body-owner) |  | [optional] 
**Description** | **String** | Description of what the workflow accomplishes | [optional] 
**Definition** | [**WorkflowDefinition**](workflow-definition) |  | [optional] 
**Enabled** | **Boolean** | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [optional] [default to $false]
**Trigger** | [**WorkflowTrigger**](workflow-trigger) |  | [optional] 
**Id** | **String** | Workflow ID. This is a UUID generated upon creation. | [optional] 
**Modified** | **System.DateTime** | The date and time the workflow was modified. | [optional] 
**ModifiedBy** | [**WorkflowModifiedBy**](workflow-modified-by) |  | [optional] 
**ExecutionCount** | **Int32** | The number of times this workflow has been executed. | [optional] 
**FailureCount** | **Int32** | The number of times this workflow has failed during execution. | [optional] 
**Created** | **System.DateTime** | The date and time the workflow was created. | [optional] 
**Creator** | [**WorkflowAllOfCreator**](workflow-all-of-creator) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Workflow = Initialize-PSSailpoint.BetaWorkflow  -Name Send Email `
 -Owner null `
 -Description Send an email to the identity who's attributes changed. `
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

