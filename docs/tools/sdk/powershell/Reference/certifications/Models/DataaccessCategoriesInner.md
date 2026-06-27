---
id: dataaccess-categories-inner
title: DataaccessCategoriesInner
pagination_label: DataaccessCategoriesInner
sidebar_label: DataaccessCategoriesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DataaccessCategoriesInner', 'DataaccessCategoriesInner'] 
slug: /tools/sdk/powershell/certifications/models/dataaccess-categories-inner
tags: ['SDK', 'Software Development Kit', 'DataaccessCategoriesInner', 'DataaccessCategoriesInner']
---


# DataaccessCategoriesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **String** | Value of the category | [optional] 
**MatchCount** | **Int32** | Number of matched for each category | [optional] 

## Examples

- Prepare the resource
```powershell
$DataaccessCategoriesInner = Initialize-DataaccessCategoriesInner  -Value email-7 `
 -MatchCount 10
```

- Convert the resource to JSON
```powershell
$DataaccessCategoriesInner | ConvertTo-JSON
```


[[Back to top]](#) 

