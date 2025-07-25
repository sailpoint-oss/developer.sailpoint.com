---
id: v2025-identity-entitlements
title: IdentityEntitlements
pagination_label: IdentityEntitlements
sidebar_label: IdentityEntitlements
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityEntitlements', 'V2025IdentityEntitlements'] 
slug: /tools/sdk/python/v2025/models/identity-entitlements
tags: ['SDK', 'Software Development Kit', 'IdentityEntitlements', 'V2025IdentityEntitlements']
---

# IdentityEntitlements


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_ref** | [**TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**tags** | **[]str** | Labels to be applied to object. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.identity_entitlements import IdentityEntitlements

identity_entitlements = IdentityEntitlements(
object_ref=sailpoint.v2025.models.tagged_object_dto.TaggedObjectDto(
                    type = 'IDENTITY', 
                    id = '2c91808568c529c60168cca6f90c1313', 
                    name = 'William Wilson', ),
tags=[BU_FINANCE, PCI]
)

```
[[Back to top]](#) 

