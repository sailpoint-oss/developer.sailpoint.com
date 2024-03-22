---
id: workflow-body-owner
title: WorkflowBodyOwner
pagination_label: WorkflowBodyOwner
sidebar_label: WorkflowBodyOwner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'WorkflowBodyOwner'] 
slug: /tools/sdk/powershell/v3/models/workflow-body-owner
tags: ['SDK', 'Software Development Kit', 'WorkflowBodyOwner']
---


# WorkflowBodyOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | The type of object that is referenced | [optional] 
**Id** |  Pointer to **String** | The unique ID of the object | [optional] 
**Name** |  Pointer to **String** | The name of the object | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowBodyOwner = Initialize-PSSailpointWorkflowBodyOwner  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$WorkflowBodyOwner | ConvertTo-JSON
```


[[Back to top]](#) 

