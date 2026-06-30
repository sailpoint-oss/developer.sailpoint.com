---
id: list-workflows-v1401-response
title: ListWorkflowsV1401Response
pagination_label: ListWorkflowsV1401Response
sidebar_label: ListWorkflowsV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListWorkflowsV1401Response', 'ListWorkflowsV1401Response'] 
slug: /tools/sdk/powershell/workflows/models/list-workflows-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListWorkflowsV1401Response', 'ListWorkflowsV1401Response']
---


# ListWorkflowsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListWorkflowsV1401Response = Initialize-ListWorkflowsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListWorkflowsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

