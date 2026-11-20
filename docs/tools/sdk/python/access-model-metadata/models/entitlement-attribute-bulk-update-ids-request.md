# EntitlementAttributeBulkUpdateIdsRequest

# EntitlementAttributeBulkUpdateIdsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlements** | **[]str** | List of entitlement IDs to update. | [optional] 
**operation** |  **Enum** [  'ADD',    'REMOVE',    'REPLACE' ] | Operation to perform on the attributes in the bulk update request. | [optional] 
**replace_scope** |  **Enum** [  'ALL',    'ATTRIBUTE' ] | The choice of update scope. | [optional] 
**values** | [**[]BulkUpdateAMMKeyValueInner**](bulk-update-amm-key-value-inner) | The metadata to be updated, including attribute and values. | [optional] 
\}

## Example

```python
from sailpoint.access_model_metadata.models.entitlement_attribute_bulk_update_ids_request import EntitlementAttributeBulkUpdateIdsRequest

entitlement_attribute_bulk_update_ids_request = EntitlementAttributeBulkUpdateIdsRequest(
entitlements=["2c9180867817ac4d017817c491119a20","2c9180867817ac4d017817c491119a21"],
operation='add',
replace_scope='attribute',
values=[{"attribute":"iscFederalClassifications","values":["topSecret"]}]
)

```
[[Back to top]](#) 

