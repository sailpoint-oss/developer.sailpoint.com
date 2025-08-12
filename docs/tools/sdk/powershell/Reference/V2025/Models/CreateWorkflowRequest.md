---
id: v2025-create-workflow-request
title: CreateWorkflowRequest
pagination_label: CreateWorkflowRequest
sidebar_label: CreateWorkflowRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateWorkflowRequest', 'V2025CreateWorkflowRequest'] 
slug: /tools/sdk/powershell/v2025/models/create-workflow-request
tags: ['SDK', 'Software Development Kit', 'CreateWorkflowRequest', 'V2025CreateWorkflowRequest']
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
$CreateWorkflowRequest = Initialize-V2025CreateWorkflowRequest  -Name Send Email `
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

