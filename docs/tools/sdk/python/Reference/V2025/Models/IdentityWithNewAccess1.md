---
id: v2025-identity-with-new-access1
title: IdentityWithNewAccess1
pagination_label: IdentityWithNewAccess1
sidebar_label: IdentityWithNewAccess1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityWithNewAccess1', 'V2025IdentityWithNewAccess1'] 
slug: /tools/sdk/python/v2025/models/identity-with-new-access1
tags: ['SDK', 'Software Development Kit', 'IdentityWithNewAccess1', 'V2025IdentityWithNewAccess1']
---

# IdentityWithNewAccess1

An identity with a set of access to be added

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | Set of identity IDs to be checked. | [required]
**access_refs** | [**[]EntitlementRef1**](entitlement-ref1) | The bundle of access profiles to be added to the identities specified. All references must be ENTITLEMENT type. | [required]
**client_metadata** | **map[string]str** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.identity_with_new_access1 import IdentityWithNewAccess1

identity_with_new_access1 = IdentityWithNewAccess1(
identity_id='2c91809050db617d0150e0bf3215385e',
access_refs=[
                    null
                    ],
client_metadata={clientName=client1, clientId=2c91808f7892918f0178b78da4a305a1}
)

```
[[Back to top]](#) 

