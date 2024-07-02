---
id: workflow-all-of-creator
title: WorkflowAllOfCreator
pagination_label: WorkflowAllOfCreator
sidebar_label: WorkflowAllOfCreator
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'WorkflowAllOfCreator'] 
slug: /tools/sdk/powershell/v3/models/workflow-all-of-creator
tags: ['SDK', 'Software Development Kit', 'WorkflowAllOfCreator']
---


# WorkflowAllOfCreator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | Workflow creator&#39;s DTO type. | [optional] 
**Id** |  Pointer to **String** | Workflow creator&#39;s identity ID. | [optional] 
**Name** |  Pointer to **String** | Workflow creator&#39;s display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowAllOfCreator = Initialize-WorkflowAllOfCreator  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$WorkflowAllOfCreator | ConvertTo-JSON
```


[[Back to top]](#) 

