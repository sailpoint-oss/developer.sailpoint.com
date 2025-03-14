---
id: non-employee-request-summary
title: NonEmployeeRequestSummary
pagination_label: NonEmployeeRequestSummary
sidebar_label: NonEmployeeRequestSummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NonEmployeeRequestSummary', 'NonEmployeeRequestSummary'] 
slug: /tools/sdk/python/v3/models/non-employee-request-summary
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRequestSummary', 'NonEmployeeRequestSummary']
---

# NonEmployeeRequestSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved** | **int** | The number of approved non-employee requests on all sources that *requested-for* user manages. | [optional] 
**rejected** | **int** | The number of rejected non-employee requests on all sources that *requested-for* user manages. | [optional] 
**pending** | **int** | The number of pending non-employee requests on all sources that *requested-for* user manages. | [optional] 
**non_employee_count** | **int** | The number of non-employee records on all sources that *requested-for* user manages. | [optional] 
}

## Example

```python
from sailpoint.v3.models.non_employee_request_summary import NonEmployeeRequestSummary

non_employee_request_summary = NonEmployeeRequestSummary(
approved=2,
rejected=2,
pending=2,
non_employee_count=2
)

```
[[Back to top]](#) 

