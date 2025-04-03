---
id: v2025-role-list-filter-dto
title: RoleListFilterDTO
pagination_label: RoleListFilterDTO
sidebar_label: RoleListFilterDTO
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleListFilterDTO', 'V2025RoleListFilterDTO'] 
slug: /tools/sdk/python/v2025/models/role-list-filter-dto
tags: ['SDK', 'Software Development Kit', 'RoleListFilterDTO', 'V2025RoleListFilterDTO']
---

# RoleListFilterDTO

AMMFilterValues

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | **str** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results) Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq* | [optional] 
**amm_key_values** | [**[]RoleListFilterDTOAmmKeyValuesInner**](role-list-filter-dto-amm-key-values-inner) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.role_list_filter_dto import RoleListFilterDTO

role_list_filter_dto = RoleListFilterDTO(
filters='dimensional eq false',
amm_key_values=[{attribute=iscFederalClassifications, values=[secret]}]
)

```
[[Back to top]](#) 

