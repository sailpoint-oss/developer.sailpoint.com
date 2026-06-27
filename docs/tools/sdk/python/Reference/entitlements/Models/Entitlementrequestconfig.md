---
id: entitlementrequestconfig
title: Entitlementrequestconfig
pagination_label: Entitlementrequestconfig
sidebar_label: Entitlementrequestconfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlementrequestconfig', 'Entitlementrequestconfig'] 
slug: /tools/sdk/python/entitlements/models/entitlementrequestconfig
tags: ['SDK', 'Software Development Kit', 'Entitlementrequestconfig', 'Entitlementrequestconfig']
---

# Entitlementrequestconfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_request_config** | [**Entitlementaccessrequestconfig**](entitlementaccessrequestconfig) |  | [optional] 
**revocation_request_config** | [**Entitlementrevocationrequestconfig**](entitlementrevocationrequestconfig) |  | [optional] 
}

## Example

```python
from sailpoint.entitlements.models.entitlementrequestconfig import Entitlementrequestconfig

entitlementrequestconfig = Entitlementrequestconfig(
access_request_config=sailpoint.entitlements.models.entitlement_access_request_config.Entitlementv1 Access Request Config(
                    approval_schemes = [
                        sailpoint.entitlements.models.entitlement_approval_scheme.Entitlementv1 Approval Scheme(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = 'e3eab852-8315-467f-9de7-70eda97f63c8', )
                        ], 
                    request_comment_required = True, 
                    denial_comment_required = False, 
                    reauthorization_required = False, 
                    require_end_date = True, 
                    max_permitted_access_duration = sailpoint.entitlements.models.entitlementaccessrequestconfig_max_permitted_access_duration.entitlementaccessrequestconfig_maxPermittedAccessDuration(
                        value = 5, 
                        time_unit = 'DAYS', ), ),
revocation_request_config=sailpoint.entitlements.models.entitlement_revocation_request_config.Entitlementv1 Revocation Request Config(
                    approval_schemes = [
                        sailpoint.entitlements.models.entitlement_approval_scheme.Entitlementv1 Approval Scheme(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = 'e3eab852-8315-467f-9de7-70eda97f63c8', )
                        ], )
)

```
[[Back to top]](#) 

