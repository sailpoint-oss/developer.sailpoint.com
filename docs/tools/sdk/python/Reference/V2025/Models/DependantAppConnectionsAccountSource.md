---
id: v2025-dependant-app-connections-account-source
title: DependantAppConnectionsAccountSource
pagination_label: DependantAppConnectionsAccountSource
sidebar_label: DependantAppConnectionsAccountSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DependantAppConnectionsAccountSource', 'V2025DependantAppConnectionsAccountSource'] 
slug: /tools/sdk/python/v2025/models/dependant-app-connections-account-source
tags: ['SDK', 'Software Development Kit', 'DependantAppConnectionsAccountSource', 'V2025DependantAppConnectionsAccountSource']
---

# DependantAppConnectionsAccountSource

The Account Source of the connected Application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**use_for_password_management** | **bool** | Use this Account Source for password management | [optional] [default to False]
**password_policies** | [**[]DependantAppConnectionsAccountSourcePasswordPoliciesInner**](dependant-app-connections-account-source-password-policies-inner) | A list of Password Policies for this Account Source | [optional] 
}

## Example

```python
from sailpoint.v2025.models.dependant_app_connections_account_source import DependantAppConnectionsAccountSource

dependant_app_connections_account_source = DependantAppConnectionsAccountSource(
use_for_password_management=False,
password_policies=[
                    sailpoint.v2025.models.dependant_app_connections_account_source_password_policies_inner.DependantAppConnections_accountSource_passwordPolicies_inner(
                        type = 'PASSWORD_POLICY', 
                        id = '2c91808568c529c60168cca6f90c1313', 
                        name = 'Policy ODS', )
                    ]
)

```
[[Back to top]](#) 

