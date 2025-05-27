---
id: v2024-form-element-preview-request
title: FormElementPreviewRequest
pagination_label: FormElementPreviewRequest
sidebar_label: FormElementPreviewRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormElementPreviewRequest', 'V2024FormElementPreviewRequest'] 
slug: /tools/sdk/powershell/v2024/models/form-element-preview-request
tags: ['SDK', 'Software Development Kit', 'FormElementPreviewRequest', 'V2024FormElementPreviewRequest']
---


# FormElementPreviewRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DataSource** | [**FormElementDynamicDataSource**](form-element-dynamic-data-source) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$FormElementPreviewRequest = Initialize-V2024FormElementPreviewRequest  -DataSource null
```

- Convert the resource to JSON
```powershell
$FormElementPreviewRequest | ConvertTo-JSON
```


[[Back to top]](#) 

