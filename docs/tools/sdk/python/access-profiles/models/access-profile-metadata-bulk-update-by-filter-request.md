# AccessProfileMetadataBulkUpdateByFilterRequest

# AccessProfileMetadataBulkUpdateByFilterRequest

Request to bulk update Access Model Metadata on every access profile matching a filter expression. A single access profile cannot be assigned more than 25 metadata values. Adding or replacing custom metadata requires a suite license.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | **str** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq*  **source.id**: *eq, in*  Supported composite operators are *and, or* | [required]
**operation** |  **Enum** [  'ADD',    'REMOVE',    'REPLACE' ] | The operation to be performed | [required]
**replace_scope** |  **Enum** [  'ALL',    'ATTRIBUTE' ] | The choice of update scope. **ATTRIBUTE** replaces only the values of the attributes named in `values`, and **ALL** replaces every metadata attribute on the access profile. | [required]
**values** | [**[]AccessProfileMetadataBulkUpdateByIdRequestValuesInner**](access-profile-metadata-bulk-update-by-id-request-values-inner) | The metadata to be updated, including attribute key and value. | [required]
\}

## Example

```python
from sailpoint.access_profiles.models.access_profile_metadata_bulk_update_by_filter_request import AccessProfileMetadataBulkUpdateByFilterRequest

access_profile_metadata_bulk_update_by_filter_request = AccessProfileMetadataBulkUpdateByFilterRequest(
filters='requestable eq false',
operation='REPLACE',
replace_scope='ATTRIBUTE',
values=[{"attribute":"iscFederalClassifications","values":["topSecret"]}]
)

```
[[Back to top]](#) 

