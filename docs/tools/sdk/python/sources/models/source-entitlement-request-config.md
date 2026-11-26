# SourceEntitlementRequestConfig

# SourceEntitlementRequestConfig

Entitlement Request Configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_request_config** | [**SourceEntitlementAccessRequestConfig**](source-entitlement-access-request-config) |  | [optional] 
**revocation_request_config** | [**SourceEntitlementRevocationRequestConfig**](source-entitlement-revocation-request-config) |  | [optional] 
\}

## Example

```python
from sailpoint.sources.models.source_entitlement_request_config import SourceEntitlementRequestConfig

source_entitlement_request_config = SourceEntitlementRequestConfig(
access_request_config=sailpoint.sources.models.source_entitlement_access_request_config.Source Entitlement Access Request Config(
                    approval_schemes = [
                        sailpoint.sources.models.source_entitlement_approval_scheme.Source Entitlement Approval Scheme(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = 'e3eab852-8315-467f-9de7-70eda97f63c8', )
                        ], 
                    request_comment_required = True, 
                    denial_comment_required = False, 
                    reauthorization_required = False, 
                    require_end_date = True, 
                    max_permitted_access_duration = sailpoint.sources.models.source_entitlement_access_request_config_max_permitted_access_duration.SourceEntitlementAccessRequestConfig_maxPermittedAccessDuration(
                        value = 5, 
                        time_unit = 'DAYS', ), 
                    form_definition_id = '78258e80-e9e2-4e1a-a11f-ce0b7c62f25d', ),
revocation_request_config=sailpoint.sources.models.source_entitlement_revocation_request_config.Source Entitlement Revocation Request Config(
                    approval_schemes = [
                        sailpoint.sources.models.source_entitlement_approval_scheme.Source Entitlement Approval Scheme(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = 'e3eab852-8315-467f-9de7-70eda97f63c8', )
                        ], )
)

```
[[Back to top]](#) 

