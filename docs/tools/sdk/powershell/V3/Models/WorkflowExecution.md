---
id: workflow-execution
title: WorkflowExecution
pagination_label: WorkflowExecution
sidebar_label: WorkflowExecution
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'WorkflowExecution'] 
slug: /tools/sdk/powershell/v3/models/workflow-execution
tags: ['SDK', 'Software Development Kit', 'WorkflowExecution']
---


# WorkflowExecution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The workflow execution ID | [optional] 
**WorkflowId** |  Pointer to **String** | The workflow ID | [optional] 
**RequestId** |  Pointer to **String** | This backend ID tracks a workflow request in the system. You can provide this ID in a customer support ticket for debugging purposes. | [optional] 
**StartTime** |  Pointer to **System.DateTime** | The date/time the workflow started | [optional] 
**CloseTime** |  Pointer to **System.DateTime** | The date/time the workflow ended | [optional] 
**Status** |  Pointer to  **Enum** [  "Completed",    "Failed",    "Canceled",    "Running" ] | The workflow execution status | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowExecution = Initialize-PSSailpointWorkflowExecution  -Id b393f4e2-4785-4d7f-ab27-3a6b8ded4c81 `
 -WorkflowId d201c5d9-d37b-4a2f-af14-66414f39d568 `
 -RequestId 41e12a74fa7b4a6a98ae47887b64acdb `
 -StartTime 2022-02-07T20:13:29.356648026Z `
 -CloseTime 2022-02-07T20:13:31.682410165Z `
 -Status Completed
```

- Convert the resource to JSON
```powershell
$WorkflowExecution | ConvertTo-JSON
```


[[Back to top]](#) 

