---
id: create-workflow-request
title: CreateWorkflowRequest
pagination_label: CreateWorkflowRequest
sidebar_label: CreateWorkflowRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateWorkflowRequest', 'CreateWorkflowRequest'] 
slug: /tools/sdk/powershell/v3/models/create-workflow-request
tags: ['SDK', 'Software Development Kit', 'CreateWorkflowRequest', 'CreateWorkflowRequest']
---


# CreateWorkflowRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the workflow | [required]
**Owner** | [**WorkflowBodyOwner**](workflow-body-owner) |  | [optional] 
**Description** | **String** | Description of what the workflow accomplishes | [optional] 
**Definition** | [**WorkflowDefinition**](workflow-definition) |  | [optional] 
**Enabled** | **Boolean** | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [optional] [default to $false]
**Trigger** | [**WorkflowTrigger**](workflow-trigger) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateWorkflowRequest = Initialize-PSSailpoint.V3CreateWorkflowRequest  -Name Send Email `
 -Owner null `
 -Description Send an email to the identity who&#39;s attributes changed. `
 -Definition null `
 -Enabled false `
 -Trigger null
```

- Convert the resource to JSON
```powershell
$CreateWorkflowRequest | ConvertTo-JSON
```


[[Back to top]](#) 

