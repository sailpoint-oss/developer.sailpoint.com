---
id: provisioning-criteria-level2
title: ProvisioningCriteriaLevel2
pagination_label: ProvisioningCriteriaLevel2
sidebar_label: ProvisioningCriteriaLevel2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ProvisioningCriteriaLevel2', 'ProvisioningCriteriaLevel2'] 
slug: /tools/sdk/python/v3/models/provisioning-criteria-level2
tags: ['SDK', 'Software Development Kit', 'ProvisioningCriteriaLevel2', 'ProvisioningCriteriaLevel2']
---

# ProvisioningCriteriaLevel2

Defines matching criteria for an account to be provisioned with a specific access profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**ProvisioningCriteriaOperation**](provisioning-criteria-operation) |  | [optional] 
**attribute** | **str** | Name of the account attribute to be tested. If **operation** is one of `EQUALS`, `NOT_EQUALS`, `CONTAINS`, or `HAS`, this field is required. Otherwise, specifying it results in an error. | [optional] 
**value** | **str** | String value to test the account attribute w/r/t the specified operation. If the operation is one of `EQUALS`, `NOT_EQUALS`, or `CONTAINS`, this field is required. Otherwise, specifying it results in an error. If the attribute is not string-typed, the API will convert it to the appropriate type. | [optional] 
**children** | [**[]ProvisioningCriteriaLevel3**](provisioning-criteria-level3) | Array of child criteria. This field is required if the operation is `AND` or `OR`. Otherwise, it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. | [optional] 
}

## Example

```python
from sailpoint.v3.models.provisioning_criteria_level2 import ProvisioningCriteriaLevel2

provisioning_criteria_level2 = ProvisioningCriteriaLevel2(
operation='EQUALS',
attribute='email',
value='carlee.cert1c9f9b6fd@mailinator.com',
children=[
                    sailpoint.v3.models.provisioning_criteria_level3.ProvisioningCriteriaLevel3(
                        operation = 'EQUALS', 
                        attribute = 'email', 
                        value = 'carlee.cert1c9f9b6fd@mailinator.com', )
                    ]
)

```
[[Back to top]](#) 

