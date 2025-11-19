---
id: v2024-identity-entitlement-details-entitlement-dto
title: IdentityEntitlementDetailsEntitlementDto
pagination_label: IdentityEntitlementDetailsEntitlementDto
sidebar_label: IdentityEntitlementDetailsEntitlementDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityEntitlementDetailsEntitlementDto', 'V2024IdentityEntitlementDetailsEntitlementDto'] 
slug: /tools/sdk/python/v2024/models/identity-entitlement-details-entitlement-dto
tags: ['SDK', 'Software Development Kit', 'IdentityEntitlementDetailsEntitlementDto', 'V2024IdentityEntitlementDetailsEntitlementDto']
---

# IdentityEntitlementDetailsEntitlementDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The entitlement id | [optional] 
**name** | **str** | The entitlement name | [optional] 
**created** | **datetime** | Time when the entitlement was last modified | [optional] 
**modified** | **datetime** | Time when the entitlement was last modified | [optional] 
**description** | **str** | The description of the entitlement | [optional] 
**type** | **str** | The type of the object, will always be \"ENTITLEMENT\" | [optional] 
**source_id** | **str** | The source ID | [optional] 
**source_name** | **str** | The source name | [optional] 
**owner** | [**OwnerDto**](owner-dto) |  | [optional] 
**value** | **str** | The value of the entitlement | [optional] 
**flags** | **[]str** | a list of properties informing the viewer about the entitlement | [optional] 
}

## Example

```python
from sailpoint.v2024.models.identity_entitlement_details_entitlement_dto import IdentityEntitlementDetailsEntitlementDto

identity_entitlement_details_entitlement_dto = IdentityEntitlementDetailsEntitlementDto(
id='2c91808874ff91550175097daaec161c',
name='LauncherTest2',
created='2020-10-08T18:33:52.029Z',
modified='2020-10-08T18:33:52.029Z',
description='CN=LauncherTest2,OU=LauncherTestOrg,OU=slpt-automation,DC=TestAutomationAD,DC=local',
type='ENTITLEMENT',
source_id='2c9180827ca885d7017ca8ce28a000eb',
source_name='ODS-AD-Source',
owner=sailpoint.v2024.models.owner_dto.Owner Dto(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Support', ),
value='CN=LauncherTest2,OU=LauncherTestOrg,OU=slpt-automation,DC=TestAutomationAD,DC=local',
flags=[privileged]
)

```
[[Back to top]](#) 

