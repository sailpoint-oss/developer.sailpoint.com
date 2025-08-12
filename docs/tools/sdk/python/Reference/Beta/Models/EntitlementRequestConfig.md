---
id: beta-entitlement-request-config
title: EntitlementRequestConfig
pagination_label: EntitlementRequestConfig
sidebar_label: EntitlementRequestConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementRequestConfig', 'BetaEntitlementRequestConfig'] 
slug: /tools/sdk/python/beta/models/entitlement-request-config
tags: ['SDK', 'Software Development Kit', 'EntitlementRequestConfig', 'BetaEntitlementRequestConfig']
---

# EntitlementRequestConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_request_config** | [**EntitlementAccessRequestConfig**](entitlement-access-request-config) |  | [optional] 
**revocation_request_config** | [**EntitlementRevocationRequestConfig**](entitlement-revocation-request-config) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.entitlement_request_config import EntitlementRequestConfig

entitlement_request_config = EntitlementRequestConfig(
access_request_config=sailpoint.beta.models.entitlement_access_request_config.Entitlement Access Request Config(
                    approval_schemes = [
                        sailpoint.beta.models.entitlement_approval_scheme.Entitlement Approval Scheme(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = 'e3eab852-8315-467f-9de7-70eda97f63c8', )
                        ], 
                    request_comment_required = True, 
                    denial_comment_required = False, 
                    reauthorization_required = False, ),
revocation_request_config=sailpoint.beta.models.entitlement_revocation_request_config.Entitlement Revocation Request Config(
                    approval_schemes = [
                        sailpoint.beta.models.entitlement_approval_scheme.Entitlement Approval Scheme(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = 'e3eab852-8315-467f-9de7-70eda97f63c8', )
                        ], )
)

```
[[Back to top]](#) 

