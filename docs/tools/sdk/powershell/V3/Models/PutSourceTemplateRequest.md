---
id: put-source-template-request
title: PutSourceTemplateRequest
pagination_label: PutSourceTemplateRequest
sidebar_label: PutSourceTemplateRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'PutSourceTemplateRequest'] 
slug: /tools/sdk/powershell/v3/models/put-source-template-request
tags: ['SDK', 'Software Development Kit', 'PutSourceTemplateRequest']
---


# PutSourceTemplateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** |  **System.IO.FileInfo** | connector source template xml file | 

## Examples

- Prepare the resource
```powershell
$PutSourceTemplateRequest = Initialize-PutSourceTemplateRequest  -File null
```

- Convert the resource to JSON
```powershell
$PutSourceTemplateRequest | ConvertTo-JSON
```


[[Back to top]](#) 

