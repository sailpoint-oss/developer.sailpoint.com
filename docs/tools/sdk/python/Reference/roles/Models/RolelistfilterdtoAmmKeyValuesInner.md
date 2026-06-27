---
id: rolelistfilterdto-amm-key-values-inner
title: RolelistfilterdtoAmmKeyValuesInner
pagination_label: RolelistfilterdtoAmmKeyValuesInner
sidebar_label: RolelistfilterdtoAmmKeyValuesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RolelistfilterdtoAmmKeyValuesInner', 'RolelistfilterdtoAmmKeyValuesInner'] 
slug: /tools/sdk/python/roles/models/rolelistfilterdto-amm-key-values-inner
tags: ['SDK', 'Software Development Kit', 'RolelistfilterdtoAmmKeyValuesInner', 'RolelistfilterdtoAmmKeyValuesInner']
---

# RolelistfilterdtoAmmKeyValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | attribute key of a metadata. | [optional] 
**values** | **[]str** | A list of attribute key names to filter roles. If the values is empty, will only filter by attribute key. | [optional] 
}

## Example

```python
from sailpoint.roles.models.rolelistfilterdto_amm_key_values_inner import RolelistfilterdtoAmmKeyValuesInner

rolelistfilterdto_amm_key_values_inner = RolelistfilterdtoAmmKeyValuesInner(
attribute='iscFederalClassifications',
values=["secret"]
)

```
[[Back to top]](#) 

