# RoleMetadataBulkUpdateByQueryRequestValuesInner

# RoleMetadataBulkUpdateByQueryRequestValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_key** | **str** | the key of metadata attribute | [optional] 
**attribute_value** | **[]str** | the values of attribute to be updated | [optional] 
\}

## Example

```python
from sailpoint.roles.models.role_metadata_bulk_update_by_query_request_values_inner import RoleMetadataBulkUpdateByQueryRequestValuesInner

role_metadata_bulk_update_by_query_request_values_inner = RoleMetadataBulkUpdateByQueryRequestValuesInner(
attribute_key='iscFederalClassifications',
attribute_value=["topSecret"]
)

```
[[Back to top]](#) 

