---
id: identitywithnewaccess-access-refs-inner
title: IdentitywithnewaccessAccessRefsInner
pagination_label: IdentitywithnewaccessAccessRefsInner
sidebar_label: IdentitywithnewaccessAccessRefsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentitywithnewaccessAccessRefsInner', 'IdentitywithnewaccessAccessRefsInner'] 
slug: /tools/sdk/python/sod-violations/models/identitywithnewaccess-access-refs-inner
tags: ['SDK', 'Software Development Kit', 'IdentitywithnewaccessAccessRefsInner', 'IdentitywithnewaccessAccessRefsInner']
---

# IdentitywithnewaccessAccessRefsInner

Entitlement including a specific set of access.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ENTITLEMENT' ] | Entitlement's DTO type. | [optional] 
**id** | **str** | Entitlement's ID. | [optional] 
}

## Example

```python
from sailpoint.sod_violations.models.identitywithnewaccess_access_refs_inner import IdentitywithnewaccessAccessRefsInner

identitywithnewaccess_access_refs_inner = IdentitywithnewaccessAccessRefsInner(
type='ENTITLEMENT',
id='2c91809773dee32014e13e122092014e'
)

```
[[Back to top]](#) 

