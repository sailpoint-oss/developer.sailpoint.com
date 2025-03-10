---
id: dependant-app-connections-account-source-password-policies-inner
title: DependantAppConnectionsAccountSourcePasswordPoliciesInner
pagination_label: DependantAppConnectionsAccountSourcePasswordPoliciesInner
sidebar_label: DependantAppConnectionsAccountSourcePasswordPoliciesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DependantAppConnectionsAccountSourcePasswordPoliciesInner', 'DependantAppConnectionsAccountSourcePasswordPoliciesInner'] 
slug: /tools/sdk/python/v3/models/dependant-app-connections-account-source-password-policies-inner
tags: ['SDK', 'Software Development Kit', 'DependantAppConnectionsAccountSourcePasswordPoliciesInner', 'DependantAppConnectionsAccountSourcePasswordPoliciesInner']
---

# DependantAppConnectionsAccountSourcePasswordPoliciesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | DTO type | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
}

## Example

```python
from sailpoint.v3.models.dependant_app_connections_account_source_password_policies_inner import DependantAppConnectionsAccountSourcePasswordPoliciesInner

dependant_app_connections_account_source_password_policies_inner = DependantAppConnectionsAccountSourcePasswordPoliciesInner(
type='PASSWORD_POLICY',
id='2c91808568c529c60168cca6f90c1313',
name='Policy ODS'
)

```
[[Back to top]](#) 

