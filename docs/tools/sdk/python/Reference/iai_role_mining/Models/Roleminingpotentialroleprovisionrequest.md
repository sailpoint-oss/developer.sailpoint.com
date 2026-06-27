---
id: roleminingpotentialroleprovisionrequest
title: Roleminingpotentialroleprovisionrequest
pagination_label: Roleminingpotentialroleprovisionrequest
sidebar_label: Roleminingpotentialroleprovisionrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Roleminingpotentialroleprovisionrequest', 'Roleminingpotentialroleprovisionrequest'] 
slug: /tools/sdk/python/iai-role-mining/models/roleminingpotentialroleprovisionrequest
tags: ['SDK', 'Software Development Kit', 'Roleminingpotentialroleprovisionrequest', 'Roleminingpotentialroleprovisionrequest']
---

# Roleminingpotentialroleprovisionrequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role_name** | **str** | Name of the new role being created | [optional] 
**role_description** | **str** | Short description of the new role being created | [optional] 
**owner_id** | **str** | ID of the identity that will own this role | [optional] 
**include_identities** | **bool** | When true, create access requests for the identities associated with the potential role | [optional] [default to False]
**directly_assigned_entitlements** | **bool** | When true, assign entitlements directly to the role; otherwise, create access profiles containing the entitlements | [optional] [default to False]
}

## Example

```python
from sailpoint.iai_role_mining.models.roleminingpotentialroleprovisionrequest import Roleminingpotentialroleprovisionrequest

roleminingpotentialroleprovisionrequest = Roleminingpotentialroleprovisionrequest(
role_name='Finance - Accounting',
role_description='General access for accounting department',
owner_id='2b568c65bc3c4c57a43bd97e3a8e41',
include_identities=True,
directly_assigned_entitlements=False
)

```
[[Back to top]](#) 

