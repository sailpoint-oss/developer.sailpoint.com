---
id: tag2
title: Tag2
pagination_label: Tag2
sidebar_label: Tag2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Tag2', 'Tag2'] 
slug: /tools/sdk/powershell/tags/models/tag2
tags: ['SDK', 'Software Development Kit', 'Tag2', 'Tag2']
---


# Tag2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Tag id | [required][readonly] 
**Name** | **String** | Name of the tag. | [required]
**Created** | **System.DateTime** | Date the tag was created. | [required][readonly] 
**Modified** | **System.DateTime** | Date the tag was last modified. | [required][readonly] 
**TagCategoryRefs** | [**[]Tag2TagCategoryRefsInner**](tag2-tag-category-refs-inner) |  | [required][readonly] 

## Examples

- Prepare the resource
```powershell
$Tag2 = Initialize-Tag2  -Id 449ecdc0-d4ff-4341-acf6-92f6f7ce604f `
 -Name PCI `
 -Created 2022-05-04T14:48:49Z `
 -Modified 2022-07-14T16:31:11Z `
 -TagCategoryRefs null
```

- Convert the resource to JSON
```powershell
$Tag2 | ConvertTo-JSON
```


[[Back to top]](#) 

