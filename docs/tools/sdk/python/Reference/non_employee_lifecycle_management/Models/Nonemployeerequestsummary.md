---
id: nonemployeerequestsummary
title: Nonemployeerequestsummary
pagination_label: Nonemployeerequestsummary
sidebar_label: Nonemployeerequestsummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Nonemployeerequestsummary', 'Nonemployeerequestsummary'] 
slug: /tools/sdk/python/non-employee-lifecycle-management/models/nonemployeerequestsummary
tags: ['SDK', 'Software Development Kit', 'Nonemployeerequestsummary', 'Nonemployeerequestsummary']
---

# Nonemployeerequestsummary


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
from sailpoint.non_employee_lifecycle_management.models.nonemployeerequestsummary import Nonemployeerequestsummary

nonemployeerequestsummary = Nonemployeerequestsummary(
approved=2,
rejected=2,
pending=2,
non_employee_count=2
)

```
[[Back to top]](#) 

