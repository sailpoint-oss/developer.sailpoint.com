---
id: v2024-provisioning-config1-managed-resource-refs-inner
title: ProvisioningConfig1ManagedResourceRefsInner
pagination_label: ProvisioningConfig1ManagedResourceRefsInner
sidebar_label: ProvisioningConfig1ManagedResourceRefsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ProvisioningConfig1ManagedResourceRefsInner', 'V2024ProvisioningConfig1ManagedResourceRefsInner'] 
slug: /tools/sdk/python/v2024/models/provisioning-config1-managed-resource-refs-inner
tags: ['SDK', 'Software Development Kit', 'ProvisioningConfig1ManagedResourceRefsInner', 'V2024ProvisioningConfig1ManagedResourceRefsInner']
---

# ProvisioningConfig1ManagedResourceRefsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'SOURCE' ] | The type of object being referenced | [optional] 
**id** | **object** | ID of the source | [optional] 
**name** | **object** | Human-readable display name of the source | [optional] 
}

## Example

```python
from sailpoint.v2024.models.provisioning_config1_managed_resource_refs_inner import ProvisioningConfig1ManagedResourceRefsInner

provisioning_config1_managed_resource_refs_inner = ProvisioningConfig1ManagedResourceRefsInner(
type=SOURCE,
id=2c91808568c529c60168cca6f90c1313,
name=My Source
)

```
[[Back to top]](#) 

