---
id: v2024-form-element-preview-request
title: FormElementPreviewRequest
pagination_label: FormElementPreviewRequest
sidebar_label: FormElementPreviewRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FormElementPreviewRequest', 'V2024FormElementPreviewRequest'] 
slug: /tools/sdk/python/v2024/models/form-element-preview-request
tags: ['SDK', 'Software Development Kit', 'FormElementPreviewRequest', 'V2024FormElementPreviewRequest']
---

# FormElementPreviewRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source** | [**FormElementDynamicDataSource**](form-element-dynamic-data-source) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.form_element_preview_request import FormElementPreviewRequest

form_element_preview_request = FormElementPreviewRequest(
data_source=sailpoint.v2024.models.form_element_dynamic_data_source.FormElementDynamicDataSource(
                    config = sailpoint.v2024.models.form_element_dynamic_data_source_config.FormElementDynamicDataSourceConfig(
                        aggregation_bucket_field = 'attributes.cloudStatus.exact', 
                        indices = [identities], 
                        object_type = 'IDENTITY', 
                        query = '*', ), 
                    data_source_type = 'STATIC', )
)

```
[[Back to top]](#) 

