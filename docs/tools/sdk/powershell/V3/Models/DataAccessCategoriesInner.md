---
id: data-access-categories-inner
title: DataAccessCategoriesInner
pagination_label: DataAccessCategoriesInner
sidebar_label: DataAccessCategoriesInner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'DataAccessCategoriesInner'] 
slug: /tools/sdk/powershell/v3/models/data-access-categories-inner
tags: ['SDK', 'Software Development Kit', 'DataAccessCategoriesInner']
---


# DataAccessCategoriesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** |  Pointer to **String** | Value of the category | [optional] 
**MatchCount** |  Pointer to **Int32** | Number of matched for each category | [optional] 

## Examples

- Prepare the resource
```powershell
$DataAccessCategoriesInner = Initialize-PSSailpointDataAccessCategoriesInner  -Value email-7 `
 -MatchCount 10
```

- Convert the resource to JSON
```powershell
$DataAccessCategoriesInner | ConvertTo-JSON
```


[[Back to top]](#) 

