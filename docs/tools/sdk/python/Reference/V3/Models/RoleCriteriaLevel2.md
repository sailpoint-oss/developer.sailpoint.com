---
id: role-criteria-level2
title: RoleCriteriaLevel2
pagination_label: RoleCriteriaLevel2
sidebar_label: RoleCriteriaLevel2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleCriteriaLevel2', 'RoleCriteriaLevel2'] 
slug: /tools/sdk/python/v3/models/role-criteria-level2
tags: ['SDK', 'Software Development Kit', 'RoleCriteriaLevel2', 'RoleCriteriaLevel2']
---

# RoleCriteriaLevel2

Defines STANDARD type Role membership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**RoleCriteriaOperation**](role-criteria-operation) |  | [optional] 
**key** | [**RoleCriteriaKey**](role-criteria-key) |  | [optional] 
**string_value** | **str** | String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error. | [optional] 
**children** | [**[]RoleCriteriaLevel3**](role-criteria-level3) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [optional] 
}

## Example

```python
from sailpoint.v3.models.role_criteria_level2 import RoleCriteriaLevel2

role_criteria_level2 = RoleCriteriaLevel2(
operation='EQUALS',
key=sailpoint.v3.models.role_criteria_key.RoleCriteriaKey(
                    type = 'ACCOUNT', 
                    property = 'attribute.email', 
                    source_id = '2c9180867427f3a301745aec18211519', ),
string_value='carlee.cert1c9f9b6fd@mailinator.com',
children=[
                    sailpoint.v3.models.role_criteria_level3.RoleCriteriaLevel3(
                        operation = 'EQUALS', 
                        key = sailpoint.v3.models.role_criteria_key.RoleCriteriaKey(
                            type = 'ACCOUNT', 
                            property = 'attribute.email', 
                            source_id = '2c9180867427f3a301745aec18211519', ), 
                        string_value = 'carlee.cert1c9f9b6fd@mailinator.com', )
                    ]
)

```
[[Back to top]](#) 

