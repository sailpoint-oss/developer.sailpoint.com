---
id: identityprofile
title: Identityprofile
pagination_label: Identityprofile
sidebar_label: Identityprofile
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identityprofile', 'Identityprofile'] 
slug: /tools/sdk/python/identity-profiles/models/identityprofile
tags: ['SDK', 'Software Development Kit', 'Identityprofile', 'Identityprofile']
---

# Identityprofile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] [readonly] 
**name** | **str** | Name of the Object | [required]
**created** | **datetime** | Creation date of the Object | [optional] [readonly] 
**modified** | **datetime** | Last modification date of the Object | [optional] [readonly] 
**description** | **str** | Identity profile's description. | [optional] 
**owner** | [**IdentityprofileAllOfOwner**](identityprofile-all-of-owner) |  | [optional] 
**priority** | **int** | Identity profile's priority. | [optional] 
**authoritative_source** | [**IdentityprofileAllOfAuthoritativeSource**](identityprofile-all-of-authoritative-source) |  | [required]
**identity_refresh_required** | **bool** | Set this value to 'True' if an identity refresh is necessary. You would typically want to trigger an identity refresh when a change has been made on the source. | [optional] [default to False]
**identity_count** | **int** | Number of identities belonging to the identity profile. | [optional] 
**identity_attribute_config** | [**Identityattributeconfig**](identityattributeconfig) |  | [optional] 
**identity_exception_report_reference** | [**Identityexceptionreportreference**](identityexceptionreportreference) |  | [optional] 
**has_time_based_attr** | **bool** | Indicates the value of `requiresPeriodicRefresh` attribute for the identity profile. | [optional] [default to False]
}

## Example

```python
from sailpoint.identity_profiles.models.identityprofile import Identityprofile

identityprofile = Identityprofile(
id='id12345',
name='aName',
created='2015-05-28T14:07:17Z',
modified='2015-05-28T14:07:17Z',
description='My custom flat file profile',
owner=sailpoint.identity_profiles.models.identityprofile_all_of_owner.identityprofile_allOf_owner(
                    type = 'IDENTITY', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'William Wilson', ),
priority=10,
authoritative_source=sailpoint.identity_profiles.models.identityprofile_all_of_authoritative_source.identityprofile_allOf_authoritativeSource(
                    type = 'SOURCE', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'HR Active Directory', ),
identity_refresh_required=True,
identity_count=8,
identity_attribute_config=sailpoint.identity_profiles.models.identity_attribute_config.Identity Attribute Config(
                    enabled = True, 
                    attribute_transforms = [
                        sailpoint.identity_profiles.models.identity_attribute_transform.Identity Attribute Transform(
                            identity_attribute_name = 'email', 
                            transform_definition = sailpoint.identity_profiles.models.transform_definition.Transform Definition(
                                type = 'accountAttribute', 
                                attributes = {"attributeName":"e-mail","sourceName":"MySource","sourceId":"2c9180877a826e68017a8c0b03da1a53"}, ), )
                        ], ),
identity_exception_report_reference=sailpoint.identity_profiles.models.identity_exception_report_reference.Identity Exception Report Reference(
                    task_result_id = '2b838de9-db9b-abcf-e646-d4f274ad4238', 
                    report_name = 'My annual report', ),
has_time_based_attr=True
)

```
[[Back to top]](#) 

