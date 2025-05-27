---
id: v2025-create-external-execute-workflow-request
title: CreateExternalExecuteWorkflowRequest
pagination_label: CreateExternalExecuteWorkflowRequest
sidebar_label: CreateExternalExecuteWorkflowRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateExternalExecuteWorkflowRequest', 'V2025CreateExternalExecuteWorkflowRequest'] 
slug: /tools/sdk/powershell/v2025/models/create-external-execute-workflow-request
tags: ['SDK', 'Software Development Kit', 'CreateExternalExecuteWorkflowRequest', 'V2025CreateExternalExecuteWorkflowRequest']
---


# CreateExternalExecuteWorkflowRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarInput** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The input for the workflow | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateExternalExecuteWorkflowRequest = Initialize-V2025CreateExternalExecuteWorkflowRequest  -VarInput {customAttribute1=value1, customAttribute2=value2}
```

- Convert the resource to JSON
```powershell
$CreateExternalExecuteWorkflowRequest | ConvertTo-JSON
```


[[Back to top]](#) 

