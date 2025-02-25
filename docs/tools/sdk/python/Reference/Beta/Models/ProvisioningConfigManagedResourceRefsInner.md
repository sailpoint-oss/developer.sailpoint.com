---
id: beta-provisioning-config-managed-resource-refs-inner
title: ProvisioningConfigManagedResourceRefsInner
pagination_label: ProvisioningConfigManagedResourceRefsInner
sidebar_label: ProvisioningConfigManagedResourceRefsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ProvisioningConfigManagedResourceRefsInner', 'BetaProvisioningConfigManagedResourceRefsInner'] 
slug: /tools/sdk/python/beta/models/provisioning-config-managed-resource-refs-inner
tags: ['SDK', 'Software Development Kit', 'ProvisioningConfigManagedResourceRefsInner', 'BetaProvisioningConfigManagedResourceRefsInner']
---

# ProvisioningConfigManagedResourceRefsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'SOURCE' ] | The type of object being referenced | [optional] 
**id** | **object** | ID of the source | [optional] 
**name** | **object** | Human-readable display name of the source | [optional] 
}

## Example

```python
from sailpoint.beta.models.provisioning_config_managed_resource_refs_inner import ProvisioningConfigManagedResourceRefsInner

provisioning_config_managed_resource_refs_inner = ProvisioningConfigManagedResourceRefsInner(
type=SOURCE,
id=2c91808568c529c60168cca6f90c1313,
name=My Source
)

```
[[Back to top]](#) 

