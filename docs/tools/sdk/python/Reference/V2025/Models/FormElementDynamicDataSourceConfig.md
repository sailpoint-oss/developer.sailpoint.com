---
id: v2025-form-element-dynamic-data-source-config
title: FormElementDynamicDataSourceConfig
pagination_label: FormElementDynamicDataSourceConfig
sidebar_label: FormElementDynamicDataSourceConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FormElementDynamicDataSourceConfig', 'V2025FormElementDynamicDataSourceConfig'] 
slug: /tools/sdk/python/v2025/models/form-element-dynamic-data-source-config
tags: ['SDK', 'Software Development Kit', 'FormElementDynamicDataSourceConfig', 'V2025FormElementDynamicDataSourceConfig']
---

# FormElementDynamicDataSourceConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_bucket_field** | **str** | AggregationBucketField is the aggregation bucket field name | [optional] 
**indices** | **[]str** | Indices is a list of indices to use | [optional] 
**object_type** |  **Enum** [  'IDENTITY',    'ACCESS_PROFILE',    'SOURCES',    'ROLE',    'ENTITLEMENT' ] | ObjectType is a PreDefinedSelectOption value IDENTITY PreDefinedSelectOptionIdentity ACCESS_PROFILE PreDefinedSelectOptionAccessProfile SOURCES PreDefinedSelectOptionSources ROLE PreDefinedSelectOptionRole ENTITLEMENT PreDefinedSelectOptionEntitlement | [optional] 
**query** | **str** | Query is a text | [optional] 
}

## Example

```python
from sailpoint.v2025.models.form_element_dynamic_data_source_config import FormElementDynamicDataSourceConfig

form_element_dynamic_data_source_config = FormElementDynamicDataSourceConfig(
aggregation_bucket_field='attributes.cloudStatus.exact',
indices=[identities],
object_type='IDENTITY',
query='*'
)

```
[[Back to top]](#) 

