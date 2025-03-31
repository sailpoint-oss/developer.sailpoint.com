---
id: beta-form-element-dynamic-data-source
title: FormElementDynamicDataSource
pagination_label: FormElementDynamicDataSource
sidebar_label: FormElementDynamicDataSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FormElementDynamicDataSource', 'BetaFormElementDynamicDataSource'] 
slug: /tools/sdk/python/beta/models/form-element-dynamic-data-source
tags: ['SDK', 'Software Development Kit', 'FormElementDynamicDataSource', 'BetaFormElementDynamicDataSource']
---

# FormElementDynamicDataSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**FormElementDynamicDataSourceConfig**](form-element-dynamic-data-source-config) |  | [optional] 
**data_source_type** |  **Enum** [  'STATIC',    'INTERNAL',    'SEARCH',    'FORM_INPUT' ] | DataSourceType is a FormElementDataSourceType value STATIC FormElementDataSourceTypeStatic INTERNAL FormElementDataSourceTypeInternal SEARCH FormElementDataSourceTypeSearch FORM_INPUT FormElementDataSourceTypeFormInput | [optional] 
}

## Example

```python
from sailpoint.beta.models.form_element_dynamic_data_source import FormElementDynamicDataSource

form_element_dynamic_data_source = FormElementDynamicDataSource(
config=sailpoint.beta.models.form_element_dynamic_data_source_config.FormElementDynamicDataSourceConfig(
                    aggregation_bucket_field = 'attributes.cloudStatus.exact', 
                    indices = [identities], 
                    object_type = 'IDENTITY', 
                    query = '*', ),
data_source_type='STATIC'
)

```
[[Back to top]](#) 

