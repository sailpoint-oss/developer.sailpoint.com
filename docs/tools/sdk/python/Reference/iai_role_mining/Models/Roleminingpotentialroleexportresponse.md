---
id: roleminingpotentialroleexportresponse
title: Roleminingpotentialroleexportresponse
pagination_label: Roleminingpotentialroleexportresponse
sidebar_label: Roleminingpotentialroleexportresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Roleminingpotentialroleexportresponse', 'Roleminingpotentialroleexportresponse'] 
slug: /tools/sdk/python/iai-role-mining/models/roleminingpotentialroleexportresponse
tags: ['SDK', 'Software Development Kit', 'Roleminingpotentialroleexportresponse', 'Roleminingpotentialroleexportresponse']
---

# Roleminingpotentialroleexportresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_entitlement_popularity** | **int** | The minimum popularity among identities in the role which an entitlement must have to be included in the report | [optional] 
**include_common_access** | **bool** | If false, do not include entitlements that are highly popular among the entire orginization | [optional] 
**export_id** | **str** | ID used to reference this export | [optional] 
**status** | [**Roleminingpotentialroleexportstate**](roleminingpotentialroleexportstate) |  | [optional] 
}

## Example

```python
from sailpoint.iai_role_mining.models.roleminingpotentialroleexportresponse import Roleminingpotentialroleexportresponse

roleminingpotentialroleexportresponse = Roleminingpotentialroleexportresponse(
min_entitlement_popularity=0,
include_common_access=True,
export_id='0c6cdb76-1227-4aaf-af21-192dbdfbfa04',
status='QUEUED'
)

```
[[Back to top]](#) 

