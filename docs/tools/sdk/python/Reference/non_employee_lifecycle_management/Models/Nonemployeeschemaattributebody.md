---
id: nonemployeeschemaattributebody
title: Nonemployeeschemaattributebody
pagination_label: Nonemployeeschemaattributebody
sidebar_label: Nonemployeeschemaattributebody
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Nonemployeeschemaattributebody', 'Nonemployeeschemaattributebody'] 
slug: /tools/sdk/python/non-employee-lifecycle-management/models/nonemployeeschemaattributebody
tags: ['SDK', 'Software Development Kit', 'Nonemployeeschemaattributebody', 'Nonemployeeschemaattributebody']
---

# Nonemployeeschemaattributebody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of the attribute. Only type 'TEXT' is supported for custom attributes. | [required]
**label** | **str** | Label displayed on the UI for this schema attribute. | [required]
**technical_name** | **str** | The technical name of the attribute. Must be unique per source. | [required]
**help_text** | **str** | help text displayed by UI. | [optional] 
**placeholder** | **str** | Hint text that fills UI box. | [optional] 
**required** | **bool** | If true, the schema attribute is required for all non-employees in the source | [optional] 
}

## Example

```python
from sailpoint.non_employee_lifecycle_management.models.nonemployeeschemaattributebody import Nonemployeeschemaattributebody

nonemployeeschemaattributebody = Nonemployeeschemaattributebody(
type='TEXT',
label='Account Name',
technical_name='account.name',
help_text='The unique identifier for the account',
placeholder='Enter a unique user name for this account.',
required=True
)

```
[[Back to top]](#) 

