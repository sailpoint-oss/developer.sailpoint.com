---
id: post-external-execute-workflow-request
title: PostExternalExecuteWorkflowRequest
pagination_label: PostExternalExecuteWorkflowRequest
sidebar_label: PostExternalExecuteWorkflowRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'PostExternalExecuteWorkflowRequest'] 
slug: /tools/sdk/powershell/beta/models/post-external-execute-workflow-request
tags: ['SDK', 'Software Development Kit', 'PostExternalExecuteWorkflowRequest']
---


# PostExternalExecuteWorkflowRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarInput** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | The input for the workflow | [optional] 

## Examples

- Prepare the resource
```powershell
$PostExternalExecuteWorkflowRequest = Initialize-PSSailpointBetaPostExternalExecuteWorkflowRequest  -VarInput {customAttribute1&#x3D;value1, customAttribute2&#x3D;value2}
```

- Convert the resource to JSON
```powershell
$PostExternalExecuteWorkflowRequest | ConvertTo-JSON
```


[[Back to top]](#) 

