---
id: role-criteria-level3
title: RoleCriteriaLevel3
pagination_label: RoleCriteriaLevel3
sidebar_label: RoleCriteriaLevel3
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleCriteriaLevel3', 'RoleCriteriaLevel3'] 
slug: /tools/sdk/python/v3/models/role-criteria-level3
tags: ['SDK', 'Software Development Kit', 'RoleCriteriaLevel3', 'RoleCriteriaLevel3']
---

# RoleCriteriaLevel3

Defines STANDARD type Role membership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**RoleCriteriaOperation**](role-criteria-operation) |  | [optional] 
**key** | [**RoleCriteriaKey**](role-criteria-key) |  | [optional] 
**string_value** | **str** | String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error. | [optional] 
}

## Example

```python
from sailpoint.v3.models.role_criteria_level3 import RoleCriteriaLevel3

role_criteria_level3 = RoleCriteriaLevel3(
operation='EQUALS',
key=sailpoint.v3.models.role_criteria_key.RoleCriteriaKey(
                    type = 'ACCOUNT', 
                    property = 'attribute.email', 
                    source_id = '2c9180867427f3a301745aec18211519', ),
string_value='carlee.cert1c9f9b6fd@mailinator.com'
)

```
[[Back to top]](#) 

