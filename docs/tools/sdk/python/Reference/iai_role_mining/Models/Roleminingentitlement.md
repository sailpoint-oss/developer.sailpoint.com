---
id: roleminingentitlement
title: Roleminingentitlement
pagination_label: Roleminingentitlement
sidebar_label: Roleminingentitlement
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Roleminingentitlement', 'Roleminingentitlement'] 
slug: /tools/sdk/python/iai-role-mining/models/roleminingentitlement
tags: ['SDK', 'Software Development Kit', 'Roleminingentitlement', 'Roleminingentitlement']
---

# Roleminingentitlement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlement_ref** | [**Roleminingentitlementref**](roleminingentitlementref) |  | [optional] 
**name** | **str** | Name of the entitlement | [optional] 
**application_name** | **str** | Application name of the entitlement | [optional] 
**identity_count** | **int** | The number of identities with this entitlement in a role. | [optional] 
**popularity** | **float** | The % popularity of this entitlement in a role. | [optional] 
**popularity_in_org** | **float** | The % popularity of this entitlement in the org. | [optional] 
**source_id** | **str** | The ID of the source/application. | [optional] 
**activity_source_state** | **str** | The status of activity data for the source.   Value is complete or notComplete. | [optional] 
**source_usage_percent** | **float** | The percentage of identities in the potential role that have usage of the source/application of this entitlement. | [optional] 
}

## Example

```python
from sailpoint.iai_role_mining.models.roleminingentitlement import Roleminingentitlement

roleminingentitlement = Roleminingentitlement(
entitlement_ref=sailpoint.iai_role_mining.models.role_mining_entitlement_ref.Role Mining Entitlement Ref(
                    id = '2c91808a7e95e6e0017e96e2086206c8', 
                    name = 'App.entitlement.1', 
                    description = 'Entitlement 1', 
                    attribute = 'groups', ),
name='Add/modify/delete users',
application_name='AppName',
identity_count=45,
popularity=65.2,
popularity_in_org=35.8,
source_id='2c9180877620c1460176267f336a106f',
activity_source_state='complete',
source_usage_percent=65.6
)

```
[[Back to top]](#) 

