---
id: beta-role-mining-potential-role-source-usage
title: RoleMiningPotentialRoleSourceUsage
pagination_label: RoleMiningPotentialRoleSourceUsage
sidebar_label: RoleMiningPotentialRoleSourceUsage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleMiningPotentialRoleSourceUsage', 'BetaRoleMiningPotentialRoleSourceUsage'] 
slug: /tools/sdk/python/beta/models/role-mining-potential-role-source-usage
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleSourceUsage', 'BetaRoleMiningPotentialRoleSourceUsage']
---

# RoleMiningPotentialRoleSourceUsage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identity ID | [optional] 
**display_name** | **str** | Display name for the identity | [optional] 
**email** | **str** | Email address for the identity | [optional] 
**usage_count** | **int** | The number of days there has been usage of the source by the identity. | [optional] 
}

## Example

```python
from sailpoint.beta.models.role_mining_potential_role_source_usage import RoleMiningPotentialRoleSourceUsage

role_mining_potential_role_source_usage = RoleMiningPotentialRoleSourceUsage(
id='2c918089762475180176267f894b54dc',
display_name='Kirk Koepp',
email='kirk.koepp@testmail.identitynow.com',
usage_count=25
)

```
[[Back to top]](#) 

