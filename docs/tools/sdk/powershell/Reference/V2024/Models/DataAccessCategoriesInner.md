---
id: v2024-data-access-categories-inner
title: DataAccessCategoriesInner
pagination_label: DataAccessCategoriesInner
sidebar_label: DataAccessCategoriesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DataAccessCategoriesInner', 'V2024DataAccessCategoriesInner'] 
slug: /tools/sdk/powershell/v2024/models/data-access-categories-inner
tags: ['SDK', 'Software Development Kit', 'DataAccessCategoriesInner', 'V2024DataAccessCategoriesInner']
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
$DataAccessCategoriesInner = Initialize-V2024DataAccessCategoriesInner  -Value email-7 `
 -MatchCount 10
```

- Convert the resource to JSON
```powershell
$DataAccessCategoriesInner | ConvertTo-JSON
```


[[Back to top]](#) 

