---
id: machineclassificationcriterialevel1
title: Machineclassificationcriterialevel1
pagination_label: Machineclassificationcriterialevel1
sidebar_label: Machineclassificationcriterialevel1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Machineclassificationcriterialevel1', 'Machineclassificationcriterialevel1'] 
slug: /tools/sdk/python/machine-classification-config/models/machineclassificationcriterialevel1
tags: ['SDK', 'Software Development Kit', 'Machineclassificationcriterialevel1', 'Machineclassificationcriterialevel1']
---

# Machineclassificationcriterialevel1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**Machineclassificationcriteriaoperation**](machineclassificationcriteriaoperation) |  | [optional] 
**case_sensitive** | **bool** | Indicates whether case matters when evaluating the criteria | [optional] [default to False]
**data_type** | **str** | The data type of the attribute being evaluated | [optional] 
**attribute** | **str** | The attribute to evaluate in the classification criteria | [optional] 
**value** | **str** | The value to compare against the attribute in the classification criteria | [optional] 
**children** | [**[]Machineclassificationcriterialevel2**](machineclassificationcriterialevel2) | An array of child classification criteria objects | [optional] 
}

## Example

```python
from sailpoint.machine_classification_config.models.machineclassificationcriterialevel1 import Machineclassificationcriterialevel1

machineclassificationcriterialevel1 = Machineclassificationcriterialevel1(
operation='EQUALS',
case_sensitive=False,
data_type='',
attribute='distinguishedName',
value='OU=Service Accounts',
children=[
                    sailpoint.machine_classification_config.models.machineclassificationcriterialevel2.machineclassificationcriterialevel2(
                        operation = 'EQUALS', 
                        case_sensitive = False, 
                        data_type = '', 
                        attribute = 'employeeType', 
                        value = 'SERVICE', 
                        children = [
                            sailpoint.machine_classification_config.models.machineclassificationcriterialevel3.machineclassificationcriterialevel3(
                                case_sensitive = False, 
                                data_type = '', 
                                attribute = 'sAMAccountName', 
                                value = 'SVC', )
                            ], )
                    ]
)

```
[[Back to top]](#) 

