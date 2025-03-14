---
id: beta-multi-host-sources-password-policies-inner
title: MultiHostSourcesPasswordPoliciesInner
pagination_label: MultiHostSourcesPasswordPoliciesInner
sidebar_label: MultiHostSourcesPasswordPoliciesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultiHostSourcesPasswordPoliciesInner', 'BetaMultiHostSourcesPasswordPoliciesInner'] 
slug: /tools/sdk/python/beta/models/multi-host-sources-password-policies-inner
tags: ['SDK', 'Software Development Kit', 'MultiHostSourcesPasswordPoliciesInner', 'BetaMultiHostSourcesPasswordPoliciesInner']
---

# MultiHostSourcesPasswordPoliciesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'PASSWORD_POLICY' ] | Type of object being referenced. | [optional] 
**id** | **str** | Policy ID. | [optional] 
**name** | **str** | Policy's human-readable display name. | [optional] 
}

## Example

```python
from sailpoint.beta.models.multi_host_sources_password_policies_inner import MultiHostSourcesPasswordPoliciesInner

multi_host_sources_password_policies_inner = MultiHostSourcesPasswordPoliciesInner(
type='PASSWORD_POLICY',
id='2c91808568c529c60168cca6f90c1777',
name='My Password Policy'
)

```
[[Back to top]](#) 

