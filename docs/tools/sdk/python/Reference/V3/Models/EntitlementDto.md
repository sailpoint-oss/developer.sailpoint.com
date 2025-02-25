---
id: entitlement-dto
title: EntitlementDto
pagination_label: EntitlementDto
sidebar_label: EntitlementDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementDto', 'EntitlementDto'] 
slug: /tools/sdk/python/v3/models/entitlement-dto
tags: ['SDK', 'Software Development Kit', 'EntitlementDto', 'EntitlementDto']
---

# EntitlementDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] [readonly] 
**name** | **str** | Name of the Object | [required]
**created** | **datetime** | Creation date of the Object | [optional] [readonly] 
**modified** | **datetime** | Last modification date of the Object | [optional] [readonly] 
**attribute** | **str** | Name of the entitlement attribute | [optional] 
**value** | **str** | Raw value of the entitlement | [optional] 
**description** | **str** | Entitlment description | [optional] 
**attributes** | **map[string]object** | Entitlement attributes | [optional] 
**source_schema_object_type** | **str** | Schema objectType on the given application that maps to an Account Group | [optional] 
**privileged** | **bool** | Determines if this Entitlement is privileged. | [optional] 
**cloud_governed** | **bool** | Determines if this Entitlement is goverened in the cloud. | [optional] 
**source** | [**EntitlementSource**](entitlement-source) |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.entitlement_dto import EntitlementDto

entitlement_dto = EntitlementDto(
id='id12345',
name='aName',
created='2015-05-28T14:07:17Z',
modified='2015-05-28T14:07:17Z',
attribute='authorizationType',
value='CN=Users,dc=sailpoint,dc=com',
description='Active Directory DC',
attributes={GroupType=Security, sAMAccountName=Buyer},
source_schema_object_type='group',
privileged=False,
cloud_governed=False,
source=sailpoint.v3.models.entitlement_source.EntitlementSource(
                    type = 'SOURCE', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'HR Active Directory', )
)

```
[[Back to top]](#) 

