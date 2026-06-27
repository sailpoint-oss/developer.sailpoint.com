---
id: subscriptionpatchrequest-inner
title: SubscriptionpatchrequestInner
pagination_label: SubscriptionpatchrequestInner
sidebar_label: SubscriptionpatchrequestInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SubscriptionpatchrequestInner', 'SubscriptionpatchrequestInner'] 
slug: /tools/sdk/python/triggers/models/subscriptionpatchrequest-inner
tags: ['SDK', 'Software Development Kit', 'SubscriptionpatchrequestInner', 'SubscriptionpatchrequestInner']
---

# SubscriptionpatchrequestInner

A JSONPatch Operation as defined by [RFC 6902 - JSON Patch](https://tools.ietf.org/html/rfc6902)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** |  **Enum** [  'add',    'remove',    'replace',    'move',    'copy' ] | The operation to be performed | [required]
**path** | **str** | A string JSON Pointer representing the target path to an element to be affected by the operation | [required]
**value** | [**SubscriptionpatchrequestInnerValue**](subscriptionpatchrequest-inner-value) |  | [optional] 
}

## Example

```python
from sailpoint.triggers.models.subscriptionpatchrequest_inner import SubscriptionpatchrequestInner

subscriptionpatchrequest_inner = SubscriptionpatchrequestInner(
op='replace',
path='/description',
value=New description
)

```
[[Back to top]](#) 

