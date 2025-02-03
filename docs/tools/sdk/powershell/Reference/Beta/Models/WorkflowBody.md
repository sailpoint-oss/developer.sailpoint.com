---
id: beta-workflow-body
title: WorkflowBody
pagination_label: WorkflowBody
sidebar_label: WorkflowBody
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowBody', 'BetaWorkflowBody'] 
slug: /tools/sdk/powershell/beta/models/workflow-body
tags: ['SDK', 'Software Development Kit', 'WorkflowBody', 'BetaWorkflowBody']
---


# WorkflowBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | The name of the workflow | [optional] 
**Owner** |  Pointer to [**WorkflowBodyOwner**](workflow-body-owner) |  | [optional] 
**Description** |  Pointer to **String** | Description of what the workflow accomplishes | [optional] 
**Definition** |  Pointer to [**WorkflowDefinition**](workflow-definition) |  | [optional] 
**Enabled** |  Pointer to **Boolean** | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [optional] [default to $false]
**Trigger** |  Pointer to [**WorkflowTrigger**](workflow-trigger) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowBody = Initialize-PSSailpoint.BetaWorkflowBody  -Name Send Email `
 -Owner null `
 -Description Send an email to the identity who&#39;s attributes changed. `
 -Definition null `
 -Enabled false `
 -Trigger null
```

- Convert the resource to JSON
```powershell
$WorkflowBody | ConvertTo-JSON
```


[[Back to top]](#) 

