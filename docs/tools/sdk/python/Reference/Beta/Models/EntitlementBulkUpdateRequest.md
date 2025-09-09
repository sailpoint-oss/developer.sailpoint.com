---
id: beta-entitlement-bulk-update-request
title: EntitlementBulkUpdateRequest
pagination_label: EntitlementBulkUpdateRequest
sidebar_label: EntitlementBulkUpdateRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementBulkUpdateRequest', 'BetaEntitlementBulkUpdateRequest'] 
slug: /tools/sdk/python/beta/models/entitlement-bulk-update-request
tags: ['SDK', 'Software Development Kit', 'EntitlementBulkUpdateRequest', 'BetaEntitlementBulkUpdateRequest']
---

# EntitlementBulkUpdateRequest

Object for specifying the bulk update request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlement_ids** | **[]str** | List of entitlement ids to update | [required]
**json_patch** | [**[]JsonPatchOperation**](json-patch-operation) | List of entitlement ids to update | [required]
}

## Example

```python
from sailpoint.beta.models.entitlement_bulk_update_request import EntitlementBulkUpdateRequest

entitlement_bulk_update_request = EntitlementBulkUpdateRequest(
entitlement_ids=[2c91808a7624751a01762f19d665220d, 2c91808a7624751a01762f19d67c220e, 2c91808a7624751a01762f19d692220f],
json_patch=[{op=replace, path=/privileged, value=false}, {op=replace, path=/requestable, value=false}]
)

```
[[Back to top]](#) 

