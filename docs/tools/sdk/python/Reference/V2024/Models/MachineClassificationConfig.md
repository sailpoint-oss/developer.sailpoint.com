---
id: v2024-machine-classification-config
title: MachineClassificationConfig
pagination_label: MachineClassificationConfig
sidebar_label: MachineClassificationConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MachineClassificationConfig', 'V2024MachineClassificationConfig'] 
slug: /tools/sdk/python/v2024/models/machine-classification-config
tags: ['SDK', 'Software Development Kit', 'MachineClassificationConfig', 'V2024MachineClassificationConfig']
---

# MachineClassificationConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Indicates if the Classification is enabled for a Source | [optional] [default to False]
**classification_method** |  **Enum** [  'SOURCE' ] | Classification Method | [optional] 
**criteria** | **str** | A classification criteria object | [optional] 
**created** | **datetime** | Time when the config was created | [optional] 
**modified** | **datetime** | Time when the config was last updated | [optional] 
}

## Example

```python
from sailpoint.v2024.models.machine_classification_config import MachineClassificationConfig

machine_classification_config = MachineClassificationConfig(
enabled=True,
classification_method='SOURCE',
criteria='',
created='2017-07-11T18:45:37.098Z',
modified='2018-06-25T20:22:28.104Z'
)

```
[[Back to top]](#) 

