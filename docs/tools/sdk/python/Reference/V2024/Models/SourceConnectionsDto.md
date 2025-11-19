---
id: v2024-source-connections-dto
title: SourceConnectionsDto
pagination_label: SourceConnectionsDto
sidebar_label: SourceConnectionsDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceConnectionsDto', 'V2024SourceConnectionsDto'] 
slug: /tools/sdk/python/v2024/models/source-connections-dto
tags: ['SDK', 'Software Development Kit', 'SourceConnectionsDto', 'V2024SourceConnectionsDto']
---

# SourceConnectionsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_profiles** | [**[]IdentityProfilesConnections**](identity-profiles-connections) | The IdentityProfile attached to this source | [optional] 
**credential_profiles** | **[]str** | Name of the CredentialProfile attached to this source | [optional] 
**source_attributes** | **[]str** | The attributes attached to this source | [optional] 
**mapping_profiles** | **[]str** | The profiles attached to this source | [optional] 
**dependent_custom_transforms** | [**[]TransformRead**](transform-read) | A list of custom transforms associated with this source. A transform will be considered associated with a source if any attributes of the transform specify the source as the sourceName. | [optional] 
**dependent_apps** | [**[]DependantAppConnections**](dependant-app-connections) |  | [optional] 
**missing_dependents** | [**[]DependantConnectionsMissingDto**](dependant-connections-missing-dto) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.source_connections_dto import SourceConnectionsDto

source_connections_dto = SourceConnectionsDto(
identity_profiles=[
                    sailpoint.v2024.models.identity_profiles_connections.Identity Profiles Connections(
                        id = '76cfddb62818416f816bc494410f46c4', 
                        name = 'ODS-Identity-Profile', 
                        identity_count = 100, )
                    ],
credential_profiles=[
                    '[Profile ODS]'
                    ],
source_attributes=[
                    '[sAMAccountName, mail, sn, givenName, displayName, employeeNumber, manager, telephoneNumber]'
                    ],
mapping_profiles=[ODS-AD-Profile, ODS-Profile2],
dependent_custom_transforms=[{id=61190eae-290b-4335-aeb8-7335f1fd99cb, name=Split Transform, type=split, attributes={delimiter=-, index=1, input={attributes={sourceName=Example CSV Source, attributeName=last_name}, type=accountAttribute}}, internal=false}],
dependent_apps=[
                    sailpoint.v2024.models.dependant_app_connections.Dependant App Connections(
                        cloud_app_id = '9e3cdd80edf84f119327df8bbd5bb5ac', 
                        description = 'This is a Sailpoint application', 
                        enabled = True, 
                        provision_request_enabled = True, 
                        account_source = sailpoint.v2024.models.dependant_app_connections_account_source.DependantAppConnections_accountSource(
                            use_for_password_management = False, 
                            password_policies = [
                                sailpoint.v2024.models.dependant_app_connections_account_source_password_policies_inner.DependantAppConnections_accountSource_passwordPolicies_inner(
                                    type = 'PASSWORD_POLICY', 
                                    id = '2c91808568c529c60168cca6f90c1313', 
                                    name = 'Policy ODS', )
                                ], ), 
                        launcher_count = 100, 
                        match_all_account = True, 
                        owner = [
                            sailpoint.v2024.models.base_reference_dto.Base Reference Dto(
                                type = 'IDENTITY', 
                                id = '2c91808568c529c60168cca6f90c1313', 
                                name = 'William Wilson', )
                            ], 
                        app_center_enabled = False, )
                    ],
missing_dependents=[
                    sailpoint.v2024.models.dependant_connections_missing_dto.Dependant Connections Missing Dto(
                        dependency_type = 'dependantApps', 
                        reason = 'If there was an error retrieving any dependencies, it would lbe listed here', )
                    ]
)

```
[[Back to top]](#) 

