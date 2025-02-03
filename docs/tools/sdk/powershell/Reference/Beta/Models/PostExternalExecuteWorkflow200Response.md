---
id: beta-post-external-execute-workflow200-response
title: PostExternalExecuteWorkflow200Response
pagination_label: PostExternalExecuteWorkflow200Response
sidebar_label: PostExternalExecuteWorkflow200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PostExternalExecuteWorkflow200Response', 'BetaPostExternalExecuteWorkflow200Response'] 
slug: /tools/sdk/powershell/beta/models/post-external-execute-workflow200-response
tags: ['SDK', 'Software Development Kit', 'PostExternalExecuteWorkflow200Response', 'BetaPostExternalExecuteWorkflow200Response']
---


# PostExternalExecuteWorkflow200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WorkflowExecutionId** | **String** | The workflow execution id | [optional] 
**Message** | **String** | An error message if any errors occurred | [optional] 

## Examples

- Prepare the resource
```powershell
$PostExternalExecuteWorkflow200Response = Initialize-PSSailpoint.BetaPostExternalExecuteWorkflow200Response  -WorkflowExecutionId 0e11cefa-96e7-4b67-90d0-065bc1da5753 `
 -Message Workflow was not executed externally. Check enabled flag on workflow definition
```

- Convert the resource to JSON
```powershell
$PostExternalExecuteWorkflow200Response | ConvertTo-JSON
```


[[Back to top]](#) 

