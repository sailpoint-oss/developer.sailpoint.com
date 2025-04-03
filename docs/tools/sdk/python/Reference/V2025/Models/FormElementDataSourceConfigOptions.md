---
id: v2025-form-element-data-source-config-options
title: FormElementDataSourceConfigOptions
pagination_label: FormElementDataSourceConfigOptions
sidebar_label: FormElementDataSourceConfigOptions
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FormElementDataSourceConfigOptions', 'V2025FormElementDataSourceConfigOptions'] 
slug: /tools/sdk/python/v2025/models/form-element-data-source-config-options
tags: ['SDK', 'Software Development Kit', 'FormElementDataSourceConfigOptions', 'V2025FormElementDataSourceConfigOptions']
---

# FormElementDataSourceConfigOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | Label is the main label to display to the user when selecting this option | [optional] 
**sub_label** | **str** | SubLabel is the sub label to display below the label in diminutive styling to help describe or identify this option | [optional] 
**value** | **str** | Value is the value to save as an entry when the user selects this option | [optional] 
}

## Example

```python
from sailpoint.v2025.models.form_element_data_source_config_options import FormElementDataSourceConfigOptions

form_element_data_source_config_options = FormElementDataSourceConfigOptions(
label='regression-test-access-request-07c55dd6-3056-430a-86b5-fccc395bb6c5',
sub_label='',
value='e96674448eba4ca1ba04eee999a8f3cd'
)

```
[[Back to top]](#) 

