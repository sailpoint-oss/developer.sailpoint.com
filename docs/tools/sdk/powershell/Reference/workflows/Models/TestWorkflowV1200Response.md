---
id: test-workflow-v1200-response
title: TestWorkflowV1200Response
pagination_label: TestWorkflowV1200Response
sidebar_label: TestWorkflowV1200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TestWorkflowV1200Response', 'TestWorkflowV1200Response'] 
slug: /tools/sdk/powershell/workflows/models/test-workflow-v1200-response
tags: ['SDK', 'Software Development Kit', 'TestWorkflowV1200Response', 'TestWorkflowV1200Response']
---


# TestWorkflowV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WorkflowExecutionId** | **String** | The workflow execution id | [optional] 

## Examples

- Prepare the resource
```powershell
$TestWorkflowV1200Response = Initialize-TestWorkflowV1200Response  -WorkflowExecutionId 0e11cefa-96e7-4b67-90d0-065bc1da5753
```

- Convert the resource to JSON
```powershell
$TestWorkflowV1200Response | ConvertTo-JSON
```


[[Back to top]](#) 

