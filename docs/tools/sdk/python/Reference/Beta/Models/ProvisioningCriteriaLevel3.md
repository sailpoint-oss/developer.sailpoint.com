---
id: beta-provisioning-criteria-level3
title: ProvisioningCriteriaLevel3
pagination_label: ProvisioningCriteriaLevel3
sidebar_label: ProvisioningCriteriaLevel3
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ProvisioningCriteriaLevel3', 'BetaProvisioningCriteriaLevel3'] 
slug: /tools/sdk/python/beta/models/provisioning-criteria-level3
tags: ['SDK', 'Software Development Kit', 'ProvisioningCriteriaLevel3', 'BetaProvisioningCriteriaLevel3']
---

# ProvisioningCriteriaLevel3

Defines matching criteria for an account to be provisioned with a specific access profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**ProvisioningCriteriaOperation**](provisioning-criteria-operation) |  | [optional] 
**attribute** | **str** | Name of the account attribute to be tested. If **operation** is one of `EQUALS`, `NOT_EQUALS`, `CONTAINS`, or `HAS`, this field is required. Otherwise, specifying it results in an error. | [optional] 
**value** | **str** | String value to test the account attribute w/r/t the specified operation. If the operation is one of `EQUALS`, `NOT_EQUALS`, or `CONTAINS`, this field is required. Otherwise, specifying it results in an error. If the attribute is not string-typed, the API will convert it to the appropriate type. | [optional] 
**children** | **str** | Array of child criteria. This field is required if the operation is `AND` or `OR`. Otherwise, it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. | [optional] 
}

## Example

```python
from sailpoint.beta.models.provisioning_criteria_level3 import ProvisioningCriteriaLevel3

provisioning_criteria_level3 = ProvisioningCriteriaLevel3(
operation='EQUALS',
attribute='email',
value='carlee.cert1c9f9b6fd@mailinator.com',
children=''
)

```
[[Back to top]](#) 

