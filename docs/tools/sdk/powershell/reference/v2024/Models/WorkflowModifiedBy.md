---
id: v2024-workflow-modified-by
title: WorkflowModifiedBy
pagination_label: WorkflowModifiedBy
sidebar_label: WorkflowModifiedBy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowModifiedBy'] 
slug: /tools/sdk/powershell/v2024/models/workflow-modified-by
tags: ['SDK', 'Software Development Kit', 'WorkflowModifiedBy']
---


# WorkflowModifiedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] |  | [optional] 
**Id** |  Pointer to **String** | Identity ID | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowModifiedBy = Initialize-PSSailpoint.V2024WorkflowModifiedBy  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Thomas Edison
```

- Convert the resource to JSON
```powershell
$WorkflowModifiedBy | ConvertTo-JSON
```


[[Back to top]](#) 

