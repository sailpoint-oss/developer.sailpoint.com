---
id: form-item-details
title: FormItemDetails
pagination_label: FormItemDetails
sidebar_label: FormItemDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormItemDetails', 'FormItemDetails'] 
slug: /tools/sdk/powershell/v3/models/form-item-details
tags: ['SDK', 'Software Development Kit', 'FormItemDetails', 'FormItemDetails']
---


# FormItemDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the FormItem | [optional] 

## Examples

- Prepare the resource
```powershell
$FormItemDetails = Initialize-PSSailpoint.V3FormItemDetails  -Name Field1
```

- Convert the resource to JSON
```powershell
$FormItemDetails | ConvertTo-JSON
```


[[Back to top]](#) 

