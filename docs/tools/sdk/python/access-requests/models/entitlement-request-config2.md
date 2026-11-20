# EntitlementRequestConfig2

# EntitlementRequestConfig2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_request_config** | [**EntitlementAccessRequestConfig**](entitlement-access-request-config) |  | [optional] 
**revocation_request_config** | [**EntitlementRevocationRequestConfig**](entitlement-revocation-request-config) |  | [optional] 
\}

## Example

```python
from sailpoint.access_requests.models.entitlement_request_config2 import EntitlementRequestConfig2

entitlement_request_config2 = EntitlementRequestConfig2(
access_request_config=sailpoint.access_requests.models.entitlement_access_request_config.Entitlement Access Request Config(
                    approval_schemes = [
                        sailpoint.access_requests.models.entitlement_approval_scheme.Entitlement Approval Scheme(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = 'e3eab852-8315-467f-9de7-70eda97f63c8', )
                        ], 
                    request_comment_required = True, 
                    denial_comment_required = False, 
                    reauthorization_required = False, 
                    require_end_date = True, 
                    max_permitted_access_duration = sailpoint.access_requests.models.entitlement_access_request_config_max_permitted_access_duration.EntitlementAccessRequestConfig_maxPermittedAccessDuration(
                        value = 5, 
                        time_unit = 'DAYS', ), 
                    form_definition_id = '78258e80-e9e2-4e1a-a11f-ce0b7c62f25d', ),
revocation_request_config=sailpoint.access_requests.models.entitlement_revocation_request_config.Entitlement Revocation Request Config(
                    approval_schemes = [
                        sailpoint.access_requests.models.entitlement_approval_scheme.Entitlement Approval Scheme(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = 'e3eab852-8315-467f-9de7-70eda97f63c8', )
                        ], )
)

```
[[Back to top]](#) 

