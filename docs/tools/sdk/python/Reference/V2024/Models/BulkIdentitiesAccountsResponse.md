---
id: v2024-bulk-identities-accounts-response
title: BulkIdentitiesAccountsResponse
pagination_label: BulkIdentitiesAccountsResponse
sidebar_label: BulkIdentitiesAccountsResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BulkIdentitiesAccountsResponse', 'V2024BulkIdentitiesAccountsResponse'] 
slug: /tools/sdk/python/v2024/models/bulk-identities-accounts-response
tags: ['SDK', 'Software Development Kit', 'BulkIdentitiesAccountsResponse', 'V2024BulkIdentitiesAccountsResponse']
---

# BulkIdentitiesAccountsResponse

Bulk response object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of bulk request item. | [optional] 
**status_code** | **int** | Response status value. | [optional] 
**message** | **str** | Status containing additional context information about failures. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.bulk_identities_accounts_response import BulkIdentitiesAccountsResponse

bulk_identities_accounts_response = BulkIdentitiesAccountsResponse(
id='2c9180858082150f0180893dbaf553fe',
status_code=404,
message='Referenced identity "2c9180858082150f0180893dbaf553fe" was not found.'
)

```
[[Back to top]](#) 

