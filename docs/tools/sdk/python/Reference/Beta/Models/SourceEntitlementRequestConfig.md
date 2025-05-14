---
id: beta-source-entitlement-request-config
title: SourceEntitlementRequestConfig
pagination_label: SourceEntitlementRequestConfig
sidebar_label: SourceEntitlementRequestConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceEntitlementRequestConfig', 'BetaSourceEntitlementRequestConfig'] 
slug: /tools/sdk/python/beta/models/source-entitlement-request-config
tags: ['SDK', 'Software Development Kit', 'SourceEntitlementRequestConfig', 'BetaSourceEntitlementRequestConfig']
---

# SourceEntitlementRequestConfig

Entitlement Request Configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_request_config** | [**EntitlementAccessRequestConfig**](entitlement-access-request-config) |  | [optional] 
**revocation_request_config** | [**EntitlementRevocationRequestConfig**](entitlement-revocation-request-config) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.source_entitlement_request_config import SourceEntitlementRequestConfig

source_entitlement_request_config = SourceEntitlementRequestConfig(
access_request_config=sailpoint.beta.models.entitlement_access_request_config.EntitlementAccessRequestConfig(
                    approval_schemes = [
                        sailpoint.beta.models.entitlement_approval_scheme.EntitlementApprovalScheme(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = 'e3eab852-8315-467f-9de7-70eda97f63c8', )
                        ], 
                    request_comment_required = True, 
                    denial_comment_required = False, 
                    reauthorization_required = False, ),
revocation_request_config=sailpoint.beta.models.entitlement_revocation_request_config.EntitlementRevocationRequestConfig(
                    approval_schemes = [
                        sailpoint.beta.models.entitlement_approval_scheme.EntitlementApprovalScheme(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = 'e3eab852-8315-467f-9de7-70eda97f63c8', )
                        ], )
)

```
[[Back to top]](#) 

