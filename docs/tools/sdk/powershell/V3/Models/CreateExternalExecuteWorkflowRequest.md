---
id: create-external-execute-workflow-request
title: CreateExternalExecuteWorkflowRequest
pagination_label: CreateExternalExecuteWorkflowRequest
sidebar_label: CreateExternalExecuteWorkflowRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CreateExternalExecuteWorkflowRequest'] 
slug: /tools/sdk/powershell/v3/models/create-external-execute-workflow-request
tags: ['SDK', 'Software Development Kit', 'CreateExternalExecuteWorkflowRequest']
---


# CreateExternalExecuteWorkflowRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarInput** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | The input for the workflow | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateExternalExecuteWorkflowRequest = Initialize-CreateExternalExecuteWorkflowRequest  -VarInput {customAttribute1=value1, customAttribute2=value2}
```

- Convert the resource to JSON
```powershell
$CreateExternalExecuteWorkflowRequest | ConvertTo-JSON
```


[[Back to top]](#) 

