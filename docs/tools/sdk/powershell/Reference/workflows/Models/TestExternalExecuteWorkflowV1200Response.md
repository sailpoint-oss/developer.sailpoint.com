---
id: test-external-execute-workflow-v1200-response
title: TestExternalExecuteWorkflowV1200Response
pagination_label: TestExternalExecuteWorkflowV1200Response
sidebar_label: TestExternalExecuteWorkflowV1200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TestExternalExecuteWorkflowV1200Response', 'TestExternalExecuteWorkflowV1200Response'] 
slug: /tools/sdk/powershell/workflows/models/test-external-execute-workflow-v1200-response
tags: ['SDK', 'Software Development Kit', 'TestExternalExecuteWorkflowV1200Response', 'TestExternalExecuteWorkflowV1200Response']
---


# TestExternalExecuteWorkflowV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Payload** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The input that was received | [optional] 

## Examples

- Prepare the resource
```powershell
$TestExternalExecuteWorkflowV1200Response = Initialize-TestExternalExecuteWorkflowV1200Response  -Payload {"test":"hello world"}
```

- Convert the resource to JSON
```powershell
$TestExternalExecuteWorkflowV1200Response | ConvertTo-JSON
```


[[Back to top]](#) 

