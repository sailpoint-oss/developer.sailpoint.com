---
id: v2025-identity-with-new-access-access-refs-inner
title: IdentityWithNewAccessAccessRefsInner
pagination_label: IdentityWithNewAccessAccessRefsInner
sidebar_label: IdentityWithNewAccessAccessRefsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityWithNewAccessAccessRefsInner', 'V2025IdentityWithNewAccessAccessRefsInner'] 
slug: /tools/sdk/python/v2025/models/identity-with-new-access-access-refs-inner
tags: ['SDK', 'Software Development Kit', 'IdentityWithNewAccessAccessRefsInner', 'V2025IdentityWithNewAccessAccessRefsInner']
---

# IdentityWithNewAccessAccessRefsInner

Entitlement including a specific set of access.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ENTITLEMENT' ] | Entitlement's DTO type. | [optional] 
**id** | **str** | Entitlement's ID. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.identity_with_new_access_access_refs_inner import IdentityWithNewAccessAccessRefsInner

identity_with_new_access_access_refs_inner = IdentityWithNewAccessAccessRefsInner(
type='ENTITLEMENT',
id='2c91809773dee32014e13e122092014e'
)

```
[[Back to top]](#) 

