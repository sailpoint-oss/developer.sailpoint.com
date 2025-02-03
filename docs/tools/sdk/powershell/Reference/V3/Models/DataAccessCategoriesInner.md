---
id: data-access-categories-inner
title: DataAccessCategoriesInner
pagination_label: DataAccessCategoriesInner
sidebar_label: DataAccessCategoriesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DataAccessCategoriesInner', 'DataAccessCategoriesInner'] 
slug: /tools/sdk/powershell/v3/models/data-access-categories-inner
tags: ['SDK', 'Software Development Kit', 'DataAccessCategoriesInner', 'DataAccessCategoriesInner']
---


# DataAccessCategoriesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **String** | Value of the category | [optional] 
**MatchCount** | **Int32** | Number of matched for each category | [optional] 

## Examples

- Prepare the resource
```powershell
$DataAccessCategoriesInner = Initialize-PSSailpoint.V3DataAccessCategoriesInner  -Value email-7 `
 -MatchCount 10
```

- Convert the resource to JSON
```powershell
$DataAccessCategoriesInner | ConvertTo-JSON
```


[[Back to top]](#) 

