---
id: sourceusage
title: Sourceusage
pagination_label: Sourceusage
sidebar_label: Sourceusage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sourceusage', 'Sourceusage'] 
slug: /tools/sdk/python/source-usages/models/sourceusage
tags: ['SDK', 'Software Development Kit', 'Sourceusage', 'Sourceusage']
---

# Sourceusage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **date** | The first day of the month for which activity is aggregated. | [optional] 
**count** | **float** | The average number of days that accounts were active within this source, for the month. | [optional] 
}

## Example

```python
from sailpoint.source_usages.models.sourceusage import Sourceusage

sourceusage = Sourceusage(
var_date='Thu Apr 20 20:00:00 EDT 2023',
count=10.45
)

```
[[Back to top]](#) 

