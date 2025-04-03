---
id: v2025-role-list-filter-dto-amm-key-values-inner
title: RoleListFilterDTOAmmKeyValuesInner
pagination_label: RoleListFilterDTOAmmKeyValuesInner
sidebar_label: RoleListFilterDTOAmmKeyValuesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleListFilterDTOAmmKeyValuesInner', 'V2025RoleListFilterDTOAmmKeyValuesInner'] 
slug: /tools/sdk/python/v2025/models/role-list-filter-dto-amm-key-values-inner
tags: ['SDK', 'Software Development Kit', 'RoleListFilterDTOAmmKeyValuesInner', 'V2025RoleListFilterDTOAmmKeyValuesInner']
---

# RoleListFilterDTOAmmKeyValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | attribute key of a metadata. | [optional] 
**values** | **[]str** | A list of attribute key names to filter roles. If the values is empty, will only filter by attribute key. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.role_list_filter_dto_amm_key_values_inner import RoleListFilterDTOAmmKeyValuesInner

role_list_filter_dto_amm_key_values_inner = RoleListFilterDTOAmmKeyValuesInner(
attribute='iscFederalClassifications',
values=[secret]
)

```
[[Back to top]](#) 

