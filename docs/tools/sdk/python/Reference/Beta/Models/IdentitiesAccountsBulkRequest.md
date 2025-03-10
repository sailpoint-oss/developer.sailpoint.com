---
id: beta-identities-accounts-bulk-request
title: IdentitiesAccountsBulkRequest
pagination_label: IdentitiesAccountsBulkRequest
sidebar_label: IdentitiesAccountsBulkRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentitiesAccountsBulkRequest', 'BetaIdentitiesAccountsBulkRequest'] 
slug: /tools/sdk/python/beta/models/identities-accounts-bulk-request
tags: ['SDK', 'Software Development Kit', 'IdentitiesAccountsBulkRequest', 'BetaIdentitiesAccountsBulkRequest']
---

# IdentitiesAccountsBulkRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_ids** | **[]str** | The ids of the identities for which enable/disable accounts. | [optional] 
}

## Example

```python
from sailpoint.beta.models.identities_accounts_bulk_request import IdentitiesAccountsBulkRequest

identities_accounts_bulk_request = IdentitiesAccountsBulkRequest(
identity_ids=[2c91808384203c2d018437e631158308, 2c9180858082150f0180893dbaf553fe]
)

```
[[Back to top]](#) 

