---
id: beta-tag
title: Tag
pagination_label: Tag
sidebar_label: Tag
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Tag', 'BetaTag'] 
slug: /tools/sdk/powershell/beta/models/tag
tags: ['SDK', 'Software Development Kit', 'Tag', 'BetaTag']
---


# Tag

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Tag id | [required][readonly] 
**Name** | **String** | Name of the tag. | [required]
**Created** | **System.DateTime** | Date the tag was created. | [required][readonly] 
**Modified** | **System.DateTime** | Date the tag was last modified. | [required][readonly] 
**TagCategoryRefs** | [**[]TagTagCategoryRefsInner**](tag-tag-category-refs-inner) |  | [required][readonly] 

## Examples

- Prepare the resource
```powershell
$Tag = Initialize-PSSailpoint.BetaTag  -Id 449ecdc0-d4ff-4341-acf6-92f6f7ce604f `
 -Name PCI `
 -Created 2022-05-04T14:48:49Z `
 -Modified 2022-07-14T16:31:11Z `
 -TagCategoryRefs null
```

- Convert the resource to JSON
```powershell
$Tag | ConvertTo-JSON
```


[[Back to top]](#) 

