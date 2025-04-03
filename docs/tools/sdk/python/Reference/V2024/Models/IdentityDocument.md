---
id: v2024-identity-document
title: IdentityDocument
pagination_label: IdentityDocument
sidebar_label: IdentityDocument
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityDocument', 'V2024IdentityDocument'] 
slug: /tools/sdk/python/v2024/models/identity-document
tags: ['SDK', 'Software Development Kit', 'IdentityDocument', 'V2024IdentityDocument']
---

# IdentityDocument

Identity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the referenced object. | [required]
**name** | **str** | The human readable name of the referenced object. | [required]
**display_name** | **str** | Identity's display name. | [optional] 
**first_name** | **str** | Identity's first name. | [optional] 
**last_name** | **str** | Identity's last name. | [optional] 
**email** | **str** | Identity's primary email address. | [optional] 
**created** | **datetime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**modified** | **datetime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**phone** | **str** | Identity's phone number. | [optional] 
**synced** | **str** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the `synced` time and the time when the updated data is actually available in the search API.  | [optional] 
**inactive** | **bool** | Indicates whether the identity is inactive. | [optional] [default to False]
**protected** | **bool** | Indicates whether the identity is protected. | [optional] [default to False]
**status** | **str** | Identity's status in SailPoint. | [optional] 
**employee_number** | **str** | Identity's employee number. | [optional] 
**manager** | [**IdentityDocumentAllOfManager**](identity-document-all-of-manager) |  | [optional] 
**is_manager** | **bool** | Indicates whether the identity is a manager of other identities. | [optional] 
**identity_profile** | [**IdentityDocumentAllOfIdentityProfile**](identity-document-all-of-identity-profile) |  | [optional] 
**source** | [**IdentityDocumentAllOfSource**](identity-document-all-of-source) |  | [optional] 
**attributes** | **map[string]object** | Map or dictionary of key/value pairs. | [optional] 
**disabled** | **bool** | Indicates whether the identity is disabled. | [optional] [default to False]
**locked** | **bool** | Indicates whether the identity is locked. | [optional] [default to False]
**processing_state** | **str** | Identity's processing state. | [optional] 
**processing_details** | [**ProcessingDetails**](processing-details) |  | [optional] 
**accounts** | [**[]BaseAccount**](base-account) | List of accounts associated with the identity. | [optional] 
**account_count** | **int** | Number of accounts associated with the identity. | [optional] 
**apps** | [**[]App**](app) | List of applications the identity has access to. | [optional] 
**app_count** | **int** | Number of applications the identity has access to. | [optional] 
**access** | [**[]IdentityAccess**](identity-access) | List of access items assigned to the identity. | [optional] 
**access_count** | **int** | Number of access items assigned to the identity. | [optional] 
**entitlement_count** | **int** | Number of entitlements assigned to the identity. | [optional] 
**role_count** | **int** | Number of roles assigned to the identity. | [optional] 
**access_profile_count** | **int** | Number of access profiles assigned to the identity. | [optional] 
**owns** | [**[]Owns**](owns) | Access items the identity owns. | [optional] 
**owns_count** | **int** | Number of access items the identity owns. | [optional] 
**tags** | **[]str** | Tags that have been applied to the object. | [optional] 
**tags_count** | **int** | Number of tags on the identity. | [optional] 
**visible_segments** | **[]str** | List of segments that the identity is in. | [optional] 
**visible_segment_count** | **int** | Number of segments the identity is in. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.identity_document import IdentityDocument

identity_document = IdentityDocument(
id='2c91808568c529c60168cca6f90c1313',
name='John Doe',
display_name='Carol.Adams',
first_name='Carol',
last_name='Adams',
email='Carol.Adams@sailpointdemo.com',
created='2018-06-25T20:22:28.104Z',
modified='2018-06-25T20:22:28.104Z',
phone='+1 440-527-3672',
synced='',
inactive=False,
protected=False,
status='UNREGISTERED',
employee_number='1a2a3d4e',
manager=sailpoint.v2024.models.identity_document_all_of_manager.IdentityDocument_allOf_manager(
                    id = '2c9180867dfe694b017e208e27c05799', 
                    name = 'Amanda.Ross', 
                    display_name = 'Amanda.Ross', ),
is_manager=False,
identity_profile=sailpoint.v2024.models.identity_document_all_of_identity_profile.IdentityDocument_allOf_identityProfile(
                    id = '3bc8ad26b8664945866b31339d1ff7d2', 
                    name = 'HR Employees', ),
source=sailpoint.v2024.models.identity_document_all_of_source.IdentityDocument_allOf_source(
                    id = '2c91808b6e9e6fb8016eec1a2b6f7b5f', 
                    name = 'ODS-HR-Employees', ),
attributes={country=US, firstname=Carol, cloudStatus=UNREGISTERED},
disabled=False,
locked=False,
processing_state='ERROR',
processing_details=sailpoint.v2024.models.processing_details.ProcessingDetails(
                    date = '2018-06-25T20:22:28.104Z', 
                    stage = 'In Process', 
                    retry_count = 0, 
                    stack_trace = '<stack trace>', 
                    message = '<message>', ),
accounts=[
                    null
                    ],
account_count=3,
apps=[
                    null
                    ],
app_count=2,
access=[
                    null
                    ],
access_count=5,
entitlement_count=10,
role_count=1,
access_profile_count=1,
owns=[
                    sailpoint.v2024.models.owns.Owns(
                        sources = [
                            sailpoint.v2024.models.reference.Reference(
                                id = '2c91808568c529c60168cca6f90c1313', 
                                name = 'John Doe', )
                            ], 
                        entitlements = [
                            sailpoint.v2024.models.reference.Reference(
                                id = '2c91808568c529c60168cca6f90c1313', 
                                name = 'John Doe', )
                            ], 
                        access_profiles = [
                            
                            ], 
                        roles = [
                            
                            ], 
                        apps = [
                            
                            ], 
                        governance_groups = [
                            
                            ], 
                        fallback_approver = False, )
                    ],
owns_count=5,
tags=[TAG_1, TAG_2],
tags_count=56,
visible_segments=[All Employees],
visible_segment_count=1
)

```
[[Back to top]](#) 

