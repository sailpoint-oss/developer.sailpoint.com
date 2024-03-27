---
id: form-item-details
title: FormItemDetails
pagination_label: FormItemDetails
sidebar_label: FormItemDetails
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'FormItemDetails'] 
slug: /tools/sdk/powershell/v3/models/form-item-details
tags: ['SDK', 'Software Development Kit', 'FormItemDetails']
---


# FormItemDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | Name of the FormItem | [optional] 

## Examples

- Prepare the resource
```powershell
$FormItemDetails = Initialize-PSSailpointFormItemDetails  -Name Field1
```

- Convert the resource to JSON
```powershell
$FormItemDetails | ConvertTo-JSON
```


[[Back to top]](#) 

