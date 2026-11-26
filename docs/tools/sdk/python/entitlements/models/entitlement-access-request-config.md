# EntitlementAccessRequestConfig

# EntitlementAccessRequestConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_schemes** | [**[]EntitlementApprovalScheme**](entitlement-approval-scheme) | Ordered list of approval steps for the access request. Empty when no approval is required. | [optional] 
**request_comment_required** | **bool** | If the requester must provide a comment during access request. | [optional] [default to False]
**denial_comment_required** | **bool** | If the reviewer must provide a comment when denying the access request. | [optional] [default to False]
**reauthorization_required** | **bool** | Is Reauthorization Required | [optional] [default to False]
**require_end_date** | **bool** | If true, then remove date or sunset date is required in access request of the entitlement. | [optional] [default to False]
**max_permitted_access_duration** | [**EntitlementAccessRequestConfigMaxPermittedAccessDuration**](entitlement-access-request-config-max-permitted-access-duration) |  | [optional] 
**form_definition_id** | **str** | The ID of the form definition used for the access request. If specified, the form is presented to the requester during the access request process. | [optional] 
\}

## Example

```python
from sailpoint.entitlements.models.entitlement_access_request_config import EntitlementAccessRequestConfig

entitlement_access_request_config = EntitlementAccessRequestConfig(
approval_schemes=[
                    sailpoint.entitlements.models.entitlement_approval_scheme.Entitlement Approval Scheme(
                        approver_type = 'GOVERNANCE_GROUP', 
                        approver_id = 'e3eab852-8315-467f-9de7-70eda97f63c8', )
                    ],
request_comment_required=True,
denial_comment_required=False,
reauthorization_required=False,
require_end_date=True,
max_permitted_access_duration=sailpoint.entitlements.models.entitlement_access_request_config_max_permitted_access_duration.EntitlementAccessRequestConfig_maxPermittedAccessDuration(
                    value = 5, 
                    time_unit = 'DAYS', ),
form_definition_id='78258e80-e9e2-4e1a-a11f-ce0b7c62f25d'
)

```
[[Back to top]](#) 

