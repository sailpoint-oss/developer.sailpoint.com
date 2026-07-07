---
id: entitlementrevocationrequestconfig
title: Entitlementrevocationrequestconfig
pagination_label: Entitlementrevocationrequestconfig
sidebar_label: Entitlementrevocationrequestconfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlementrevocationrequestconfig', 'Entitlementrevocationrequestconfig'] 
slug: /tools/sdk/python/entitlements/models/entitlementrevocationrequestconfig
tags: ['SDK', 'Software Development Kit', 'Entitlementrevocationrequestconfig', 'Entitlementrevocationrequestconfig']
---

# Entitlementrevocationrequestconfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_schemes** | [**[]Entitlementapprovalscheme**](entitlementapprovalscheme) | Ordered list of approval steps for the access request. Empty when no approval is required. | [optional] 
}

## Example

```python
from sailpoint.entitlements.models.entitlementrevocationrequestconfig import Entitlementrevocationrequestconfig

entitlementrevocationrequestconfig = Entitlementrevocationrequestconfig(
approval_schemes=[
                    sailpoint.entitlements.models.entitlement_approval_scheme.Entitlementv1 Approval Scheme(
                        approver_type = 'GOVERNANCE_GROUP', 
                        approver_id = 'e3eab852-8315-467f-9de7-70eda97f63c8', )
                    ]
)

```
[[Back to top]](#) 

