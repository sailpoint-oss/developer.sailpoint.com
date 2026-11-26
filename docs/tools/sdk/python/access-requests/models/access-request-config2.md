# AccessRequestConfig2

# AccessRequestConfig2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvals_must_be_external** | **bool** | If this is true, approvals must be processed by an external system. Also, if this is true, it blocks Request Center access requests and returns an error for any user who isn't an org admin. | [optional] [default to False]
**reauthorization_enabled** | **bool** | If this is true, reauthorization will be enforced for appropriately configured access items. Enablement of this feature is currently in a limited state. | [optional] [default to False]
**request_on_behalf_of_config** | [**RequestOnBehalfOfConfig2**](request-on-behalf-of-config2) |  | [optional] 
**entitlement_request_config** | [**EntitlementRequestConfig2**](entitlement-request-config2) |  | [optional] 
**gov_group_visibility_enabled** | **bool** | If this is true, requesters and requested-for users will be able to see the names of governance group members when a request is awaiting the group's approval. Up to the first 10 members of the group will be listed. | [optional] [default to False]
**machine_identity_access_request_enabled** | **bool** | If this is false, machine identity access requests and machine accounts-selection are rejected with 403 (for example, \"Machine identity access request is disabled in access request configuration.\"). Defaults to true. Exposed on access-request-config v2 only.  | [optional] [default to True]
\}

## Example

```python
from sailpoint.access_requests.models.access_request_config2 import AccessRequestConfig2

access_request_config2 = AccessRequestConfig2(
approvals_must_be_external=True,
reauthorization_enabled=True,
request_on_behalf_of_config=sailpoint.access_requests.models.request_on_behalf_of_config.Request On Behalf Of Config(
                    allow_request_on_behalf_of_anyone_by_anyone = True, 
                    allow_request_on_behalf_of_employee_by_manager = True, 
                    allow_request_on_behalf_of_for_machine_identity = True, 
                    allow_request_for_machine_by_owner = False, ),
entitlement_request_config=sailpoint.access_requests.models.entitlement_request_config.Entitlement Request Config(
                    access_request_config = sailpoint.access_requests.models.entitlement_access_request_config.Entitlement Access Request Config(
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
                    revocation_request_config = sailpoint.access_requests.models.entitlement_revocation_request_config.Entitlement Revocation Request Config(), ),
gov_group_visibility_enabled=True,
machine_identity_access_request_enabled=True
)

```
[[Back to top]](#) 

