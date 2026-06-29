---
id: create-external-execute-workflow-v1200-response
title: CreateExternalExecuteWorkflowV1200Response
pagination_label: CreateExternalExecuteWorkflowV1200Response
sidebar_label: CreateExternalExecuteWorkflowV1200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateExternalExecuteWorkflowV1200Response', 'CreateExternalExecuteWorkflowV1200Response'] 
slug: /tools/sdk/powershell/workflows/models/create-external-execute-workflow-v1200-response
tags: ['SDK', 'Software Development Kit', 'CreateExternalExecuteWorkflowV1200Response', 'CreateExternalExecuteWorkflowV1200Response']
---


# CreateExternalExecuteWorkflowV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WorkflowExecutionId** | **String** | The workflow execution id | [optional] 
**Message** | **String** | An error message if any errors occurred | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateExternalExecuteWorkflowV1200Response = Initialize-CreateExternalExecuteWorkflowV1200Response  -WorkflowExecutionId 0e11cefa-96e7-4b67-90d0-065bc1da5753 `
 -Message Workflow was not executed externally. Check enabled flag on workflow definition
```

- Convert the resource to JSON
```powershell
$CreateExternalExecuteWorkflowV1200Response | ConvertTo-JSON
```


[[Back to top]](#) 

