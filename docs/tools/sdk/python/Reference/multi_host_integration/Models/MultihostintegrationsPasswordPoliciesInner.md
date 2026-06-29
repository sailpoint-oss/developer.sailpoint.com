---
id: multihostintegrations-password-policies-inner
title: MultihostintegrationsPasswordPoliciesInner
pagination_label: MultihostintegrationsPasswordPoliciesInner
sidebar_label: MultihostintegrationsPasswordPoliciesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultihostintegrationsPasswordPoliciesInner', 'MultihostintegrationsPasswordPoliciesInner'] 
slug: /tools/sdk/python/multi-host-integration/models/multihostintegrations-password-policies-inner
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsPasswordPoliciesInner', 'MultihostintegrationsPasswordPoliciesInner']
---

# MultihostintegrationsPasswordPoliciesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'PASSWORD_POLICY' ] | Type of object being referenced. | [optional] 
**id** | **str** | Policy ID. | [optional] 
**name** | **str** | Policy's human-readable display name. | [optional] 
}

## Example

```python
from sailpoint.multi_host_integration.models.multihostintegrations_password_policies_inner import MultihostintegrationsPasswordPoliciesInner

multihostintegrations_password_policies_inner = MultihostintegrationsPasswordPoliciesInner(
type='PASSWORD_POLICY',
id='2c91808568c529c60168cca6f90c1777',
name='My Password Policy'
)

```
[[Back to top]](#) 

