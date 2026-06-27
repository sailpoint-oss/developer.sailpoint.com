---
id: dimension
title: Dimension
pagination_label: Dimension
sidebar_label: Dimension
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Dimension', 'Dimension'] 
slug: /tools/sdk/python/dimensions/models/dimension
tags: ['SDK', 'Software Development Kit', 'Dimension', 'Dimension']
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
**owner** | [**Ownerreference**](ownerreference) |  | [required]
**access_profiles** | [**[]Accessprofileref**](accessprofileref) |  | [optional] 
**entitlements** | [**[]Entitlementref**](entitlementref) |  | [optional] 
**membership** | [**Dimensionmembershipselector**](dimensionmembershipselector) |  | [optional] 
**parent_id** | **str** | The ID of the parent role. This field can be left null when creating a dimension, but if provided, it must match the role ID specified in the path variable of the API call. | [optional] 
}

## Example

```python
from sailpoint.dimensions.models.dimension import Dimension

dimension = Dimension(
id='2c918086749d78830174a1a40e121518',
name='Dimension 2567',
created='2021-03-01T22:32:58.104Z',
modified='2021-03-02T20:22:28.104Z',
description='Urna amet cursus pellentesque nisl orci maximus lorem nisl euismod fusce morbi placerat adipiscing maecenas nisi tristique et metus et lacus sed morbi nunc nisl maximus magna arcu varius sollicitudin elementum enim maecenas nisi id ipsum tempus fusce diam ipsum tortor.',
owner=sailpoint.dimensions.models.ownerreference.ownerreference(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'support', ),
access_profiles=[
                    sailpoint.dimensions.models.accessprofileref.accessprofileref(
                        id = 'ff808081751e6e129f1518161919ecca', 
                        type = 'ACCESS_PROFILE', 
                        name = 'Access Profile 2567', )
                    ],
entitlements=[
                    sailpoint.dimensions.models.entitlementref.entitlementref(
                        type = 'ENTITLEMENT', 
                        id = '2c91809773dee32014e13e122092014e', 
                        name = 'CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local', )
                    ],
membership=sailpoint.dimensions.models.dimensionmembershipselector.dimensionmembershipselector(
                    type = 'STANDARD', 
                    criteria = sailpoint.dimensions.models.dimensioncriterialevel1.dimensioncriterialevel1(
                        operation = 'EQUALS', 
                        key = sailpoint.dimensions.models.dimensioncriteriakey.dimensioncriteriakey(
                            type = 'IDENTITY', 
                            property = 'attribute.email', ), 
                        string_value = 'carlee.cert1c9f9b6fd@mailinator.com', 
                        children = [
                            sailpoint.dimensions.models.dimensioncriterialevel2.dimensioncriterialevel2(
                                string_value = 'carlee.cert1c9f9b6fd@mailinator.com', )
                            ], ), ),
parent_id='2c918086749d78830174a1a40e121518'
)

```
[[Back to top]](#) 

