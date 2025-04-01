---
id: v2025-workflow-body
title: WorkflowBody
pagination_label: WorkflowBody
sidebar_label: WorkflowBody
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowBody', 'V2025WorkflowBody'] 
slug: /tools/sdk/powershell/v2025/models/workflow-body
tags: ['SDK', 'Software Development Kit', 'WorkflowBody', 'V2025WorkflowBody']
---


# WorkflowBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the workflow | [optional] 
**Owner** | [**WorkflowBodyOwner**](workflow-body-owner) |  | [optional] 
**Description** | **String** | Description of what the workflow accomplishes | [optional] 
**Definition** | [**WorkflowDefinition**](workflow-definition) |  | [optional] 
**Enabled** | **Boolean** | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [optional] [default to $false]
**Trigger** | [**WorkflowTrigger**](workflow-trigger) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowBody = Initialize-PSSailpoint.V2025WorkflowBody  -Name Send Email `
 -Owner null `
 -Description Send an email to the identity who's attributes changed. `
 -Definition null `
 -Enabled false `
 -Trigger null
```

- Convert the resource to JSON
```powershell
$WorkflowBody | ConvertTo-JSON
```


[[Back to top]](#) 

