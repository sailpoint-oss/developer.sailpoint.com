# BulkIdentitiesAccountsResponse

# BulkIdentitiesAccountsResponse

Bulk response object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of bulk request item. | [optional] 
**status_code** | **int** | Response status value. | [optional] 
**message** | **str** | Status containing additional context information about failures. | [optional] 
\}

## Example

```python
from sailpoint.accounts.models.bulk_identities_accounts_response import BulkIdentitiesAccountsResponse

bulk_identities_accounts_response = BulkIdentitiesAccountsResponse(
id='2c9180858082150f0180893dbaf553fe',
status_code=404,
message='Referenced identity "2c9180858082150f0180893dbaf553fe" was not found.'
)

```
[[Back to top]](#) 

