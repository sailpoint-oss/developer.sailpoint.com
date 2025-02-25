---
id: beta-provisioning-policy-dto
title: ProvisioningPolicyDto
pagination_label: ProvisioningPolicyDto
sidebar_label: ProvisioningPolicyDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ProvisioningPolicyDto', 'BetaProvisioningPolicyDto'] 
slug: /tools/sdk/python/beta/models/provisioning-policy-dto
tags: ['SDK', 'Software Development Kit', 'ProvisioningPolicyDto', 'BetaProvisioningPolicyDto']
---

# ProvisioningPolicyDto


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
from sailpoint.beta.models.provisioning_policy_dto import ProvisioningPolicyDto

provisioning_policy_dto = ProvisioningPolicyDto(
name='example provisioning policy for inactive identities',
description='this provisioning policy creates access based on an identity going inactive',
usage_type='CREATE',
fields=[
                    sailpoint.beta.models.field_details_dto.FieldDetailsDto(
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

