# BucketAggregation

# BucketAggregation

The bucket to group the results of the aggregation query by.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the bucket aggregate to be included in the result. | [required]
**type** | **BucketType** |  | [optional] [default to BucketType.TERMS]
**var_field** | **str** | The field to bucket on. Prefix the field name with '@' to reference a nested object. | [required]
**size** | **int** | Maximum number of buckets to include. | [optional] 
**min_doc_count** | **int** | Minimum number of documents a bucket should have. | [optional] 
\}

## Example

```python
from sailpoint.access_model_metadata.models.bucket_aggregation import BucketAggregation

bucket_aggregation = BucketAggregation(
name='Identity Locations',
type='TERMS',
var_field='attributes.city',
size=100,
min_doc_count=2
)

```
[[Back to top]](#) 

