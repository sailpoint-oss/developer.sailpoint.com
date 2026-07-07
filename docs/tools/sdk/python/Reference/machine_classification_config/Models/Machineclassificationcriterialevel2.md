---
id: machineclassificationcriterialevel2
title: Machineclassificationcriterialevel2
pagination_label: Machineclassificationcriterialevel2
sidebar_label: Machineclassificationcriterialevel2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Machineclassificationcriterialevel2', 'Machineclassificationcriterialevel2'] 
slug: /tools/sdk/python/machine-classification-config/models/machineclassificationcriterialevel2
tags: ['SDK', 'Software Development Kit', 'Machineclassificationcriterialevel2', 'Machineclassificationcriterialevel2']
---

# Machineclassificationcriterialevel2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**Machineclassificationcriteriaoperation**](machineclassificationcriteriaoperation) |  | [optional] 
**case_sensitive** | **bool** | Indicates whether case matters when evaluating the criteria | [optional] [default to False]
**data_type** | **str** | The data type of the attribute being evaluated | [optional] 
**attribute** | **str** | The attribute to evaluate in the classification criteria | [optional] 
**value** | **str** | The value to compare against the attribute in the classification criteria | [optional] 
**children** | [**[]Machineclassificationcriterialevel3**](machineclassificationcriterialevel3) | An array of child classification criteria objects | [optional] 
}

## Example

```python
from sailpoint.machine_classification_config.models.machineclassificationcriterialevel2 import Machineclassificationcriterialevel2

machineclassificationcriterialevel2 = Machineclassificationcriterialevel2(
operation='EQUALS',
case_sensitive=False,
data_type='',
attribute='employeeType',
value='SERVICE',
children=[
                    sailpoint.machine_classification_config.models.machineclassificationcriterialevel3.machineclassificationcriterialevel3(
                        operation = 'EQUALS', 
                        case_sensitive = False, 
                        data_type = '', 
                        attribute = 'sAMAccountName', 
                        value = 'SVC', 
                        children = [
                            None
                            ], )
                    ]
)

```
[[Back to top]](#) 

