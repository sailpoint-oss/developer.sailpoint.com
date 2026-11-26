# RoleMetadataBulkUpdateByFilterRequestValuesInner

# RoleMetadataBulkUpdateByFilterRequestValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_key** | **str** | the key of metadata attribute | [optional] 
**values** | **[]str** | the values of attribute to be updated | [required]
\}

## Example

```python
from sailpoint.roles.models.role_metadata_bulk_update_by_filter_request_values_inner import RoleMetadataBulkUpdateByFilterRequestValuesInner

role_metadata_bulk_update_by_filter_request_values_inner = RoleMetadataBulkUpdateByFilterRequestValuesInner(
attribute_key='iscFederalClassifications',
values=["secret"]
)

```
[[Back to top]](#) 

