---
id: v2025-machine-classification-criteria-level1
title: MachineClassificationCriteriaLevel1
pagination_label: MachineClassificationCriteriaLevel1
sidebar_label: MachineClassificationCriteriaLevel1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MachineClassificationCriteriaLevel1', 'V2025MachineClassificationCriteriaLevel1'] 
slug: /tools/sdk/python/v2025/models/machine-classification-criteria-level1
tags: ['SDK', 'Software Development Kit', 'MachineClassificationCriteriaLevel1', 'V2025MachineClassificationCriteriaLevel1']
---

# MachineClassificationCriteriaLevel1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**MachineClassificationCriteriaOperation**](machine-classification-criteria-operation) |  | [optional] 
**case_sensitive** | **bool** | Indicates whether case matters when evaluating the criteria | [optional] [default to False]
**data_type** | **str** | The data type of the attribute being evaluated | [optional] 
**attribute** | **str** | The attribute to evaluate in the classification criteria | [optional] 
**value** | **str** | The value to compare against the attribute in the classification criteria | [optional] 
**children** | [**[]MachineClassificationCriteriaLevel2**](machine-classification-criteria-level2) | An array of child classification criteria objects | [optional] 
}

## Example

```python
from sailpoint.v2025.models.machine_classification_criteria_level1 import MachineClassificationCriteriaLevel1

machine_classification_criteria_level1 = MachineClassificationCriteriaLevel1(
operation='EQUALS',
case_sensitive=False,
data_type='',
attribute='distinguishedName',
value='OU=Service Accounts',
children=[
                    sailpoint.v2025.models.machine_classification_criteria_level2.MachineClassificationCriteriaLevel2(
                        operation = 'EQUALS', 
                        case_sensitive = False, 
                        data_type = '', 
                        attribute = 'employeeType', 
                        value = 'SERVICE', )
                    ]
)

```
[[Back to top]](#) 

