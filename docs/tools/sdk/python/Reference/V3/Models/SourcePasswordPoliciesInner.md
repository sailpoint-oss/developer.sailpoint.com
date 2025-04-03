---
id: source-password-policies-inner
title: SourcePasswordPoliciesInner
pagination_label: SourcePasswordPoliciesInner
sidebar_label: SourcePasswordPoliciesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourcePasswordPoliciesInner', 'SourcePasswordPoliciesInner'] 
slug: /tools/sdk/python/v3/models/source-password-policies-inner
tags: ['SDK', 'Software Development Kit', 'SourcePasswordPoliciesInner', 'SourcePasswordPoliciesInner']
---

# SourcePasswordPoliciesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'PASSWORD_POLICY' ] | Type of object being referenced. | [optional] 
**id** | **str** | Policy ID. | [optional] 
**name** | **str** | Policy's human-readable display name. | [optional] 
}

## Example

```python
from sailpoint.v3.models.source_password_policies_inner import SourcePasswordPoliciesInner

source_password_policies_inner = SourcePasswordPoliciesInner(
type='PASSWORD_POLICY',
id='2c91808568c529c60168cca6f90c1777',
name='My Password Policy'
)

```
[[Back to top]](#) 

