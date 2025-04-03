---
id: v2024-patch-potential-role-request-inner
title: PatchPotentialRoleRequestInner
pagination_label: PatchPotentialRoleRequestInner
sidebar_label: PatchPotentialRoleRequestInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PatchPotentialRoleRequestInner', 'V2024PatchPotentialRoleRequestInner'] 
slug: /tools/sdk/python/v2024/models/patch-potential-role-request-inner
tags: ['SDK', 'Software Development Kit', 'PatchPotentialRoleRequestInner', 'V2024PatchPotentialRoleRequestInner']
---

# PatchPotentialRoleRequestInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** |  **Enum** [  'remove',    'replace' ] | The operation to be performed | [optional] 
**path** | **str** | A string JSON Pointer representing the target path to an element to be affected by the operation | [required]
**value** | [**UpdateMultiHostSourcesRequestInnerValue**](update-multi-host-sources-request-inner-value) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.patch_potential_role_request_inner import PatchPotentialRoleRequestInner

patch_potential_role_request_inner = PatchPotentialRoleRequestInner(
op='replace',
path='/description',
value=New description
)

```
[[Back to top]](#) 

