---
id: base-document
title: BaseDocument
pagination_label: BaseDocument
sidebar_label: BaseDocument
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'BaseDocument'] 
slug: /tools/sdk/powershell/v3/models/base-document
tags: ['SDK', 'Software Development Kit', 'BaseDocument']
---


# BaseDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** |  | 
**Name** |  **String** |  | 
**Type** |  [**DocumentType**](document-type) |  | 

## Examples

- Prepare the resource
```powershell
$BaseDocument = Initialize-BaseDocument  -Id 2c91808375d8e80a0175e1f88a575222 `
 -Name john.doe `
 -Type null
```

- Convert the resource to JSON
```powershell
$BaseDocument | ConvertTo-JSON
```


[[Back to top]](#) 

