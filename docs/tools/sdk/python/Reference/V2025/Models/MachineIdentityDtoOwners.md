---
id: v2025-machine-identity-dto-owners
title: MachineIdentityDtoOwners
pagination_label: MachineIdentityDtoOwners
sidebar_label: MachineIdentityDtoOwners
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MachineIdentityDtoOwners', 'V2025MachineIdentityDtoOwners'] 
slug: /tools/sdk/python/v2025/models/machine-identity-dto-owners
tags: ['SDK', 'Software Development Kit', 'MachineIdentityDtoOwners', 'V2025MachineIdentityDtoOwners']
---

# MachineIdentityDtoOwners

The owner configuration associated to the machine identity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_identity** | **object** | Defines the identity which is selected as the primary owner | [required]
**secondary_identities** | [**[]BaseReferenceDto**](base-reference-dto) | Defines the identities which are selected as secondary owners | [required]
}

## Example

```python
from sailpoint.v2025.models.machine_identity_dto_owners import MachineIdentityDtoOwners

machine_identity_dto_owners = MachineIdentityDtoOwners(
primary_identity=sailpoint.v2025.models.machine_identity_dto_owners_primary_identity.MachineIdentityDto_owners_primaryIdentity(),
secondary_identities=[
                    sailpoint.v2025.models.base_reference_dto.Base Reference Dto(
                        type = 'IDENTITY', 
                        id = '2c91808568c529c60168cca6f90c1313', 
                        name = 'William Wilson', )
                    ]
)

```
[[Back to top]](#) 

