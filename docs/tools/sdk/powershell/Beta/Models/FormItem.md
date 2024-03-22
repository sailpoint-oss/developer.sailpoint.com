---
id: form-item
title: FormItem
pagination_label: FormItem
sidebar_label: FormItem
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'FormItem'] 
slug: /tools/sdk/powershell/beta/models/form-item
tags: ['SDK', 'Software Development Kit', 'FormItem']
---


# FormItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | Name of the FormItem | [optional] 

## Examples

- Prepare the resource
```powershell
$FormItem = Initialize-PSSailpointBetaFormItem  -Name Field1
```

- Convert the resource to JSON
```powershell
$FormItem | ConvertTo-JSON
```


[[Back to top]](#) 

