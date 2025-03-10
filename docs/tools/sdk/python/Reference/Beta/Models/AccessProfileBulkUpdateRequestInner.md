---
id: beta-access-profile-bulk-update-request-inner
title: AccessProfileBulkUpdateRequestInner
pagination_label: AccessProfileBulkUpdateRequestInner
sidebar_label: AccessProfileBulkUpdateRequestInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessProfileBulkUpdateRequestInner', 'BetaAccessProfileBulkUpdateRequestInner'] 
slug: /tools/sdk/python/beta/models/access-profile-bulk-update-request-inner
tags: ['SDK', 'Software Development Kit', 'AccessProfileBulkUpdateRequestInner', 'BetaAccessProfileBulkUpdateRequestInner']
---

# AccessProfileBulkUpdateRequestInner

Access Profile's basic details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Access Profile ID. | [optional] 
**requestable** | **bool** | Access Profile is requestable or not. | [optional] 
}

## Example

```python
from sailpoint.beta.models.access_profile_bulk_update_request_inner import AccessProfileBulkUpdateRequestInner

access_profile_bulk_update_request_inner = AccessProfileBulkUpdateRequestInner(
id='464ae7bf-791e-49fd-b746-06a2e4a8',
requestable=False
)

```
[[Back to top]](#) 

