---
id: v2024-test-external-execute-workflow-request
title: TestExternalExecuteWorkflowRequest
pagination_label: TestExternalExecuteWorkflowRequest
sidebar_label: TestExternalExecuteWorkflowRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TestExternalExecuteWorkflowRequest', 'V2024TestExternalExecuteWorkflowRequest'] 
slug: /tools/sdk/powershell/v2024/models/test-external-execute-workflow-request
tags: ['SDK', 'Software Development Kit', 'TestExternalExecuteWorkflowRequest', 'V2024TestExternalExecuteWorkflowRequest']
---


# TestExternalExecuteWorkflowRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarInput** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The test input for the workflow | [optional] 

## Examples

- Prepare the resource
```powershell
$TestExternalExecuteWorkflowRequest = Initialize-PSSailpoint.V2024TestExternalExecuteWorkflowRequest  -VarInput {test=hello world}
```

- Convert the resource to JSON
```powershell
$TestExternalExecuteWorkflowRequest | ConvertTo-JSON
```


[[Back to top]](#) 

