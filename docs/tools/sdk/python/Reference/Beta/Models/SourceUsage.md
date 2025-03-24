---
id: beta-source-usage
title: SourceUsage
pagination_label: SourceUsage
sidebar_label: SourceUsage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceUsage', 'BetaSourceUsage'] 
slug: /tools/sdk/python/beta/models/source-usage
tags: ['SDK', 'Software Development Kit', 'SourceUsage', 'BetaSourceUsage']
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
from sailpoint.beta.models.source_usage import SourceUsage

source_usage = SourceUsage(
var_date='Fri Apr 21 00:00:00 UTC 2023',
count=10.45
)

```
[[Back to top]](#) 

