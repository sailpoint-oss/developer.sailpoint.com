---
id: beta-identity-profile
title: IdentityProfile
pagination_label: IdentityProfile
sidebar_label: IdentityProfile
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityProfile', 'BetaIdentityProfile'] 
slug: /tools/sdk/python/beta/models/identity-profile
tags: ['SDK', 'Software Development Kit', 'IdentityProfile', 'BetaIdentityProfile']
---

# IdentityProfile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] [readonly] 
**name** | **str** | Name of the Object | [required]
**created** | **datetime** | Creation date of the Object | [optional] [readonly] 
**modified** | **datetime** | Last modification date of the Object | [optional] [readonly] 
**description** | **str** | Identity profile's description. | [optional] 
**owner** | [**IdentityProfileAllOfOwner**](identity-profile-all-of-owner) |  | [optional] 
**priority** | **int** | Identity profile's priority. | [optional] 
**authoritative_source** | [**IdentityProfileAllOfAuthoritativeSource**](identity-profile-all-of-authoritative-source) |  | [required]
**identity_refresh_required** | **bool** | Set this value to 'True' if an identity refresh is necessary. You would typically want to trigger an identity refresh when a change has been made on the source. | [optional] [default to False]
**identity_count** | **int** | Number of identities belonging to the identity profile. | [optional] 
**identity_attribute_config** | [**IdentityAttributeConfig**](identity-attribute-config) |  | [optional] 
**identity_exception_report_reference** | [**IdentityExceptionReportReference**](identity-exception-report-reference) |  | [optional] 
**has_time_based_attr** | **bool** | Indicates the value of `requiresPeriodicRefresh` attribute for the identity profile. | [optional] [default to True]
}

## Example

```python
from sailpoint.beta.models.identity_profile import IdentityProfile

identity_profile = IdentityProfile(
id='id12345',
name='aName',
created='2023-01-03T21:16:22.432Z',
modified='2023-01-03T21:16:22.432Z',
description='My custom flat file profile',
owner=sailpoint.beta.models.identity_profile_all_of_owner.IdentityProfile_allOf_owner(
                    type = 'IDENTITY', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'William Wilson', ),
priority=10,
authoritative_source=sailpoint.beta.models.identity_profile_all_of_authoritative_source.IdentityProfile_allOf_authoritativeSource(
                    type = 'SOURCE', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'HR Active Directory', ),
identity_refresh_required=True,
identity_count=8,
identity_attribute_config=sailpoint.beta.models.identity_attribute_config.Identity Attribute Config(
                    enabled = True, 
                    attribute_transforms = [
                        sailpoint.beta.models.identity_attribute_transform.Identity Attribute Transform(
                            identity_attribute_name = 'email', 
                            transform_definition = sailpoint.beta.models.transform_definition.Transform Definition(
                                type = 'accountAttribute', 
                                attributes = {attributeName=e-mail, sourceName=MySource, sourceId=2c9180877a826e68017a8c0b03da1a53}, ), )
                        ], ),
identity_exception_report_reference=sailpoint.beta.models.identity_exception_report_reference.Identity Exception Report Reference(
                    task_result_id = '', 
                    report_name = 'My annual report', ),
has_time_based_attr=True
)

```
[[Back to top]](#) 

