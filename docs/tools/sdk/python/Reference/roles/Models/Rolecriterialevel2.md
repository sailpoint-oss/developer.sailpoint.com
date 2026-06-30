---
id: rolecriterialevel2
title: Rolecriterialevel2
pagination_label: Rolecriterialevel2
sidebar_label: Rolecriterialevel2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Rolecriterialevel2', 'Rolecriterialevel2'] 
slug: /tools/sdk/python/roles/models/rolecriterialevel2
tags: ['SDK', 'Software Development Kit', 'Rolecriterialevel2', 'Rolecriterialevel2']
---

# Rolecriterialevel2

Defines STANDARD type Role membership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**Rolecriteriaoperation**](rolecriteriaoperation) |  | [optional] 
**key** | [**Rolecriteriakey**](rolecriteriakey) |  | [optional] 
**string_value** | **str** | String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, DOES_NOT_CONTAIN, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error. | [optional] 
**children** | [**[]Rolecriterialevel3**](rolecriterialevel3) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [optional] 
}

## Example

```python
from sailpoint.roles.models.rolecriterialevel2 import Rolecriterialevel2

rolecriterialevel2 = Rolecriterialevel2(
operation='EQUALS',
key=sailpoint.roles.models.rolecriteriakey.rolecriteriakey(
                    type = 'ACCOUNT', 
                    property = 'attribute.email', 
                    source_id = '2c9180867427f3a301745aec18211519', ),
string_value='carlee.cert1c9f9b6fd@mailinator.com',
children=[
                    sailpoint.roles.models.rolecriterialevel3.rolecriterialevel3(
                        operation = 'EQUALS', 
                        key = sailpoint.roles.models.rolecriteriakey.rolecriteriakey(
                            type = 'ACCOUNT', 
                            property = 'attribute.email', 
                            source_id = '2c9180867427f3a301745aec18211519', ), 
                        string_value = 'carlee.cert1c9f9b6fd@mailinator.com', )
                    ]
)

```
[[Back to top]](#) 

