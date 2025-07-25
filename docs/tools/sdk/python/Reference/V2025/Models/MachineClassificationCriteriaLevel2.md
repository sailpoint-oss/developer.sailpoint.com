---
id: v2025-machine-classification-criteria-level2
title: MachineClassificationCriteriaLevel2
pagination_label: MachineClassificationCriteriaLevel2
sidebar_label: MachineClassificationCriteriaLevel2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MachineClassificationCriteriaLevel2', 'V2025MachineClassificationCriteriaLevel2'] 
slug: /tools/sdk/python/v2025/models/machine-classification-criteria-level2
tags: ['SDK', 'Software Development Kit', 'MachineClassificationCriteriaLevel2', 'V2025MachineClassificationCriteriaLevel2']
---

# MachineClassificationCriteriaLevel2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**MachineClassificationCriteriaOperation**](machine-classification-criteria-operation) |  | [optional] 
**case_sensitive** | **bool** | Indicates whether case matters when evaluating the criteria | [optional] [default to False]
**data_type** | **str** | The data type of the attribute being evaluated | [optional] 
**attribute** | **str** | The attribute to evaluate in the classification criteria | [optional] 
**value** | **str** | The value to compare against the attribute in the classification criteria | [optional] 
**children** | [**[]MachineClassificationCriteriaLevel3**](machine-classification-criteria-level3) | An array of child classification criteria objects | [optional] 
}

## Example

```python
from sailpoint.v2025.models.machine_classification_criteria_level2 import MachineClassificationCriteriaLevel2

machine_classification_criteria_level2 = MachineClassificationCriteriaLevel2(
operation='EQUALS',
case_sensitive=False,
data_type='',
attribute='employeeType',
value='SERVICE',
children=[
                    sailpoint.v2025.models.machine_classification_criteria_level3.MachineClassificationCriteriaLevel3(
                        operation = 'EQUALS', 
                        case_sensitive = False, 
                        data_type = 'This is the first level of classification criteria', 
                        attribute = 'sAMAccountName', 
                        value = 'SVC', )
                    ]
)

```
[[Back to top]](#) 

