---
id: entitlementaccessrequestconfig
title: Entitlementaccessrequestconfig
pagination_label: Entitlementaccessrequestconfig
sidebar_label: Entitlementaccessrequestconfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlementaccessrequestconfig', 'Entitlementaccessrequestconfig'] 
slug: /tools/sdk/python/entitlements/models/entitlementaccessrequestconfig
tags: ['SDK', 'Software Development Kit', 'Entitlementaccessrequestconfig', 'Entitlementaccessrequestconfig']
---

# Entitlementaccessrequestconfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_schemes** | [**[]Entitlementapprovalscheme**](entitlementapprovalscheme) | Ordered list of approval steps for the access request. Empty when no approval is required. | [optional] 
**request_comment_required** | **bool** | If the requester must provide a comment during access request. | [optional] [default to False]
**denial_comment_required** | **bool** | If the reviewer must provide a comment when denying the access request. | [optional] [default to False]
**reauthorization_required** | **bool** | Is Reauthorization Required | [optional] [default to False]
**require_end_date** | **bool** | If true, then remove date or sunset date is required in access request of the entitlementv1. | [optional] [default to False]
**max_permitted_access_duration** | [**EntitlementaccessrequestconfigMaxPermittedAccessDuration**](entitlementaccessrequestconfig-max-permitted-access-duration) |  | [optional] 
}

## Example

```python
from sailpoint.entitlements.models.entitlementaccessrequestconfig import Entitlementaccessrequestconfig

entitlementaccessrequestconfig = Entitlementaccessrequestconfig(
approval_schemes=[
                    sailpoint.entitlements.models.entitlement_approval_scheme.Entitlementv1 Approval Scheme(
                        approver_type = 'GOVERNANCE_GROUP', 
                        approver_id = 'e3eab852-8315-467f-9de7-70eda97f63c8', )
                    ],
request_comment_required=True,
denial_comment_required=False,
reauthorization_required=False,
require_end_date=True,
max_permitted_access_duration=sailpoint.entitlements.models.entitlementaccessrequestconfig_max_permitted_access_duration.entitlementaccessrequestconfig_maxPermittedAccessDuration(
                    value = 5, 
                    time_unit = 'DAYS', )
)

```
[[Back to top]](#) 

