---
id: v2025-access-request-context
title: AccessRequestContext
pagination_label: AccessRequestContext
sidebar_label: AccessRequestContext
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestContext', 'V2025AccessRequestContext'] 
slug: /tools/sdk/powershell/v2025/models/access-request-context
tags: ['SDK', 'Software Development Kit', 'AccessRequestContext', 'V2025AccessRequestContext']
---


# AccessRequestContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContextAttributes** | [**[]ContextAttributeDto**](context-attribute-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestContext = Initialize-V2025AccessRequestContext  -ContextAttributes null
```

- Convert the resource to JSON
```powershell
$AccessRequestContext | ConvertTo-JSON
```


[[Back to top]](#) 

