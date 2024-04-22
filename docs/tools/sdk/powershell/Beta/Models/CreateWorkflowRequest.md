---
id: create-workflow-request
title: CreateWorkflowRequest
pagination_label: CreateWorkflowRequest
sidebar_label: CreateWorkflowRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CreateWorkflowRequest'] 
slug: /tools/sdk/powershell/beta/models/create-workflow-request
tags: ['SDK', 'Software Development Kit', 'CreateWorkflowRequest']
---


# CreateWorkflowRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | The name of the workflow | 
**Owner** |  [**WorkflowBodyOwner**](workflow-body-owner) |  | 
**Description** |  Pointer to **String** | Description of what the workflow accomplishes | [optional] 
**Definition** |  Pointer to [**WorkflowDefinition**](workflow-definition) |  | [optional] 
**Enabled** |  Pointer to **Boolean** | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [optional] [default to $false]
**Trigger** |  Pointer to [**WorkflowTrigger**](workflow-trigger) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateWorkflowRequest = Initialize-BetaCreateWorkflowRequest  -Name Send Email `
 -Owner null `
 -Description Send an email to the identity who's attributes changed. `
 -Definition null `
 -Enabled false `
 -Trigger null
```

- Convert the resource to JSON
```powershell
$CreateWorkflowRequest | ConvertTo-JSON
```


[[Back to top]](#) 

