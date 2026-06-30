---
id: bucketaggregation
title: Bucketaggregation
pagination_label: Bucketaggregation
sidebar_label: Bucketaggregation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Bucketaggregation', 'Bucketaggregation'] 
slug: /tools/sdk/python/access-model-metadata/models/bucketaggregation
tags: ['SDK', 'Software Development Kit', 'Bucketaggregation', 'Bucketaggregation']
---

# Bucketaggregation

The bucket to group the results of the aggregation query by.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the bucket aggregate to be included in the result. | [required]
**type** | [**Buckettype**](buckettype) |  | [optional] [default to Buckettype.TERMS]
**var_field** | **str** | The field to bucket on. Prefix the field name with '@' to reference a nested object. | [required]
**size** | **int** | Maximum number of buckets to include. | [optional] 
**min_doc_count** | **int** | Minimum number of documents a bucket should have. | [optional] 
}

## Example

```python
from sailpoint.access_model_metadata.models.bucketaggregation import Bucketaggregation

bucketaggregation = Bucketaggregation(
name='Identity Locations',
type='TERMS',
var_field='attributes.city',
size=100,
min_doc_count=2
)

```
[[Back to top]](#) 

