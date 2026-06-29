---
id: accessrequestconfigv2
title: Accessrequestconfigv2
pagination_label: Accessrequestconfigv2
sidebar_label: Accessrequestconfigv2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessrequestconfigv2', 'Accessrequestconfigv2'] 
slug: /tools/sdk/python/access-requests/models/accessrequestconfigv2
tags: ['SDK', 'Software Development Kit', 'Accessrequestconfigv2', 'Accessrequestconfigv2']
---

# Accessrequestconfigv2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvals_must_be_external** | **bool** | If this is true, approvals must be processed by an external system. Also, if this is true, it blocks Request Center access requests and returns an error for any user who isn't an org admin. | [optional] [default to False]
**reauthorization_enabled** | **bool** | If this is true, reauthorization will be enforced for appropriately configured access items. Enablement of this feature is currently in a limited state. | [optional] [default to False]
**request_on_behalf_of_config** | [**Requestonbehalfofconfigv2**](requestonbehalfofconfigv2) |  | [optional] 
**entitlement_request_config** | [**Entitlementrequestconfigv2**](entitlementrequestconfigv2) |  | [optional] 
**gov_group_visibility_enabled** | **bool** | If this is true, requesters and requested-for users will be able to see the names of governance group members when a request is awaiting the group's approval. Up to the first 10 members of the group will be listed. | [optional] [default to False]
}

## Example

```python
from sailpoint.access_requests.models.accessrequestconfigv2 import Accessrequestconfigv2

accessrequestconfigv2 = Accessrequestconfigv2(
approvals_must_be_external=True,
reauthorization_enabled=True,
request_on_behalf_of_config=sailpoint.access_requests.models.request_on_behalf_of_config.Request On Behalf Of Config(
                    allow_request_on_behalf_of_anyone_by_anyone = True, 
                    allow_request_on_behalf_of_employee_by_manager = True, ),
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
                        max_permitted_access_duration = sailpoint.access_requests.models.entitlementaccessrequestconfig_max_permitted_access_duration.entitlementaccessrequestconfig_maxPermittedAccessDuration(
                            value = 5, 
                            time_unit = 'DAYS', ), ), 
                    revocation_request_config = sailpoint.access_requests.models.entitlement_revocation_request_config.Entitlement Revocation Request Config(), ),
gov_group_visibility_enabled=True
)

```
[[Back to top]](#) 

