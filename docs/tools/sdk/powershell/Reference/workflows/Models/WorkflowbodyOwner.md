---
id: workflowbody-owner
title: WorkflowbodyOwner
pagination_label: WorkflowbodyOwner
sidebar_label: WorkflowbodyOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowbodyOwner', 'WorkflowbodyOwner'] 
slug: /tools/sdk/powershell/workflows/models/workflowbody-owner
tags: ['SDK', 'Software Development Kit', 'WorkflowbodyOwner', 'WorkflowbodyOwner']
---


# WorkflowbodyOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | The type of object that is referenced | [optional] 
**Id** | **String** | The unique ID of the object | [optional] 
**Name** | **String** | The name of the object | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowbodyOwner = Initialize-WorkflowbodyOwner  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$WorkflowbodyOwner | ConvertTo-JSON
```


[[Back to top]](#) 

