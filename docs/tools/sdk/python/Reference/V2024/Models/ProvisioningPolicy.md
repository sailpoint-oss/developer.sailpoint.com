---
id: v2024-provisioning-policy
title: ProvisioningPolicy
pagination_label: ProvisioningPolicy
sidebar_label: ProvisioningPolicy
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ProvisioningPolicy', 'V2024ProvisioningPolicy'] 
slug: /tools/sdk/python/v2024/models/provisioning-policy
tags: ['SDK', 'Software Development Kit', 'ProvisioningPolicy', 'V2024ProvisioningPolicy']
---

# ProvisioningPolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | the provisioning policy name | [required]
**description** | **str** | the description of the provisioning policy | [optional] 
**usage_type** | [**UsageType**](usage-type) |  | [optional] 
**fields** | [**[]FieldDetailsDto**](field-details-dto) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.provisioning_policy import ProvisioningPolicy

provisioning_policy = ProvisioningPolicy(
name='example provisioning policy for inactive identities',
description='this provisioning policy creates access based on an identity going inactive',
usage_type='CREATE',
fields=[
                    sailpoint.v2024.models.field_details_dto.Field Details Dto(
                        name = 'userName', 
                        transform = {type=rule, attributes={name=Create Unique LDAP Attribute}}, 
                        attributes = {template=${firstname}.${lastname}${uniqueCounter}, cloudMaxUniqueChecks=50, cloudMaxSize=20, cloudRequired=true}, 
                        is_required = False, 
                        type = 'string', 
                        is_multi_valued = False, )
                    ]
)

```
[[Back to top]](#) 

