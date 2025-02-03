---
id: beta-workflow-all-of-creator
title: WorkflowAllOfCreator
pagination_label: WorkflowAllOfCreator
sidebar_label: WorkflowAllOfCreator
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowAllOfCreator', 'BetaWorkflowAllOfCreator'] 
slug: /tools/sdk/powershell/beta/models/workflow-all-of-creator
tags: ['SDK', 'Software Development Kit', 'WorkflowAllOfCreator', 'BetaWorkflowAllOfCreator']
---


# WorkflowAllOfCreator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Workflow creator's DTO type. | [optional] 
**Id** | **String** | Workflow creator's identity ID. | [optional] 
**Name** | **String** | Workflow creator's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowAllOfCreator = Initialize-PSSailpoint.BetaWorkflowAllOfCreator  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$WorkflowAllOfCreator | ConvertTo-JSON
```


[[Back to top]](#) 

