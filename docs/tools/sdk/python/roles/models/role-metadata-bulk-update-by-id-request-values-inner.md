# RoleMetadataBulkUpdateByIdRequestValuesInner

# RoleMetadataBulkUpdateByIdRequestValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | the key of metadata attribute | [required]
**values** | **[]str** | the values of attribute to be updated | [required]
\}

## Example

```python
from sailpoint.roles.models.role_metadata_bulk_update_by_id_request_values_inner import RoleMetadataBulkUpdateByIdRequestValuesInner

role_metadata_bulk_update_by_id_request_values_inner = RoleMetadataBulkUpdateByIdRequestValuesInner(
attribute='iscFederalClassifications',
values=["secret"]
)

```
[[Back to top]](#) 

