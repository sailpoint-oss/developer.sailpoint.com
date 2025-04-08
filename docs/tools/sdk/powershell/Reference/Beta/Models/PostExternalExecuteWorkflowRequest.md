---
id: beta-post-external-execute-workflow-request
title: PostExternalExecuteWorkflowRequest
pagination_label: PostExternalExecuteWorkflowRequest
sidebar_label: PostExternalExecuteWorkflowRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PostExternalExecuteWorkflowRequest', 'BetaPostExternalExecuteWorkflowRequest'] 
slug: /tools/sdk/powershell/beta/models/post-external-execute-workflow-request
tags: ['SDK', 'Software Development Kit', 'PostExternalExecuteWorkflowRequest', 'BetaPostExternalExecuteWorkflowRequest']
---


# PostExternalExecuteWorkflowRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarInput** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The input for the workflow | [optional] 

## Examples

- Prepare the resource
```powershell
$PostExternalExecuteWorkflowRequest = Initialize-PSSailpoint.BetaPostExternalExecuteWorkflowRequest  -VarInput {customAttribute1=value1, customAttribute2=value2}
```

- Convert the resource to JSON
```powershell
$PostExternalExecuteWorkflowRequest | ConvertTo-JSON
```


[[Back to top]](#) 

