---
id: create-workflow-v1-request
title: CreateWorkflowV1Request
pagination_label: CreateWorkflowV1Request
sidebar_label: CreateWorkflowV1Request
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateWorkflowV1Request', 'CreateWorkflowV1Request'] 
slug: /tools/sdk/powershell/workflows/models/create-workflow-v1-request
tags: ['SDK', 'Software Development Kit', 'CreateWorkflowV1Request', 'CreateWorkflowV1Request']
---


# CreateWorkflowV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the workflow | [required]
**Owner** | [**WorkflowbodyOwner**](workflowbody-owner) |  | [optional] 
**Description** | **String** | Description of what the workflow accomplishes | [optional] 
**Definition** | [**Workflowdefinition**](workflowdefinition) |  | [optional] 
**Enabled** | **Boolean** | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [optional] [default to $false]
**Trigger** | [**Workflowtrigger**](workflowtrigger) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateWorkflowV1Request = Initialize-CreateWorkflowV1Request  -Name Send Email `
 -Owner null `
 -Description Send an email to the identity who's attributes changed. `
 -Definition null `
 -Enabled false `
 -Trigger null
```

- Convert the resource to JSON
```powershell
$CreateWorkflowV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

