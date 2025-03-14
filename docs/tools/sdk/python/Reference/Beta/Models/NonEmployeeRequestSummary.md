---
id: beta-non-employee-request-summary
title: NonEmployeeRequestSummary
pagination_label: NonEmployeeRequestSummary
sidebar_label: NonEmployeeRequestSummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NonEmployeeRequestSummary', 'BetaNonEmployeeRequestSummary'] 
slug: /tools/sdk/python/beta/models/non-employee-request-summary
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRequestSummary', 'BetaNonEmployeeRequestSummary']
---

# NonEmployeeRequestSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved** | **float** | The number of approved non-employee requests on all sources that *requested-for* user manages. | [optional] 
**rejected** | **float** | The number of rejected non-employee requests on all sources that *requested-for* user manages. | [optional] 
**pending** | **float** | The number of pending non-employee requests on all sources that *requested-for* user manages. | [optional] 
**non_employee_count** | **float** | The number of non-employee records on all sources that *requested-for* user manages. | [optional] 
}

## Example

```python
from sailpoint.beta.models.non_employee_request_summary import NonEmployeeRequestSummary

non_employee_request_summary = NonEmployeeRequestSummary(
approved=1.337,
rejected=1.337,
pending=1.337,
non_employee_count=1.337
)

```
[[Back to top]](#) 

