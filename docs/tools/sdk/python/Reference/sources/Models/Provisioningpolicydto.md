---
id: provisioningpolicydto
title: Provisioningpolicydto
pagination_label: Provisioningpolicydto
sidebar_label: Provisioningpolicydto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Provisioningpolicydto', 'Provisioningpolicydto'] 
slug: /tools/sdk/python/sources/models/provisioningpolicydto
tags: ['SDK', 'Software Development Kit', 'Provisioningpolicydto', 'Provisioningpolicydto']
---

# Provisioningpolicydto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | the provisioning policy name | [required]
**description** | **str** | the description of the provisioning policy | [optional] 
**usage_type** | [**Usagetype**](usagetype) |  | [optional] 
**fields** | [**[]Fielddetailsdto**](fielddetailsdto) |  | [optional] 
}

## Example

```python
from sailpoint.sources.models.provisioningpolicydto import Provisioningpolicydto

provisioningpolicydto = Provisioningpolicydto(
name='example provisioning policy for inactive identities',
description='this provisioning policy creates access based on an identity going inactive',
usage_type='CREATE',
fields=[
                    sailpoint.sources.models.field_details_dto.Field Details Dto(
                        name = 'userName', 
                        transform = {"type":"rule","attributes":{"name":"Create Unique LDAP Attribute"}}, 
                        attributes = {"template":"${firstname}.${lastname}${uniqueCounter}","cloudMaxUniqueChecks":"50","cloudMaxSize":"20","cloudRequired":"true"}, 
                        is_required = False, 
                        type = 'string', 
                        is_multi_valued = False, )
                    ]
)

```
[[Back to top]](#) 

