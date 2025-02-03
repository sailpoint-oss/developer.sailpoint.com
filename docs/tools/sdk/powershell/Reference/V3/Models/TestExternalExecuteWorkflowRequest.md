---
id: test-external-execute-workflow-request
title: TestExternalExecuteWorkflowRequest
pagination_label: TestExternalExecuteWorkflowRequest
sidebar_label: TestExternalExecuteWorkflowRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TestExternalExecuteWorkflowRequest', 'TestExternalExecuteWorkflowRequest'] 
slug: /tools/sdk/powershell/v3/models/test-external-execute-workflow-request
tags: ['SDK', 'Software Development Kit', 'TestExternalExecuteWorkflowRequest', 'TestExternalExecuteWorkflowRequest']
---


# TestExternalExecuteWorkflowRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarInput** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The test input for the workflow | [optional] 

## Examples

- Prepare the resource
```powershell
$TestExternalExecuteWorkflowRequest = Initialize-PSSailpoint.V3TestExternalExecuteWorkflowRequest  -VarInput {test&#x3D;hello world}
```

- Convert the resource to JSON
```powershell
$TestExternalExecuteWorkflowRequest | ConvertTo-JSON
```


[[Back to top]](#) 

