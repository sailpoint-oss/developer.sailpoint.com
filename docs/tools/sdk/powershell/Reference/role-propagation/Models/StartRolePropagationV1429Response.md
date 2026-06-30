---
id: start-role-propagation-v1429-response
title: StartRolePropagationV1429Response
pagination_label: StartRolePropagationV1429Response
sidebar_label: StartRolePropagationV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'StartRolePropagationV1429Response', 'StartRolePropagationV1429Response'] 
slug: /tools/sdk/powershell/rolepropagation/models/start-role-propagation-v1429-response
tags: ['SDK', 'Software Development Kit', 'StartRolePropagationV1429Response', 'StartRolePropagationV1429Response']
---


# StartRolePropagationV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$StartRolePropagationV1429Response = Initialize-StartRolePropagationV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$StartRolePropagationV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

