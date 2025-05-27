---
id: workflow-modified-by
title: WorkflowModifiedBy
pagination_label: WorkflowModifiedBy
sidebar_label: WorkflowModifiedBy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowModifiedBy', 'WorkflowModifiedBy'] 
slug: /tools/sdk/powershell/v3/models/workflow-modified-by
tags: ['SDK', 'Software Development Kit', 'WorkflowModifiedBy', 'WorkflowModifiedBy']
---


# WorkflowModifiedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] |  | [optional] 
**Id** | **String** | Identity ID | [optional] 
**Name** | **String** | Human-readable display name of identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowModifiedBy = Initialize-WorkflowModifiedBy  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Thomas Edison
```

- Convert the resource to JSON
```powershell
$WorkflowModifiedBy | ConvertTo-JSON
```


[[Back to top]](#) 

