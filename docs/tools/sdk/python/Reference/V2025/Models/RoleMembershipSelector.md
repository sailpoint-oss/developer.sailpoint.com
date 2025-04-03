---
id: v2025-role-membership-selector
title: RoleMembershipSelector
pagination_label: RoleMembershipSelector
sidebar_label: RoleMembershipSelector
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleMembershipSelector', 'V2025RoleMembershipSelector'] 
slug: /tools/sdk/python/v2025/models/role-membership-selector
tags: ['SDK', 'Software Development Kit', 'RoleMembershipSelector', 'V2025RoleMembershipSelector']
---

# RoleMembershipSelector

When present, specifies that the Role is to be granted to Identities which either satisfy specific criteria or which are members of a given list of Identities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**RoleMembershipSelectorType**](role-membership-selector-type) |  | [optional] 
**criteria** | [**RoleCriteriaLevel1**](role-criteria-level1) |  | [optional] 
**identities** | [**[]RoleMembershipIdentity**](role-membership-identity) | Defines role membership as being exclusive to the specified Identities, when type is IDENTITY_LIST. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.role_membership_selector import RoleMembershipSelector

role_membership_selector = RoleMembershipSelector(
type='IDENTITY_LIST',
criteria=sailpoint.v2025.models.role_criteria_level1.RoleCriteriaLevel1(
                    operation = 'EQUALS', 
                    key = sailpoint.v2025.models.role_criteria_key.RoleCriteriaKey(
                        type = 'ACCOUNT', 
                        property = 'attribute.email', 
                        source_id = '2c9180867427f3a301745aec18211519', ), 
                    string_value = 'carlee.cert1c9f9b6fd@mailinator.com', 
                    children = [
                        sailpoint.v2025.models.role_criteria_level2.RoleCriteriaLevel2(
                            string_value = 'carlee.cert1c9f9b6fd@mailinator.com', )
                        ], ),
identities=[
                    sailpoint.v2025.models.role_membership_identity.RoleMembershipIdentity(
                        type = 'IDENTITY', 
                        id = '2c9180a46faadee4016fb4e018c20639', 
                        name = 'Thomas Edison', 
                        alias_name = 't.edison', )
                    ]
)

```
[[Back to top]](#) 

