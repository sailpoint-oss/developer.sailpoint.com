---
id: beta-form-item
title: FormItem
pagination_label: FormItem
sidebar_label: FormItem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormItem', 'BetaFormItem'] 
slug: /tools/sdk/powershell/beta/models/form-item
tags: ['SDK', 'Software Development Kit', 'FormItem', 'BetaFormItem']
---


# FormItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the FormItem | [optional] 

## Examples

- Prepare the resource
```powershell
$FormItem = Initialize-PSSailpoint.BetaFormItem  -Name Field1
```

- Convert the resource to JSON
```powershell
$FormItem | ConvertTo-JSON
```


[[Back to top]](#) 

