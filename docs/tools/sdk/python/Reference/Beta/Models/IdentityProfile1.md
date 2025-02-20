---
id: beta-identity-profile1
title: IdentityProfile1
pagination_label: IdentityProfile1
sidebar_label: IdentityProfile1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityProfile1', 'BetaIdentityProfile1'] 
slug: /tools/sdk/python/beta/models/identity-profile1
tags: ['SDK', 'Software Development Kit', 'IdentityProfile1', 'BetaIdentityProfile1']
---

# IdentityProfile1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] [readonly] 
**name** | **str** | Name of the Object | [required]
**created** | **datetime** | Creation date of the Object | [optional] [readonly] 
**modified** | **datetime** | Last modification date of the Object | [optional] [readonly] 
**description** | **str** | The description of the Identity Profile. | [optional] 
**owner** | [**IdentityProfileAllOfOwner**](identity-profile-all-of-owner) |  | [optional] 
**priority** | **int** | The priority for an Identity Profile. | [optional] 
**authoritative_source** | [**IdentityProfile1AllOfAuthoritativeSource**](identity-profile1-all-of-authoritative-source) |  | [required]
**identity_refresh_required** | **bool** | True if a identity refresh is needed. Typically triggered when a change on the source has been made. | [optional] [default to False]
**identity_count** | **int** | The number of identities that belong to the Identity Profile. | [optional] 
**identity_attribute_config** | [**IdentityAttributeConfig1**](identity-attribute-config1) |  | [optional] 
**identity_exception_report_reference** | [**IdentityExceptionReportReference1**](identity-exception-report-reference1) |  | [optional] 
**has_time_based_attr** | **bool** | Indicates the value of requiresPeriodicRefresh attribute for the Identity Profile. | [optional] [default to False]
}

## Example

```python
from sailpoint.beta.models.identity_profile1 import IdentityProfile1

identity_profile1 = IdentityProfile1(
id='id12345',
name='aName',
created='2015-05-28T14:07:17Z',
modified='2015-05-28T14:07:17Z',
description='My custom flat file profile',
owner=sailpoint.beta.models.identity_profile_all_of_owner.IdentityProfile_allOf_owner(
                    type = 'IDENTITY', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'William Wilson', ),
priority=10,
authoritative_source=sailpoint.beta.models.identity_profile_1_all_of_authoritative_source.IdentityProfile_1_allOf_authoritativeSource(
                    type = 'SOURCE', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'HR Active Directory', ),
identity_refresh_required=True,
identity_count=8,
identity_attribute_config=sailpoint.beta.models.identity_attribute_config_1.IdentityAttributeConfig_1(
                    enabled = True, 
                    attribute_transforms = [
                        sailpoint.beta.models.identity_attribute_transform_1.IdentityAttributeTransform_1(
                            identity_attribute_name = 'email', 
                            transform_definition = sailpoint.beta.models.transform_definition_1.TransformDefinition_1(
                                type = 'accountAttribute', 
                                attributes = {attributeName=e-mail, sourceName=MySource, sourceId=2c9180877a826e68017a8c0b03da1a53}, ), )
                        ], ),
identity_exception_report_reference=sailpoint.beta.models.identity_exception_report_reference_1.IdentityExceptionReportReference_1(
                    task_result_id = '2b838de9-db9b-abcf-e646-d4f274ad4238', 
                    report_name = 'My annual report', ),
has_time_based_attr=True
)

```
[[Back to top]](#) 

