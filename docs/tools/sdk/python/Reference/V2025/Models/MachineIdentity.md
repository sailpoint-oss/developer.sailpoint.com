---
id: v2025-machine-identity
title: MachineIdentity
pagination_label: MachineIdentity
sidebar_label: MachineIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MachineIdentity', 'V2025MachineIdentity'] 
slug: /tools/sdk/python/v2025/models/machine-identity
tags: ['SDK', 'Software Development Kit', 'MachineIdentity', 'V2025MachineIdentity']
---

# MachineIdentity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] [readonly] 
**name** | **str** | Name of the Object | [required]
**created** | **datetime** | Creation date of the Object | [optional] [readonly] 
**modified** | **datetime** | Last modification date of the Object | [optional] [readonly] 
**business_application** | **str** | The business application that the identity represents | [required]
**description** | **str** | Description of machine identity | [optional] 
**manually_edited** | **bool** | Indicates if the machine identity has been manually edited | [optional] [default to False]
**attributes** | **object** | A map of custom machine identity attributes | [optional] 
**subtype** | **str** | The subtype value associated to the machine identity | [required]
**owners** | [**MachineIdentityDtoOwners**](machine-identity-dto-owners) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.machine_identity import MachineIdentity

machine_identity = MachineIdentity(
id='id12345',
name='aName',
created='2015-05-28T14:07:17Z',
modified='2015-05-28T14:07:17Z',
business_application='ADService',
description='',
manually_edited=True,
attributes={"Region":"EU"},
subtype='Application',
owners=sailpoint.v2025.models.machine_identity_dto_owners.MachineIdentityDto_owners(
                    primary_identity = sailpoint.v2025.models.machine_identity_dto_owners_primary_identity.MachineIdentityDto_owners_primaryIdentity(), 
                    secondary_identities = [
                        sailpoint.v2025.models.base_reference_dto.BaseReferenceDto(
                            type = 'IDENTITY', 
                            id = '2c91808568c529c60168cca6f90c1313', 
                            name = 'William Wilson', )
                        ], )
)

```
[[Back to top]](#) 

