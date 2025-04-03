---
id: bucket-aggregation
title: BucketAggregation
pagination_label: BucketAggregation
sidebar_label: BucketAggregation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BucketAggregation', 'BucketAggregation'] 
slug: /tools/sdk/python/v3/models/bucket-aggregation
tags: ['SDK', 'Software Development Kit', 'BucketAggregation', 'BucketAggregation']
---

# BucketAggregation

The bucket to group the results of the aggregation query by.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the bucket aggregate to be included in the result. | [required]
**type** | [**BucketType**](bucket-type) |  | [optional] [default to BucketType.TERMS]
**var_field** | **str** | The field to bucket on. Prefix the field name with '@' to reference a nested object. | [required]
**size** | **int** | Maximum number of buckets to include. | [optional] 
**min_doc_count** | **int** | Minimum number of documents a bucket should have. | [optional] 
}

## Example

```python
from sailpoint.v3.models.bucket_aggregation import BucketAggregation

bucket_aggregation = BucketAggregation(
name='Identity Locations',
type='TERMS',
var_field='attributes.city',
size=100,
min_doc_count=2
)

```
[[Back to top]](#) 

