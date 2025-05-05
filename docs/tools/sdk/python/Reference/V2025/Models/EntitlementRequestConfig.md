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
**access_request_config** | [**EntitlementAccessRequestConfig**](entitlement-access-request-config) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.entitlement_request_config import EntitlementRequestConfig

entitlement_request_config = EntitlementRequestConfig(
access_request_config=sailpoint.v2025.models.entitlement_access_request_config.EntitlementAccessRequestConfig(
                    approval_schemes = [
                        sailpoint.v2025.models.entitlement_approval_scheme.EntitlementApprovalScheme(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = 'e3eab852-8315-467f-9de7-70eda97f63c8', )
                        ], 
                    request_comment_required = True, 
                    denial_comment_required = False, )
)

```
[[Back to top]](#) 

