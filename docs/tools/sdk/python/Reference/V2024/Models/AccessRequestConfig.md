---
id: v2024-access-request-config
title: AccessRequestConfig
pagination_label: AccessRequestConfig
sidebar_label: AccessRequestConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestConfig', 'V2024AccessRequestConfig'] 
slug: /tools/sdk/python/v2024/models/access-request-config
tags: ['SDK', 'Software Development Kit', 'AccessRequestConfig', 'V2024AccessRequestConfig']
---

# AccessRequestConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvals_must_be_external** | **bool** | If this is true, approvals must be processed by an external system. Also, if this is true, it blocks Request Center access requests and returns an error for any user who isn't an org admin. | [optional] [default to False]
**auto_approval_enabled** | **bool** | If this is true and the requester and reviewer are the same, the request is automatically approved. | [optional] [default to False]
**reauthorization_enabled** | **bool** | If this is true, reauthorization will be enforced for appropriately configured access items. Enablement of this feature is currently in a limited state. | [optional] [default to False]
**request_on_behalf_of_config** | [**RequestOnBehalfOfConfig**](request-on-behalf-of-config) |  | [optional] 
**approval_reminder_and_escalation_config** | [**ApprovalReminderAndEscalationConfig**](approval-reminder-and-escalation-config) |  | [optional] 
**entitlement_request_config** | [**EntitlementRequestConfig**](entitlement-request-config) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.access_request_config import AccessRequestConfig

access_request_config = AccessRequestConfig(
approvals_must_be_external=True,
auto_approval_enabled=True,
reauthorization_enabled=True,
request_on_behalf_of_config=sailpoint.v2024.models.request_on_behalf_of_config.RequestOnBehalfOfConfig(
                    allow_request_on_behalf_of_anyone_by_anyone = True, 
                    allow_request_on_behalf_of_employee_by_manager = True, ),
approval_reminder_and_escalation_config=sailpoint.v2024.models.approval_reminder_and_escalation_config.ApprovalReminderAndEscalationConfig(
                    days_until_escalation = 0, 
                    days_between_reminders = 0, 
                    max_reminders = 1, 
                    fallback_approver_ref = sailpoint.v2024.models.identity_reference_with_name_and_email.IdentityReferenceWithNameAndEmail(
                        type = 'IDENTITY', 
                        id = '5168015d32f890ca15812c9180835d2e', 
                        name = 'Alison Ferguso', 
                        email = 'alison.ferguso@identitysoon.com', ), ),
entitlement_request_config=sailpoint.v2024.models.entitlement_request_config.EntitlementRequestConfig(
                    access_request_config = sailpoint.v2024.models.entitlement_access_request_config.EntitlementAccessRequestConfig(
                        approval_schemes = [
                            sailpoint.v2024.models.entitlement_approval_scheme.EntitlementApprovalScheme(
                                approver_type = 'GOVERNANCE_GROUP', 
                                approver_id = 'e3eab852-8315-467f-9de7-70eda97f63c8', )
                            ], 
                        request_comment_required = True, 
                        denial_comment_required = False, 
                        reauthorization_required = False, ), 
                    revocation_request_config = sailpoint.v2024.models.entitlement_revocation_request_config.EntitlementRevocationRequestConfig(), )
)

```
[[Back to top]](#) 

