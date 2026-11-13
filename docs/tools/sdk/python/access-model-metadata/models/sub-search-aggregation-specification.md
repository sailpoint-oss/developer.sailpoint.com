# SubSearchAggregationSpecification

# SubSearchAggregationSpecification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nested** | [**NestedAggregation**](nested-aggregation) |  | [optional] 
**metric** | [**MetricAggregation**](metric-aggregation) |  | [optional] 
**filter** | [**FilterAggregation**](filter-aggregation) |  | [optional] 
**bucket** | [**BucketAggregation**](bucket-aggregation) |  | [optional] 
**sub_aggregation** | [**Aggregations**](aggregations) |  | [optional] 
\}

## Example

```python
from sailpoint.access_model_metadata.models.sub_search_aggregation_specification import SubSearchAggregationSpecification

sub_search_aggregation_specification = SubSearchAggregationSpecification(
nested=sailpoint.access_model_metadata.models.nested_aggregation.NestedAggregation(
                    name = 'id', 
                    type = 'access', ),
metric=sailpoint.access_model_metadata.models.metric_aggregation.MetricAggregation(
                    name = 'Access Name Count', 
                    type = 'UNIQUE_COUNT', 
                    field = '@access.name', ),
filter=sailpoint.access_model_metadata.models.filter_aggregation.FilterAggregation(
                    name = 'Entitlements', 
                    type = 'TERM', 
                    field = 'access.type', 
                    value = 'ENTITLEMENT', ),
bucket=sailpoint.access_model_metadata.models.bucket_aggregation.BucketAggregation(
                    name = 'Identity Locations', 
                    type = 'TERMS', 
                    field = 'attributes.city', 
                    size = 100, 
                    min_doc_count = 2, ),
sub_aggregation=sailpoint.access_model_metadata.models.aggregations.Aggregations(
                    nested = sailpoint.access_model_metadata.models.nested_aggregation.NestedAggregation(
                        name = 'id', 
                        type = 'access', ), 
                    metric = sailpoint.access_model_metadata.models.metric_aggregation.MetricAggregation(
                        name = 'Access Name Count', 
                        type = 'UNIQUE_COUNT', 
                        field = '@access.name', ), 
                    filter = sailpoint.access_model_metadata.models.filter_aggregation.FilterAggregation(
                        name = 'Entitlements', 
                        field = 'access.type', 
                        value = 'ENTITLEMENT', ), 
                    bucket = sailpoint.access_model_metadata.models.bucket_aggregation.BucketAggregation(
                        name = 'Identity Locations', 
                        field = 'attributes.city', 
                        size = 100, 
                        min_doc_count = 2, ), )
)

```
[[Back to top]](#) 

