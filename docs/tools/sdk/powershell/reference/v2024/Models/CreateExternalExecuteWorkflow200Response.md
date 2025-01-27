---
id: create-external-execute-workflow200-response
title: CreateExternalExecuteWorkflow200Response
pagination_label: CreateExternalExecuteWorkflow200Response
sidebar_label: CreateExternalExecuteWorkflow200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateExternalExecuteWorkflow200Response'] 
slug: /tools/sdk/powershell/v2024/models/create-external-execute-workflow200-response
tags: ['SDK', 'Software Development Kit', 'CreateExternalExecuteWorkflow200Response']
---


# CreateExternalExecuteWorkflow200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WorkflowExecutionId** |  Pointer to **String** | The workflow execution id | [optional] 
**Message** |  Pointer to **String** | An error message if any errors occurred | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateExternalExecuteWorkflow200Response = Initialize-PSSailpoint.V2024CreateExternalExecuteWorkflow200Response  -WorkflowExecutionId 0e11cefa-96e7-4b67-90d0-065bc1da5753 `
 -Message Workflow was not executed externally. Check enabled flag on workflow definition
```

- Convert the resource to JSON
```powershell
$CreateExternalExecuteWorkflow200Response | ConvertTo-JSON
```


[[Back to top]](#) 

