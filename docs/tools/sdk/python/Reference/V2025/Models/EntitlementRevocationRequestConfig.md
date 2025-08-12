---
id: v2025-entitlement-revocation-request-config
title: EntitlementRevocationRequestConfig
pagination_label: EntitlementRevocationRequestConfig
sidebar_label: EntitlementRevocationRequestConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementRevocationRequestConfig', 'V2025EntitlementRevocationRequestConfig'] 
slug: /tools/sdk/python/v2025/models/entitlement-revocation-request-config
tags: ['SDK', 'Software Development Kit', 'EntitlementRevocationRequestConfig', 'V2025EntitlementRevocationRequestConfig']
---

# EntitlementRevocationRequestConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_schemes** | [**[]EntitlementApprovalScheme**](entitlement-approval-scheme) | Ordered list of approval steps for the access request. Empty when no approval is required. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.entitlement_revocation_request_config import EntitlementRevocationRequestConfig

entitlement_revocation_request_config = EntitlementRevocationRequestConfig(
approval_schemes=[
                    sailpoint.v2025.models.entitlement_approval_scheme.Entitlement Approval Scheme(
                        approver_type = 'GOVERNANCE_GROUP', 
                        approver_id = 'e3eab852-8315-467f-9de7-70eda97f63c8', )
                    ]
)

```
[[Back to top]](#) 

