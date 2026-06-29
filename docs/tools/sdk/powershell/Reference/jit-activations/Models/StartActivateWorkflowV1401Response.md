---
id: start-activate-workflow-v1401-response
title: StartActivateWorkflowV1401Response
pagination_label: StartActivateWorkflowV1401Response
sidebar_label: StartActivateWorkflowV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'StartActivateWorkflowV1401Response', 'StartActivateWorkflowV1401Response'] 
slug: /tools/sdk/powershell/jitactivations/models/start-activate-workflow-v1401-response
tags: ['SDK', 'Software Development Kit', 'StartActivateWorkflowV1401Response', 'StartActivateWorkflowV1401Response']
---


# StartActivateWorkflowV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$StartActivateWorkflowV1401Response = Initialize-StartActivateWorkflowV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$StartActivateWorkflowV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

