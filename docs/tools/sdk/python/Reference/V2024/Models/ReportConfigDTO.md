---
id: v2024-report-config-dto
title: ReportConfigDTO
pagination_label: ReportConfigDTO
sidebar_label: ReportConfigDTO
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ReportConfigDTO', 'V2024ReportConfigDTO'] 
slug: /tools/sdk/python/v2024/models/report-config-dto
tags: ['SDK', 'Software Development Kit', 'ReportConfigDTO', 'V2024ReportConfigDTO']
---

# ReportConfigDTO


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
from sailpoint.v2024.models.report_config_dto import ReportConfigDTO

report_config_dto = ReportConfigDTO(
column_name='SOD Business Name',
required=True,
included=False,
order=2
)

```
[[Back to top]](#) 

