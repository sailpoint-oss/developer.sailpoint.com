---
id: cancelaccessrequest
title: Cancelaccessrequest
pagination_label: Cancelaccessrequest
sidebar_label: Cancelaccessrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Cancelaccessrequest', 'Cancelaccessrequest'] 
slug: /tools/sdk/python/access-requests/models/cancelaccessrequest
tags: ['SDK', 'Software Development Kit', 'Cancelaccessrequest', 'Cancelaccessrequest']
---

# Cancelaccessrequest

Request body payload for cancel access request endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_activity_id** | **str** | This refers to the identityRequestId. To successfully cancel an access request, you must provide the identityRequestId. | [required]
**comment** | **str** | Reason for cancelling the pending access request. | [required]
}

## Example

```python
from sailpoint.access_requests.models.cancelaccessrequest import Cancelaccessrequest

cancelaccessrequest = Cancelaccessrequest(
account_activity_id='2c9180835d2e5168015d32f890ca1581',
comment='I requested this role by mistake.'
)

```
[[Back to top]](#) 

