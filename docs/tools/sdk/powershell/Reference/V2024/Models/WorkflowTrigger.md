---
id: v2024-workflow-trigger
title: WorkflowTrigger
pagination_label: WorkflowTrigger
sidebar_label: WorkflowTrigger
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowTrigger', 'V2024WorkflowTrigger'] 
slug: /tools/sdk/powershell/v2024/models/workflow-trigger
tags: ['SDK', 'Software Development Kit', 'WorkflowTrigger', 'V2024WorkflowTrigger']
---


# WorkflowTrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "EVENT",    "EXTERNAL",    "SCHEDULED",    "" ] | The trigger type | [required]
**DisplayName** | **String** |  | [optional] 
**Attributes** | [**WorkflowTriggerAttributes**](workflow-trigger-attributes) |  | [required]

## Examples

- Prepare the resource
```powershell
$WorkflowTrigger = Initialize-PSSailpoint.V2024WorkflowTrigger  -Type EVENT `
 -DisplayName null `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$WorkflowTrigger | ConvertTo-JSON
```


[[Back to top]](#) 

