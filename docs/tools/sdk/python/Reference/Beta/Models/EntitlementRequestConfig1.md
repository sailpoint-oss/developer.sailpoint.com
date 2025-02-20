---
id: beta-entitlement-request-config1
title: EntitlementRequestConfig1
pagination_label: EntitlementRequestConfig1
sidebar_label: EntitlementRequestConfig1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementRequestConfig1', 'BetaEntitlementRequestConfig1'] 
slug: /tools/sdk/python/beta/models/entitlement-request-config1
tags: ['SDK', 'Software Development Kit', 'EntitlementRequestConfig1', 'BetaEntitlementRequestConfig1']
---

# EntitlementRequestConfig1


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
from sailpoint.beta.models.entitlement_request_config1 import EntitlementRequestConfig1

entitlement_request_config1 = EntitlementRequestConfig1(
allow_entitlement_request=True,
request_comments_required=False,
denied_comments_required=False,
grant_request_approval_schemes='sourceOwner'
)

```
[[Back to top]](#) 

