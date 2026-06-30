---
id: formelementpreviewrequest
title: Formelementpreviewrequest
pagination_label: Formelementpreviewrequest
sidebar_label: Formelementpreviewrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Formelementpreviewrequest', 'Formelementpreviewrequest'] 
slug: /tools/sdk/python/custom-forms/models/formelementpreviewrequest
tags: ['SDK', 'Software Development Kit', 'Formelementpreviewrequest', 'Formelementpreviewrequest']
---

# Formelementpreviewrequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source** | [**Formelementdynamicdatasource**](formelementdynamicdatasource) |  | [optional] 
}

## Example

```python
from sailpoint.custom_forms.models.formelementpreviewrequest import Formelementpreviewrequest

formelementpreviewrequest = Formelementpreviewrequest(
data_source=sailpoint.custom_forms.models.formelementdynamicdatasource.formelementdynamicdatasource(
                    config = sailpoint.custom_forms.models.formelementdynamicdatasourceconfig.formelementdynamicdatasourceconfig(
                        aggregation_bucket_field = 'attributes.cloudStatus.exact', 
                        indices = ["identities"], 
                        object_type = 'IDENTITY', 
                        query = '*', ), 
                    data_source_type = 'STATIC', )
)

```
[[Back to top]](#) 

