---
id: nonemployeeapprovalsummary
title: Nonemployeeapprovalsummary
pagination_label: Nonemployeeapprovalsummary
sidebar_label: Nonemployeeapprovalsummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Nonemployeeapprovalsummary', 'Nonemployeeapprovalsummary'] 
slug: /tools/sdk/python/non-employee-lifecycle-management/models/nonemployeeapprovalsummary
tags: ['SDK', 'Software Development Kit', 'Nonemployeeapprovalsummary', 'Nonemployeeapprovalsummary']
---

# Nonemployeeapprovalsummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved** | **int** | The number of approved non-employee approval requests. | [optional] 
**pending** | **int** | The number of pending non-employee approval requests. | [optional] 
**rejected** | **int** | The number of rejected non-employee approval requests. | [optional] 
}

## Example

```python
from sailpoint.non_employee_lifecycle_management.models.nonemployeeapprovalsummary import Nonemployeeapprovalsummary

nonemployeeapprovalsummary = Nonemployeeapprovalsummary(
approved=2,
pending=2,
rejected=2
)

```
[[Back to top]](#) 

