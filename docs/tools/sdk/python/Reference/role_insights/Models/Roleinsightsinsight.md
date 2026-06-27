---
id: roleinsightsinsight
title: Roleinsightsinsight
pagination_label: Roleinsightsinsight
sidebar_label: Roleinsightsinsight
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Roleinsightsinsight', 'Roleinsightsinsight'] 
slug: /tools/sdk/python/role-insights/models/roleinsightsinsight
tags: ['SDK', 'Software Development Kit', 'Roleinsightsinsight', 'Roleinsightsinsight']
---

# Roleinsightsinsight


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The number of identities in this role with the entitlement. | [optional] 
**identities_with_access** | **int** | The number of identities in this role with the entitlement. | [optional] 
**identities_impacted** | **int** | The number of identities in this role that do not have the specified entitlement. | [optional] 
**total_number_of_identities** | **int** | The total number of identities. | [optional] 
**impacted_identity_names** | **str** |  | [optional] 
}

## Example

```python
from sailpoint.role_insights.models.roleinsightsinsight import Roleinsightsinsight

roleinsightsinsight = Roleinsightsinsight(
type='ADD',
identities_with_access=850,
identities_impacted=150,
total_number_of_identities=1000,
impacted_identity_names=''
)

```
[[Back to top]](#) 

