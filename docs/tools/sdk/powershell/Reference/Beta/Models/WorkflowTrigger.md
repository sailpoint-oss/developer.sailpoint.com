---
id: beta-workflow-trigger
title: WorkflowTrigger
pagination_label: WorkflowTrigger
sidebar_label: WorkflowTrigger
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowTrigger', 'BetaWorkflowTrigger'] 
slug: /tools/sdk/powershell/beta/models/workflow-trigger
tags: ['SDK', 'Software Development Kit', 'WorkflowTrigger', 'BetaWorkflowTrigger']
---


# WorkflowTrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "EVENT",    "EXTERNAL",    "SCHEDULED",    "" ] | The trigger type | [required]
**DisplayName** |  Pointer to **String** |  | [optional] 
**Attributes** |  [**WorkflowTriggerAttributes**](workflow-trigger-attributes) |  | [required]

## Examples

- Prepare the resource
```powershell
$WorkflowTrigger = Initialize-PSSailpoint.BetaWorkflowTrigger  -Type EVENT `
 -DisplayName null `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$WorkflowTrigger | ConvertTo-JSON
```


[[Back to top]](#) 

