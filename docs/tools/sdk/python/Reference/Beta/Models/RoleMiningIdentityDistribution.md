---
id: beta-role-mining-identity-distribution
title: RoleMiningIdentityDistribution
pagination_label: RoleMiningIdentityDistribution
sidebar_label: RoleMiningIdentityDistribution
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleMiningIdentityDistribution', 'BetaRoleMiningIdentityDistribution'] 
slug: /tools/sdk/python/beta/models/role-mining-identity-distribution
tags: ['SDK', 'Software Development Kit', 'RoleMiningIdentityDistribution', 'BetaRoleMiningIdentityDistribution']
---

# RoleMiningIdentityDistribution


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_name** | **str** | Id of the potential role | [optional] 
**distribution** | **[]Dict[str, str]** |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.role_mining_identity_distribution import RoleMiningIdentityDistribution

role_mining_identity_distribution = RoleMiningIdentityDistribution(
attribute_name='department',
distribution=[{attributeValue=NM Tier 3, count=6}]
)

```
[[Back to top]](#) 

