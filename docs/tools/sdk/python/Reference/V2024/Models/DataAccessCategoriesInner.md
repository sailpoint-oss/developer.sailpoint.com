---
id: v2024-data-access-categories-inner
title: DataAccessCategoriesInner
pagination_label: DataAccessCategoriesInner
sidebar_label: DataAccessCategoriesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DataAccessCategoriesInner', 'V2024DataAccessCategoriesInner'] 
slug: /tools/sdk/python/v2024/models/data-access-categories-inner
tags: ['SDK', 'Software Development Kit', 'DataAccessCategoriesInner', 'V2024DataAccessCategoriesInner']
---

# DataAccessCategoriesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Value of the category | [optional] 
**match_count** | **int** | Number of matched for each category | [optional] 
}

## Example

```python
from sailpoint.v2024.models.data_access_categories_inner import DataAccessCategoriesInner

data_access_categories_inner = DataAccessCategoriesInner(
value='email-7',
match_count=10
)

```
[[Back to top]](#) 

