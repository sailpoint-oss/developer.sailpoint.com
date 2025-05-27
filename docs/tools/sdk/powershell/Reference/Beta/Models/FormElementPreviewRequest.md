---
id: beta-form-element-preview-request
title: FormElementPreviewRequest
pagination_label: FormElementPreviewRequest
sidebar_label: FormElementPreviewRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormElementPreviewRequest', 'BetaFormElementPreviewRequest'] 
slug: /tools/sdk/powershell/beta/models/form-element-preview-request
tags: ['SDK', 'Software Development Kit', 'FormElementPreviewRequest', 'BetaFormElementPreviewRequest']
---


# FormElementPreviewRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DataSource** | [**FormElementDynamicDataSource**](form-element-dynamic-data-source) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$FormElementPreviewRequest = Initialize-BetaFormElementPreviewRequest  -DataSource null
```

- Convert the resource to JSON
```powershell
$FormElementPreviewRequest | ConvertTo-JSON
```


[[Back to top]](#) 

