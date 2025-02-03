---
id: workflow-body-owner
title: WorkflowBodyOwner
pagination_label: WorkflowBodyOwner
sidebar_label: WorkflowBodyOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowBodyOwner', 'WorkflowBodyOwner'] 
slug: /tools/sdk/powershell/v3/models/workflow-body-owner
tags: ['SDK', 'Software Development Kit', 'WorkflowBodyOwner', 'WorkflowBodyOwner']
---


# WorkflowBodyOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | The type of object that is referenced | [optional] 
**Id** | **String** | The unique ID of the object | [optional] 
**Name** | **String** | The name of the object | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowBodyOwner = Initialize-PSSailpoint.V3WorkflowBodyOwner  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$WorkflowBodyOwner | ConvertTo-JSON
```


[[Back to top]](#) 

