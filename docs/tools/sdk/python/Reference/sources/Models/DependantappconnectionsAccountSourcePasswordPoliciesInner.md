---
id: dependantappconnections-account-source-password-policies-inner
title: DependantappconnectionsAccountSourcePasswordPoliciesInner
pagination_label: DependantappconnectionsAccountSourcePasswordPoliciesInner
sidebar_label: DependantappconnectionsAccountSourcePasswordPoliciesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DependantappconnectionsAccountSourcePasswordPoliciesInner', 'DependantappconnectionsAccountSourcePasswordPoliciesInner'] 
slug: /tools/sdk/python/sources/models/dependantappconnections-account-source-password-policies-inner
tags: ['SDK', 'Software Development Kit', 'DependantappconnectionsAccountSourcePasswordPoliciesInner', 'DependantappconnectionsAccountSourcePasswordPoliciesInner']
---

# DependantappconnectionsAccountSourcePasswordPoliciesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | DTO type | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
}

## Example

```python
from sailpoint.sources.models.dependantappconnections_account_source_password_policies_inner import DependantappconnectionsAccountSourcePasswordPoliciesInner

dependantappconnections_account_source_password_policies_inner = DependantappconnectionsAccountSourcePasswordPoliciesInner(
type='PASSWORD_POLICY',
id='2c91808568c529c60168cca6f90c1313',
name='Policy ODS'
)

```
[[Back to top]](#) 

