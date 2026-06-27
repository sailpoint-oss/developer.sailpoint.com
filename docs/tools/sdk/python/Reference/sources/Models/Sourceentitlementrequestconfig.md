---
id: sourceentitlementrequestconfig
title: Sourceentitlementrequestconfig
pagination_label: Sourceentitlementrequestconfig
sidebar_label: Sourceentitlementrequestconfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sourceentitlementrequestconfig', 'Sourceentitlementrequestconfig'] 
slug: /tools/sdk/python/sources/models/sourceentitlementrequestconfig
tags: ['SDK', 'Software Development Kit', 'Sourceentitlementrequestconfig', 'Sourceentitlementrequestconfig']
---

# Sourceentitlementrequestconfig

Entitlement Request Configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_request_config** | [**Entitlementaccessrequestconfig**](entitlementaccessrequestconfig) |  | [optional] 
**revocation_request_config** | [**Entitlementrevocationrequestconfig**](entitlementrevocationrequestconfig) |  | [optional] 
}

## Example

```python
from sailpoint.sources.models.sourceentitlementrequestconfig import Sourceentitlementrequestconfig

sourceentitlementrequestconfig = Sourceentitlementrequestconfig(
access_request_config=sailpoint.sources.models.entitlement_access_request_config.Entitlement Access Request Config(
                    approval_schemes = [
                        sailpoint.sources.models.entitlement_approval_scheme.Entitlement Approval Scheme(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = 'e3eab852-8315-467f-9de7-70eda97f63c8', )
                        ], 
                    request_comment_required = True, 
                    denial_comment_required = False, 
                    reauthorization_required = False, 
                    require_end_date = True, 
                    max_permitted_access_duration = sailpoint.sources.models.entitlementaccessrequestconfig_max_permitted_access_duration.entitlementaccessrequestconfig_maxPermittedAccessDuration(
                        value = 5, 
                        time_unit = 'DAYS', ), ),
revocation_request_config=sailpoint.sources.models.entitlement_revocation_request_config.Entitlement Revocation Request Config(
                    approval_schemes = [
                        sailpoint.sources.models.entitlement_approval_scheme.Entitlement Approval Scheme(
                            approver_type = 'GOVERNANCE_GROUP', 
                            approver_id = 'e3eab852-8315-467f-9de7-70eda97f63c8', )
                        ], )
)

```
[[Back to top]](#) 

