---
id: v2025-entitlement-request-config
title: EntitlementRequestConfig
pagination_label: EntitlementRequestConfig
sidebar_label: EntitlementRequestConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementRequestConfig', 'V2025EntitlementRequestConfig'] 
slug: /tools/sdk/python/v2025/models/entitlement-request-config
tags: ['SDK', 'Software Development Kit', 'EntitlementRequestConfig', 'V2025EntitlementRequestConfig']
---

# EntitlementRequestConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_entitlement_request** | **bool** | If this is true, entitlement requests are allowed. | [optional] [default to False]
**request_comments_required** | **bool** | If this is true, comments are required to submit entitlement requests. | [optional] [default to False]
**denied_comments_required** | **bool** | If this is true, comments are required to reject entitlement requests. | [optional] [default to False]
**grant_request_approval_schemes** | **str** | Approval schemes for granting entitlement request. This can be empty if no approval is needed. Multiple schemes must be comma-separated. The valid schemes are \"entitlementOwner\", \"sourceOwner\", \"manager\" and \"`workgroup:{id}`\". You can use multiple governance groups (workgroups).  | [optional] [default to 'sourceOwner']
}

## Example

```python
from sailpoint.v2025.models.entitlement_request_config import EntitlementRequestConfig

entitlement_request_config = EntitlementRequestConfig(
allow_entitlement_request=True,
request_comments_required=False,
denied_comments_required=False,
grant_request_approval_schemes='sourceOwner'
)

```
[[Back to top]](#) 

