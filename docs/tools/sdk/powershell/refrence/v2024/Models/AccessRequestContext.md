---
id: access-request-context
title: AccessRequestContext
pagination_label: AccessRequestContext
sidebar_label: AccessRequestContext
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestContext'] 
slug: /tools/sdk/powershell/v2024/models/access-request-context
tags: ['SDK', 'Software Development Kit', 'AccessRequestContext']
---


# AccessRequestContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContextAttributes** |  Pointer to [**[]ContextAttributeDto**](context-attribute-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestContext = Initialize-PSSailpoint.V2024AccessRequestContext  -ContextAttributes null
```

- Convert the resource to JSON
```powershell
$AccessRequestContext | ConvertTo-JSON
```


[[Back to top]](#) 

