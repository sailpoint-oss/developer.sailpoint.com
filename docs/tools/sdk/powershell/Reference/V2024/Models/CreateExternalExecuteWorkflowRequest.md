---
id: v2024-create-external-execute-workflow-request
title: CreateExternalExecuteWorkflowRequest
pagination_label: CreateExternalExecuteWorkflowRequest
sidebar_label: CreateExternalExecuteWorkflowRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateExternalExecuteWorkflowRequest', 'V2024CreateExternalExecuteWorkflowRequest'] 
slug: /tools/sdk/powershell/v2024/models/create-external-execute-workflow-request
tags: ['SDK', 'Software Development Kit', 'CreateExternalExecuteWorkflowRequest', 'V2024CreateExternalExecuteWorkflowRequest']
---


# CreateExternalExecuteWorkflowRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarInput** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The input for the workflow | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateExternalExecuteWorkflowRequest = Initialize-PSSailpoint.V2024CreateExternalExecuteWorkflowRequest  -VarInput {customAttribute1=value1, customAttribute2=value2}
```

- Convert the resource to JSON
```powershell
$CreateExternalExecuteWorkflowRequest | ConvertTo-JSON
```


[[Back to top]](#) 

