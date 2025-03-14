---
id: v2024-dependant-app-connections
title: DependantAppConnections
pagination_label: DependantAppConnections
sidebar_label: DependantAppConnections
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DependantAppConnections', 'V2024DependantAppConnections'] 
slug: /tools/sdk/python/v2024/models/dependant-app-connections
tags: ['SDK', 'Software Development Kit', 'DependantAppConnections', 'V2024DependantAppConnections']
---

# DependantAppConnections


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_app_id** | **str** | Id of the connected Application | [optional] 
**description** | **str** | Description of the connected Application | [optional] 
**enabled** | **bool** | Is the Application enabled | [optional] [default to True]
**provision_request_enabled** | **bool** | Is Provisioning enabled for connected Application | [optional] [default to True]
**account_source** | [**DependantAppConnectionsAccountSource**](dependant-app-connections-account-source) |  | [optional] 
**launcher_count** | **int** | The amount of launchers for connected Application (long type) | [optional] 
**match_all_account** | **bool** | Is Provisioning enabled for connected Application | [optional] [default to False]
**owner** | [**[]BaseReferenceDto**](base-reference-dto) | The owner of the connected Application | [optional] 
**app_center_enabled** | **bool** | Is App Center enabled for connected Application | [optional] [default to False]
}

## Example

```python
from sailpoint.v2024.models.dependant_app_connections import DependantAppConnections

dependant_app_connections = DependantAppConnections(
cloud_app_id='9e3cdd80edf84f119327df8bbd5bb5ac',
description='This is a Sailpoint application',
enabled=True,
provision_request_enabled=True,
account_source=sailpoint.v2024.models.dependant_app_connections_account_source.DependantAppConnections_accountSource(
                    use_for_password_management = False, 
                    password_policies = [
                        sailpoint.v2024.models.dependant_app_connections_account_source_password_policies_inner.DependantAppConnections_accountSource_passwordPolicies_inner(
                            type = 'PASSWORD_POLICY', 
                            id = '2c91808568c529c60168cca6f90c1313', 
                            name = 'Policy ODS', )
                        ], ),
launcher_count=100,
match_all_account=True,
owner=[
                    sailpoint.v2024.models.base_reference_dto.BaseReferenceDto(
                        type = 'IDENTITY', 
                        id = '2c91808568c529c60168cca6f90c1313', 
                        name = 'William Wilson', )
                    ],
app_center_enabled=False
)

```
[[Back to top]](#) 

