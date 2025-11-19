---
id: v2025-workflow-all-of-creator
title: WorkflowAllOfCreator
pagination_label: WorkflowAllOfCreator
sidebar_label: WorkflowAllOfCreator
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowAllOfCreator', 'V2025WorkflowAllOfCreator'] 
slug: /tools/sdk/powershell/v2025/models/workflow-all-of-creator
tags: ['SDK', 'Software Development Kit', 'WorkflowAllOfCreator', 'V2025WorkflowAllOfCreator']
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
$WorkflowAllOfCreator = Initialize-V2025WorkflowAllOfCreator  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$WorkflowAllOfCreator | ConvertTo-JSON
```


[[Back to top]](#) 

