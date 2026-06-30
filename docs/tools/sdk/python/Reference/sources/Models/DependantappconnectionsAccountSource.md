---
id: dependantappconnections-account-source
title: DependantappconnectionsAccountSource
pagination_label: DependantappconnectionsAccountSource
sidebar_label: DependantappconnectionsAccountSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DependantappconnectionsAccountSource', 'DependantappconnectionsAccountSource'] 
slug: /tools/sdk/python/sources/models/dependantappconnections-account-source
tags: ['SDK', 'Software Development Kit', 'DependantappconnectionsAccountSource', 'DependantappconnectionsAccountSource']
---

# DependantappconnectionsAccountSource

The Account Source of the connected Application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**use_for_password_management** | **bool** | Use this Account Source for password management | [optional] [default to False]
**password_policies** | [**[]DependantappconnectionsAccountSourcePasswordPoliciesInner**](dependantappconnections-account-source-password-policies-inner) | A list of Password Policies for this Account Source | [optional] 
}

## Example

```python
from sailpoint.sources.models.dependantappconnections_account_source import DependantappconnectionsAccountSource

dependantappconnections_account_source = DependantappconnectionsAccountSource(
use_for_password_management=False,
password_policies=[
                    sailpoint.sources.models.dependantappconnections_account_source_password_policies_inner.dependantappconnections_accountSource_passwordPolicies_inner(
                        type = 'PASSWORD_POLICY', 
                        id = '2c91808568c529c60168cca6f90c1313', 
                        name = 'Policy ODS', )
                    ]
)

```
[[Back to top]](#) 

