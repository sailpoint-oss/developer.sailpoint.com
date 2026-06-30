---
id: machineidentityresponse
title: Machineidentityresponse
pagination_label: Machineidentityresponse
sidebar_label: Machineidentityresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Machineidentityresponse', 'Machineidentityresponse'] 
slug: /tools/sdk/python/machine-identities/models/machineidentityresponse
tags: ['SDK', 'Software Development Kit', 'Machineidentityresponse', 'Machineidentityresponse']
---

# Machineidentityresponse


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
**manually_edited** | **bool** | Indicates if the machine identity has been manually edited | [optional] [default to False]
**manually_created** | **bool** | Indicates if the machine identity has been manually created | [optional] [default to False]
**source** | **object** | The source of the machine identity | [optional] 
**dataset_id** | **str** | The dataset id associated to the source in which the identity was retrieved from | [optional] 
**user_entitlements** | [**[]MachineIdentityResponseUserEntitlements**](machine-identity-response-user-entitlements) | The user entitlements associated to the machine identity | [optional] 
}

## Example

```python
from sailpoint.machine_identities.models.machineidentityresponse import Machineidentityresponse

machineidentityresponse = Machineidentityresponse(
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
manually_edited=True,
manually_created=True,
source=sailpoint.machine_identities.models.machine_identity_response_source.Machine_Identity_Response_source(),
dataset_id='8886e5e3-63d0-462f-a195-d98da885b8dc',
user_entitlements=[
                    sailpoint.machine_identities.models.machine_identity_response_user_entitlements.Machine_Identity_Response_userEntitlements(
                        source_id = '5898b7c1-620c-49c6-cccc-cbf81eb4bddd', 
                        entitlement_id = '6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa', 
                        display_name = 'Entitlement Name', 
                        source = sailpoint.machine_identities.models.machine_identity_response_source_1.Machine_Identity_Response_source_1(), )
                    ]
)

```
[[Back to top]](#) 

