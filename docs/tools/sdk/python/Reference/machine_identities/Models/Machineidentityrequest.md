---
id: machineidentityrequest
title: Machineidentityrequest
pagination_label: Machineidentityrequest
sidebar_label: Machineidentityrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Machineidentityrequest', 'Machineidentityrequest'] 
slug: /tools/sdk/python/machine-identities/models/machineidentityrequest
tags: ['SDK', 'Software Development Kit', 'Machineidentityrequest', 'Machineidentityrequest']
---

# Machineidentityrequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] [readonly] 
**name** | **str** | Name of the Object | [required]
**created** | **datetime** | Creation date of the Object | [optional] [readonly] 
**modified** | **datetime** | Last modification date of the Object | [optional] [readonly] 
**native_identity** | **str** | The native identity associated to the machine identity directly aggregated from a source | [required]
**description** | **str** | Description of machine identity | [optional] 
**attributes** | **object** | A map of custom machine identity attributes | [optional] 
**subtype** | **str** | The subtype value associated to the machine identity | [required]
**owners** | [**MachineIdentityDtoOwners**](machine-identity-dto-owners) |  | [optional] 
**source_id** | **str** | The source id associated to the machine identity | [optional] 
**uuid** | **str** | The UUID associated to the machine identity directly aggregated from a source | [optional] 
**user_entitlements** | [**[]MachineIdentityRequestUserEntitlements**](machine-identity-request-user-entitlements) | The user entitlements associated to the machine identity | [optional] 
}

## Example

```python
from sailpoint.machine_identities.models.machineidentityrequest import Machineidentityrequest

machineidentityrequest = Machineidentityrequest(
id='id12345',
name='aName',
created='2015-05-28T14:07:17Z',
modified='2015-05-28T14:07:17Z',
native_identity='abc:123:dddd',
description='',
attributes={"Region":"EU"},
subtype='Application',
owners=sailpoint.machine_identities.models.machine_identity_dto_owners.MachineIdentityDto_owners(
                    primary_identity = sailpoint.machine_identities.models.machine_identity_dto_owners_primary_identity.MachineIdentityDto_owners_primaryIdentity(), 
                    secondary_identities = [
                        sailpoint.machine_identities.models.base_reference_dto.Base Reference Dto(
                            type = 'IDENTITY', 
                            id = '2c91808568c529c60168cca6f90c1313', 
                            name = 'William Wilson', )
                        ], ),
source_id='6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa',
uuid='f5dd23fe-3414-42b7-bb1c-869400ad7a10',
user_entitlements=[
                    sailpoint.machine_identities.models.machine_identity_request_user_entitlements.Machine_Identity_Request_userEntitlements(
                        entitlement_id = '6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa', 
                        source_id = '5898b7c1-620c-49c6-cccc-cbf81eb4bddd', )
                    ]
)

```
[[Back to top]](#) 

