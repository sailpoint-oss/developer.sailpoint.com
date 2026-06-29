---
id: start-role-propagation-v1401-response
title: StartRolePropagationV1401Response
pagination_label: StartRolePropagationV1401Response
sidebar_label: StartRolePropagationV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'StartRolePropagationV1401Response', 'StartRolePropagationV1401Response'] 
slug: /tools/sdk/powershell/rolepropagation/models/start-role-propagation-v1401-response
tags: ['SDK', 'Software Development Kit', 'StartRolePropagationV1401Response', 'StartRolePropagationV1401Response']
---


# StartRolePropagationV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$StartRolePropagationV1401Response = Initialize-StartRolePropagationV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$StartRolePropagationV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

