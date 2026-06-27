---
id: formelementdynamicdatasource
title: Formelementdynamicdatasource
pagination_label: Formelementdynamicdatasource
sidebar_label: Formelementdynamicdatasource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Formelementdynamicdatasource', 'Formelementdynamicdatasource'] 
slug: /tools/sdk/python/custom-forms/models/formelementdynamicdatasource
tags: ['SDK', 'Software Development Kit', 'Formelementdynamicdatasource', 'Formelementdynamicdatasource']
---

# Formelementdynamicdatasource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**Formelementdynamicdatasourceconfig**](formelementdynamicdatasourceconfig) |  | [optional] 
**data_source_type** |  **Enum** [  'STATIC',    'INTERNAL',    'SEARCH',    'FORM_INPUT' ] | DataSourceType is a FormElementDataSourceType value STATIC FormElementDataSourceTypeStatic INTERNAL FormElementDataSourceTypeInternal SEARCH FormElementDataSourceTypeSearch FORM_INPUT FormElementDataSourceTypeFormInput | [optional] 
}

## Example

```python
from sailpoint.custom_forms.models.formelementdynamicdatasource import Formelementdynamicdatasource

formelementdynamicdatasource = Formelementdynamicdatasource(
config=sailpoint.custom_forms.models.formelementdynamicdatasourceconfig.formelementdynamicdatasourceconfig(
                    aggregation_bucket_field = 'attributes.cloudStatus.exact', 
                    indices = ["identities"], 
                    object_type = 'IDENTITY', 
                    query = '*', ),
data_source_type='STATIC'
)

```
[[Back to top]](#) 

