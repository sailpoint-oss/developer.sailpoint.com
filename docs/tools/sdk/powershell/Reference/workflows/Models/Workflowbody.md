---
id: workflowbody
title: Workflowbody
pagination_label: Workflowbody
sidebar_label: Workflowbody
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Workflowbody', 'Workflowbody'] 
slug: /tools/sdk/powershell/workflows/models/workflowbody
tags: ['SDK', 'Software Development Kit', 'Workflowbody', 'Workflowbody']
---


# Workflowbody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the workflow | [optional] 
**Owner** | [**WorkflowbodyOwner**](workflowbody-owner) |  | [optional] 
**Description** | **String** | Description of what the workflow accomplishes | [optional] 
**Definition** | [**Workflowdefinition**](workflowdefinition) |  | [optional] 
**Enabled** | **Boolean** | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [optional] [default to $false]
**Trigger** | [**Workflowtrigger**](workflowtrigger) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Workflowbody = Initialize-Workflowbody  -Name Send Email `
 -Owner null `
 -Description Send an email to the identity who's attributes changed. `
 -Definition null `
 -Enabled false `
 -Trigger null
```

- Convert the resource to JSON
```powershell
$Workflowbody | ConvertTo-JSON
```


[[Back to top]](#) 

