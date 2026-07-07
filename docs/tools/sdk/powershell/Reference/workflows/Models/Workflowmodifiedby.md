---
id: workflowmodifiedby
title: Workflowmodifiedby
pagination_label: Workflowmodifiedby
sidebar_label: Workflowmodifiedby
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Workflowmodifiedby', 'Workflowmodifiedby'] 
slug: /tools/sdk/powershell/workflows/models/workflowmodifiedby
tags: ['SDK', 'Software Development Kit', 'Workflowmodifiedby', 'Workflowmodifiedby']
---


# Workflowmodifiedby

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] |  | [optional] 
**Id** | **String** | Identity ID | [optional] 
**Name** | **String** | Human-readable display name of identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$Workflowmodifiedby = Initialize-Workflowmodifiedby  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Thomas Edison
```

- Convert the resource to JSON
```powershell
$Workflowmodifiedby | ConvertTo-JSON
```


[[Back to top]](#) 

