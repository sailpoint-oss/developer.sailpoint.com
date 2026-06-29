---
id: rolemembershipselector
title: Rolemembershipselector
pagination_label: Rolemembershipselector
sidebar_label: Rolemembershipselector
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Rolemembershipselector', 'Rolemembershipselector'] 
slug: /tools/sdk/python/roles/models/rolemembershipselector
tags: ['SDK', 'Software Development Kit', 'Rolemembershipselector', 'Rolemembershipselector']
---

# Rolemembershipselector

When present, specifies that the Role is to be granted to Identities which either satisfy specific criteria or which are members of a given list of Identities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**Rolemembershipselectortype**](rolemembershipselectortype) |  | [optional] 
**criteria** | [**Rolecriterialevel1**](rolecriterialevel1) |  | [optional] 
**identities** | [**[]Rolemembershipidentity**](rolemembershipidentity) | Defines role membership as being exclusive to the specified Identities, when type is IDENTITY_LIST. | [optional] 
}

## Example

```python
from sailpoint.roles.models.rolemembershipselector import Rolemembershipselector

rolemembershipselector = Rolemembershipselector(
type='IDENTITY_LIST',
criteria=sailpoint.roles.models.rolecriterialevel1.rolecriterialevel1(
                    operation = 'EQUALS', 
                    key = sailpoint.roles.models.rolecriteriakey.rolecriteriakey(
                        type = 'ACCOUNT', 
                        property = 'attribute.email', 
                        source_id = '2c9180867427f3a301745aec18211519', ), 
                    string_value = 'carlee.cert1c9f9b6fd@mailinator.com', 
                    children = [
                        sailpoint.roles.models.rolecriterialevel2.rolecriterialevel2(
                            string_value = 'carlee.cert1c9f9b6fd@mailinator.com', )
                        ], ),
identities=[
                    sailpoint.roles.models.rolemembershipidentity.rolemembershipidentity(
                        type = 'IDENTITY', 
                        id = '2c9180a46faadee4016fb4e018c20639', 
                        name = 'Thomas Edison', 
                        alias_name = 't.edison', )
                    ]
)

```
[[Back to top]](#) 

