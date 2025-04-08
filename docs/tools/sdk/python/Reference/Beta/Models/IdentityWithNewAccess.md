---
id: beta-identity-with-new-access
title: IdentityWithNewAccess
pagination_label: IdentityWithNewAccess
sidebar_label: IdentityWithNewAccess
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityWithNewAccess', 'BetaIdentityWithNewAccess'] 
slug: /tools/sdk/python/beta/models/identity-with-new-access
tags: ['SDK', 'Software Development Kit', 'IdentityWithNewAccess', 'BetaIdentityWithNewAccess']
---

# IdentityWithNewAccess

An identity with a set of access to be added

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | Identity id to be checked. | [required]
**access_refs** | [**[]IdentityWithNewAccessAccessRefsInner**](identity-with-new-access-access-refs-inner) | The list of entitlements to consider for possible violations in a preventive check. | [required]
}

## Example

```python
from sailpoint.beta.models.identity_with_new_access import IdentityWithNewAccess

identity_with_new_access = IdentityWithNewAccess(
identity_id='2c91808568c529c60168cca6f90c1313',
access_refs=[{type=ENTITLEMENT, id=2c918087682f9a86016839c050861ab1, name=CN=Information Access,OU=test,OU=test-service,DC=TestAD,DC=local}, {type=ENTITLEMENT, id=2c918087682f9a86016839c0509c1ab2, name=CN=Information Technology,OU=test,OU=test-service,DC=TestAD,DC=local}]
)

```
[[Back to top]](#) 

