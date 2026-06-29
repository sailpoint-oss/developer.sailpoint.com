---
id: roleminingpotentialroleexportrequest
title: Roleminingpotentialroleexportrequest
pagination_label: Roleminingpotentialroleexportrequest
sidebar_label: Roleminingpotentialroleexportrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Roleminingpotentialroleexportrequest', 'Roleminingpotentialroleexportrequest'] 
slug: /tools/sdk/python/iai-role-mining/models/roleminingpotentialroleexportrequest
tags: ['SDK', 'Software Development Kit', 'Roleminingpotentialroleexportrequest', 'Roleminingpotentialroleexportrequest']
---

# Roleminingpotentialroleexportrequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_entitlement_popularity** | **int** | The minimum popularity among identities in the role which an entitlement must have to be included in the report | [optional] 
**include_common_access** | **bool** | If false, do not include entitlements that are highly popular among the entire orginization | [optional] 
}

## Example

```python
from sailpoint.iai_role_mining.models.roleminingpotentialroleexportrequest import Roleminingpotentialroleexportrequest

roleminingpotentialroleexportrequest = Roleminingpotentialroleexportrequest(
min_entitlement_popularity=0,
include_common_access=True
)

```
[[Back to top]](#) 

