---
id: machineclassificationcriterialevel3
title: Machineclassificationcriterialevel3
pagination_label: Machineclassificationcriterialevel3
sidebar_label: Machineclassificationcriterialevel3
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Machineclassificationcriterialevel3', 'Machineclassificationcriterialevel3'] 
slug: /tools/sdk/python/machine-classification-config/models/machineclassificationcriterialevel3
tags: ['SDK', 'Software Development Kit', 'Machineclassificationcriterialevel3', 'Machineclassificationcriterialevel3']
---

# Machineclassificationcriterialevel3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**Machineclassificationcriteriaoperation**](machineclassificationcriteriaoperation) |  | [optional] 
**case_sensitive** | **bool** | Indicates whether or not case matters when evaluating the criteria | [optional] [default to False]
**data_type** | **str** | The data type of the attribute being evaluated | [optional] 
**attribute** | **str** | The attribute to evaluate in the classification criteria | [optional] 
**value** | **str** | The value to compare against the attribute in the classification criteria | [optional] 
**children** | **[]object** | An array of child classification criteria objects | [optional] 
}

## Example

```python
from sailpoint.machine_classification_config.models.machineclassificationcriterialevel3 import Machineclassificationcriterialevel3

machineclassificationcriterialevel3 = Machineclassificationcriterialevel3(
operation='EQUALS',
case_sensitive=False,
data_type='',
attribute='sAMAccountName',
value='SVC',
children=[
                    None
                    ]
)

```
[[Back to top]](#) 

