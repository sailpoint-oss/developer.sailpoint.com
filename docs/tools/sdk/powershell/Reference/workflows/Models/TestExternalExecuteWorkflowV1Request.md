---
id: test-external-execute-workflow-v1-request
title: TestExternalExecuteWorkflowV1Request
pagination_label: TestExternalExecuteWorkflowV1Request
sidebar_label: TestExternalExecuteWorkflowV1Request
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TestExternalExecuteWorkflowV1Request', 'TestExternalExecuteWorkflowV1Request'] 
slug: /tools/sdk/powershell/workflows/models/test-external-execute-workflow-v1-request
tags: ['SDK', 'Software Development Kit', 'TestExternalExecuteWorkflowV1Request', 'TestExternalExecuteWorkflowV1Request']
---


# TestExternalExecuteWorkflowV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarInput** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The test input for the workflow | [optional] 

## Examples

- Prepare the resource
```powershell
$TestExternalExecuteWorkflowV1Request = Initialize-TestExternalExecuteWorkflowV1Request  -VarInput {"test":"hello world"}
```

- Convert the resource to JSON
```powershell
$TestExternalExecuteWorkflowV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

