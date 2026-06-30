---
id: identitywithnewaccess
title: Identitywithnewaccess
pagination_label: Identitywithnewaccess
sidebar_label: Identitywithnewaccess
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identitywithnewaccess', 'Identitywithnewaccess'] 
slug: /tools/sdk/python/sod-violations/models/identitywithnewaccess
tags: ['SDK', 'Software Development Kit', 'Identitywithnewaccess', 'Identitywithnewaccess']
---

# Identitywithnewaccess

An identity with a set of access to be added

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | Identity id to be checked. | [required]
**access_refs** | [**[]IdentitywithnewaccessAccessRefsInner**](identitywithnewaccess-access-refs-inner) | The list of entitlements to consider for possible violations in a preventive check. | [required]
}

## Example

```python
from sailpoint.sod_violations.models.identitywithnewaccess import Identitywithnewaccess

identitywithnewaccess = Identitywithnewaccess(
identity_id='2c91808568c529c60168cca6f90c1313',
access_refs=[{"type":"ENTITLEMENT","id":"2c918087682f9a86016839c050861ab1"},{"type":"ENTITLEMENT","id":"2c918087682f9a86016839c0509c1ab2"}]
)

```
[[Back to top]](#) 

