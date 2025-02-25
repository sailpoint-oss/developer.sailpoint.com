---
id: beta-cancel-access-request
title: CancelAccessRequest
pagination_label: CancelAccessRequest
sidebar_label: CancelAccessRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CancelAccessRequest', 'BetaCancelAccessRequest'] 
slug: /tools/sdk/python/beta/models/cancel-access-request
tags: ['SDK', 'Software Development Kit', 'CancelAccessRequest', 'BetaCancelAccessRequest']
---

# CancelAccessRequest

Request body payload for cancel access request endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_activity_id** | **str** | This refers to the identityRequestId. To successfully cancel an access request, you must provide the identityRequestId. | [required]
**comment** | **str** | Reason for cancelling the pending access request. | [required]
}

## Example

```python
from sailpoint.beta.models.cancel_access_request import CancelAccessRequest

cancel_access_request = CancelAccessRequest(
account_activity_id='2c9180835d2e5168015d32f890ca1581',
comment='I requested this role by mistake.'
)

```
[[Back to top]](#) 

