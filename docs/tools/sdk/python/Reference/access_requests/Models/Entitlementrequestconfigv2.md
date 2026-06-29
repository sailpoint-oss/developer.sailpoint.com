---
id: entitlementrequestconfigv2
title: Entitlementrequestconfigv2
pagination_label: Entitlementrequestconfigv2
sidebar_label: Entitlementrequestconfigv2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlementrequestconfigv2', 'Entitlementrequestconfigv2'] 
slug: /tools/sdk/python/access-requests/models/entitlementrequestconfigv2
tags: ['SDK', 'Software Development Kit', 'Entitlementrequestconfigv2', 'Entitlementrequestconfigv2']
---

# Entitlementrequestconfigv2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_request_config** | [**Entitlementaccessrequestconfig**](entitlementaccessrequestconfig) |  | [optional] 
**revocation_request_config** | [**Entitlementrevocationrequestconfig**](entitlementrevocationrequestconfig) |  | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.entitlementrequestconfigv2 import Entitlementrequestconfigv2

entitlementrequestconfigv2 = Entitlementrequestconfigv2(
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
                    max_permitted_access_duration = sailpoint.access_requests.models.entitlementaccessrequestconfig_max_permitted_access_duration.entitlementaccessrequestconfig_maxPermittedAccessDuration(
                        value = 5, 
                        time_unit = 'DAYS', ), ),
revocation_request_config=sailpoint.access_requests.models.entitlement_revocation_request_config.Entitlement Revocation Request Config(
                    approval_schemes = [
                        sailpoint.access_requests.models.entitlement_approval_scheme.Entitlement Approval Scheme(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = 'e3eab852-8315-467f-9de7-70eda97f63c8', )
                        ], )
)

```
[[Back to top]](#) 

