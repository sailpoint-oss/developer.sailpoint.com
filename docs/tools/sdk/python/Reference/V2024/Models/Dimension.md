---
id: v2024-dimension
title: Dimension
pagination_label: Dimension
sidebar_label: Dimension
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Dimension', 'V2024Dimension'] 
slug: /tools/sdk/python/v2024/models/dimension
tags: ['SDK', 'Software Development Kit', 'Dimension', 'V2024Dimension']
---

# Dimension

A Dimension

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the Dimension. This field must be left null when creating a dimension, otherwise a 400 Bad Request error will result. | [optional] 
**name** | **str** | The human-readable display name of the Dimension | [required]
**created** | **datetime** | Date the Dimension was created | [optional] [readonly] 
**modified** | **datetime** | Date the Dimension was last modified. | [optional] [readonly] 
**description** | **str** | A human-readable description of the Dimension | [optional] 
**owner** | [**OwnerReference**](owner-reference) |  | [required]
**access_profiles** | [**[]AccessProfileRef**](access-profile-ref) |  | [optional] 
**entitlements** | [**[]EntitlementRef**](entitlement-ref) |  | [optional] 
**membership** | [**DimensionMembershipSelector**](dimension-membership-selector) |  | [optional] 
**parent_id** | **str** | The ID of the parent role. This field can be left null when creating a dimension, but if provided, it must match the role ID specified in the path variable of the API call. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.dimension import Dimension

dimension = Dimension(
id='2c918086749d78830174a1a40e121518',
name='Dimension 2567',
created='2021-03-01T22:32:58.104Z',
modified='2021-03-02T20:22:28.104Z',
description='Urna amet cursus pellentesque nisl orci maximus lorem nisl euismod fusce morbi placerat adipiscing maecenas nisi tristique et metus et lacus sed morbi nunc nisl maximus magna arcu varius sollicitudin elementum enim maecenas nisi id ipsum tempus fusce diam ipsum tortor.',
owner=sailpoint.v2024.models.owner_reference.OwnerReference(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'support', ),
access_profiles=[
                    sailpoint.v2024.models.access_profile_ref.AccessProfileRef(
                        id = 'ff808081751e6e129f1518161919ecca', 
                        type = 'ACCESS_PROFILE', 
                        name = 'Access Profile 2567', )
                    ],
entitlements=[
                    sailpoint.v2024.models.entitlement_ref.EntitlementRef(
                        type = 'ENTITLEMENT', 
                        id = '2c91809773dee32014e13e122092014e', 
                        name = 'CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local', )
                    ],
membership=sailpoint.v2024.models.dimension_membership_selector.DimensionMembershipSelector(
                    type = 'STANDARD', 
                    criteria = sailpoint.v2024.models.dimension_criteria_level1.DimensionCriteriaLevel1(
                        operation = 'EQUALS', 
                        key = sailpoint.v2024.models.dimension_criteria_key.DimensionCriteriaKey(
                            type = 'IDENTITY', 
                            property = 'attribute.email', ), 
                        string_value = 'carlee.cert1c9f9b6fd@mailinator.com', 
                        children = [
                            sailpoint.v2024.models.dimension_criteria_level2.DimensionCriteriaLevel2(
                                string_value = 'carlee.cert1c9f9b6fd@mailinator.com', )
                            ], ), ),
parent_id='2c918086749d78830174a1a40e121518'
)

```
[[Back to top]](#) 

