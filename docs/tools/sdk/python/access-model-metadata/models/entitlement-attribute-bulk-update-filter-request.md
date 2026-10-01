# EntitlementAttributeBulkUpdateFilterRequest

# EntitlementAttributeBulkUpdateFilterRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | **str** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results) Filtering is supported for the following fields and operators:  **id**: *eq* | [optional] 
**operation** |  **Enum** [  'ADD',    'REMOVE',    'REPLACE' ] | Operation to perform on the attributes in the bulk update request. | [optional] 
**replace_scope** |  **Enum** [  'ALL',    'ATTRIBUTE' ] | The choice of update scope. | [optional] 
**values** | [**[]BulkUpdateAMMKeyValueInner**](bulk-update-amm-key-value-inner) | The metadata to be updated, including attribute and values. | [optional] 
\}

## Example

```python
from sailpoint.access_model_metadata.models.entitlement_attribute_bulk_update_filter_request import EntitlementAttributeBulkUpdateFilterRequest

entitlement_attribute_bulk_update_filter_request = EntitlementAttributeBulkUpdateFilterRequest(
filters='id eq 2c9180867817ac4d017817c491119a20',
operation='add',
replace_scope='attribute',
values=[{"attribute":"iscFederalClassifications","values":["topSecret"]}]
)

```
[[Back to top]](#) 

