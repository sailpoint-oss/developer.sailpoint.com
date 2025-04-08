---
id: identity-with-new-access-access-refs-inner
title: IdentityWithNewAccessAccessRefsInner
pagination_label: IdentityWithNewAccessAccessRefsInner
sidebar_label: IdentityWithNewAccessAccessRefsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityWithNewAccessAccessRefsInner', 'IdentityWithNewAccessAccessRefsInner'] 
slug: /tools/sdk/python/v3/models/identity-with-new-access-access-refs-inner
tags: ['SDK', 'Software Development Kit', 'IdentityWithNewAccessAccessRefsInner', 'IdentityWithNewAccessAccessRefsInner']
---

# IdentityWithNewAccessAccessRefsInner

Entitlement including a specific set of access.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ENTITLEMENT' ] | Entitlement's DTO type. | [optional] 
**id** | **str** | Entitlement's ID. | [optional] 
**name** | **str** | Entitlement's display name. | [optional] 
}

## Example

```python
from sailpoint.v3.models.identity_with_new_access_access_refs_inner import IdentityWithNewAccessAccessRefsInner

identity_with_new_access_access_refs_inner = IdentityWithNewAccessAccessRefsInner(
type='ENTITLEMENT',
id='2c91809773dee32014e13e122092014e',
name='CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local'
)

```
[[Back to top]](#) 

