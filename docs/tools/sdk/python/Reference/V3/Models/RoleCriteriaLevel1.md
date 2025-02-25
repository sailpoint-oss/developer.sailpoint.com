---
id: role-criteria-level1
title: RoleCriteriaLevel1
pagination_label: RoleCriteriaLevel1
sidebar_label: RoleCriteriaLevel1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleCriteriaLevel1', 'RoleCriteriaLevel1'] 
slug: /tools/sdk/python/v3/models/role-criteria-level1
tags: ['SDK', 'Software Development Kit', 'RoleCriteriaLevel1', 'RoleCriteriaLevel1']
---

# RoleCriteriaLevel1

Defines STANDARD type Role membership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**RoleCriteriaOperation**](role-criteria-operation) |  | [optional] 
**key** | [**RoleCriteriaKey**](role-criteria-key) |  | [optional] 
**string_value** | **str** | String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error. | [optional] 
**children** | [**[]RoleCriteriaLevel2**](role-criteria-level2) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [optional] 
}

## Example

```python
from sailpoint.v3.models.role_criteria_level1 import RoleCriteriaLevel1

role_criteria_level1 = RoleCriteriaLevel1(
operation='EQUALS',
key=sailpoint.v3.models.role_criteria_key.RoleCriteriaKey(
                    type = 'ACCOUNT', 
                    property = 'attribute.email', 
                    source_id = '2c9180867427f3a301745aec18211519', ),
string_value='carlee.cert1c9f9b6fd@mailinator.com',
children=[
                    sailpoint.v3.models.role_criteria_level2.RoleCriteriaLevel2(
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

