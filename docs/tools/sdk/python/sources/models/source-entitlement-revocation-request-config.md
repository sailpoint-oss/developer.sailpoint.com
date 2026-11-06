# SourceEntitlementRevocationRequestConfig

# SourceEntitlementRevocationRequestConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_schemes** | [**[]SourceEntitlementApprovalScheme**](source-entitlement-approval-scheme) | Ordered list of approval steps for the revocation request. Empty when no approval is required. | [optional] 
\}

## Example

```python
from sailpoint.sources.models.source_entitlement_revocation_request_config import SourceEntitlementRevocationRequestConfig

source_entitlement_revocation_request_config = SourceEntitlementRevocationRequestConfig(
approval_schemes=[
                    sailpoint.sources.models.source_entitlement_approval_scheme.Source Entitlement Approval Scheme(
                        approver_type = 'GOVERNANCE_GROUP', 
                        approver_id = 'e3eab852-8315-467f-9de7-70eda97f63c8', )
                    ]
)

```
[[Back to top]](#) 

