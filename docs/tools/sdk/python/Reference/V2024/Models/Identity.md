---
id: v2024-identity
title: Identity
pagination_label: Identity
sidebar_label: Identity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identity', 'V2024Identity'] 
slug: /tools/sdk/python/v2024/models/identity
tags: ['SDK', 'Software Development Kit', 'Identity', 'V2024Identity']
---

# Identity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the identity | [optional] [readonly] 
**name** | **str** | The identity's name is equivalent to its Display Name attribute. | [required]
**created** | **datetime** | Creation date of the identity | [optional] [readonly] 
**modified** | **datetime** | Last modification date of the identity | [optional] [readonly] 
**alias** | **str** | The identity's alternate unique identifier is equivalent to its Account Name on the authoritative source account schema. | [optional] 
**email_address** | **str** | The email address of the identity | [optional] 
**processing_state** |  **Enum** [  'ERROR',    'OK' ] | The processing state of the identity | [optional] 
**identity_status** |  **Enum** [  'UNREGISTERED',    'REGISTERED',    'PENDING',    'WARNING',    'DISABLED',    'ACTIVE',    'DEACTIVATED',    'TERMINATED',    'ERROR',    'LOCKED' ] | The identity's status in the system | [optional] 
**manager_ref** | [**IdentityManagerRef**](identity-manager-ref) |  | [optional] 
**is_manager** | **bool** | Whether this identity is a manager of another identity | [optional] [default to False]
**last_refresh** | **datetime** | The last time the identity was refreshed by the system | [optional] 
**attributes** | **object** | A map with the identity attributes for the identity | [optional] 
**lifecycle_state** | [**IdentityLifecycleState**](identity-lifecycle-state) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.identity import Identity

identity = Identity(
id='01f04e428c484542a241dc89c303b178',
name='Walter White',
created='2023-01-03T21:16:22.432Z',
modified='2023-01-03T21:16:22.432Z',
alias='walter.white',
email_address='walter.white@example.com',
processing_state='ERROR',
identity_status='LOCKED',
manager_ref=sailpoint.v2024.models.identity_manager_ref.Identity_managerRef(
                    type = 'IDENTITY', 
                    id = '2c4180a46faadee4016fb4e018c20626', 
                    name = 'Robert Robinson', ),
is_manager=True,
last_refresh='2020-11-22T15:42:31.123Z',
attributes={uid=86754, firstname=Walter, cloudStatus=UNREGISTERED, displayName=Walter White, identificationNumber=86754, lastSyncDate=1470348809380, email=walter.white@example.com, lastname=White},
lifecycle_state=
)

```
[[Back to top]](#) 

