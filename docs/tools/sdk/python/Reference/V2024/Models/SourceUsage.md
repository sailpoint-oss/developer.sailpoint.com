---
id: v2024-source-usage
title: SourceUsage
pagination_label: SourceUsage
sidebar_label: SourceUsage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceUsage', 'V2024SourceUsage'] 
slug: /tools/sdk/python/v2024/models/source-usage
tags: ['SDK', 'Software Development Kit', 'SourceUsage', 'V2024SourceUsage']
---

# SourceUsage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **date** | The first day of the month for which activity is aggregated. | [optional] 
**count** | **float** | The average number of days that accounts were active within this source, for the month. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.source_usage import SourceUsage

source_usage = SourceUsage(
var_date='Thu Apr 20 20:00:00 EDT 2023',
count=10.45
)

```
[[Back to top]](#) 

