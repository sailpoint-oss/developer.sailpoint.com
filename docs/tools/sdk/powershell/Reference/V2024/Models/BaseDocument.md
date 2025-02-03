---
id: v2024-base-document
title: BaseDocument
pagination_label: BaseDocument
sidebar_label: BaseDocument
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BaseDocument', 'V2024BaseDocument'] 
slug: /tools/sdk/powershell/v2024/models/base-document
tags: ['SDK', 'Software Development Kit', 'BaseDocument', 'V2024BaseDocument']
---


# BaseDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** |  | [required]
**Name** | **String** |  | [required]
**Type** | [**DocumentType**](document-type) |  | [required]

## Examples

- Prepare the resource
```powershell
$BaseDocument = Initialize-PSSailpoint.V2024BaseDocument  -Id 2c91808375d8e80a0175e1f88a575222 `
 -Name john.doe `
 -Type null
```

- Convert the resource to JSON
```powershell
$BaseDocument | ConvertTo-JSON
```


[[Back to top]](#) 

