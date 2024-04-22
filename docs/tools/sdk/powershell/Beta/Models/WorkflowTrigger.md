---
id: workflow-trigger
title: WorkflowTrigger
pagination_label: WorkflowTrigger
sidebar_label: WorkflowTrigger
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'WorkflowTrigger'] 
slug: /tools/sdk/powershell/beta/models/workflow-trigger
tags: ['SDK', 'Software Development Kit', 'WorkflowTrigger']
---


# WorkflowTrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "EVENT",    "EXTERNAL",    "SCHEDULED" ] | The trigger type | 
**Attributes** |  [**WorkflowTriggerAttributes**](workflow-trigger-attributes) |  | 

## Examples

- Prepare the resource
```powershell
$WorkflowTrigger = Initialize-BetaWorkflowTrigger  -Type EVENT `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$WorkflowTrigger | ConvertTo-JSON
```


[[Back to top]](#) 

