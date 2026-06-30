---
id: reportconfigdto
title: Reportconfigdto
pagination_label: Reportconfigdto
sidebar_label: Reportconfigdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Reportconfigdto', 'Reportconfigdto'] 
slug: /tools/sdk/python/org-config/models/reportconfigdto
tags: ['SDK', 'Software Development Kit', 'Reportconfigdto', 'Reportconfigdto']
---

# Reportconfigdto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_name** | **str** | Name of column in report | [optional] 
**required** | **bool** | If true, column is required in all reports, and this entry is immutable. A 400 error will result from any attempt to modify the column's definition. | [optional] [default to False]
**included** | **bool** | If true, column is included in the report. A 400 error will be thrown if an attempt is made to set included=false if required==true. | [optional] [default to False]
**order** | **int** | Relative sort order for the column. Columns will be displayed left-to-right in nondecreasing order. | [optional] 
}

## Example

```python
from sailpoint.org_config.models.reportconfigdto import Reportconfigdto

reportconfigdto = Reportconfigdto(
column_name='SOD Business Name',
required=True,
included=False,
order=2
)

```
[[Back to top]](#) 

