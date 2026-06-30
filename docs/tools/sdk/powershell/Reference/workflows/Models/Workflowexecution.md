---
id: workflowexecution
title: Workflowexecution
pagination_label: Workflowexecution
sidebar_label: Workflowexecution
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Workflowexecution', 'Workflowexecution'] 
slug: /tools/sdk/powershell/workflows/models/workflowexecution
tags: ['SDK', 'Software Development Kit', 'Workflowexecution', 'Workflowexecution']
---


# Workflowexecution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Workflow execution ID. | [optional] 
**WorkflowId** | **String** | Workflow ID. | [optional] 
**RequestId** | **String** | Backend ID that tracks a workflow request in the system. Provide this ID in a customer support ticket for debugging purposes. | [optional] 
**StartTime** | **System.DateTime** | Date/time when the workflow started. | [optional] 
**CloseTime** | **System.DateTime** | Date/time when the workflow ended. | [optional] 
**Status** |  **Enum** [  "Completed",    "Failed",    "Canceled",    "Running",    "Queued" ] | Workflow execution status. | [optional] 

## Examples

- Prepare the resource
```powershell
$Workflowexecution = Initialize-Workflowexecution  -Id b393f4e2-4785-4d7f-ab27-3a6b8ded4c81 `
 -WorkflowId d201c5d9-d37b-4a2f-af14-66414f39d568 `
 -RequestId 41e12a74fa7b4a6a98ae47887b64acdb `
 -StartTime 2022-02-07T20:13:29.356648026Z `
 -CloseTime 2022-02-07T20:13:31.682410165Z `
 -Status Completed
```

- Convert the resource to JSON
```powershell
$Workflowexecution | ConvertTo-JSON
```


[[Back to top]](#) 

