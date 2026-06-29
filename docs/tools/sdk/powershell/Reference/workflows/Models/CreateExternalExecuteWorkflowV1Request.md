---
id: create-external-execute-workflow-v1-request
title: CreateExternalExecuteWorkflowV1Request
pagination_label: CreateExternalExecuteWorkflowV1Request
sidebar_label: CreateExternalExecuteWorkflowV1Request
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateExternalExecuteWorkflowV1Request', 'CreateExternalExecuteWorkflowV1Request'] 
slug: /tools/sdk/powershell/workflows/models/create-external-execute-workflow-v1-request
tags: ['SDK', 'Software Development Kit', 'CreateExternalExecuteWorkflowV1Request', 'CreateExternalExecuteWorkflowV1Request']
---


# CreateExternalExecuteWorkflowV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarInput** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The input for the workflow | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateExternalExecuteWorkflowV1Request = Initialize-CreateExternalExecuteWorkflowV1Request  -VarInput {"customAttribute1":"value1","customAttribute2":"value2"}
```

- Convert the resource to JSON
```powershell
$CreateExternalExecuteWorkflowV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

