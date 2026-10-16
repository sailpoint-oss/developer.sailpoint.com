# MachineClassificationCriteriaLevel3

# MachineClassificationCriteriaLevel3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **MachineClassificationCriteriaOperation** |  | [optional] 
**case_sensitive** | **bool** | Indicates whether or not case matters when evaluating the criteria | [optional] [default to False]
**data_type** | **str** | The data type of the attribute being evaluated | [optional] 
**attribute** | **str** | The attribute to evaluate in the classification criteria | [optional] 
**value** | **str** | The value to compare against the attribute in the classification criteria | [optional] 
**children** | **[]object** | An array of child classification criteria objects | [optional] 
\}

## Example

```python
from sailpoint.machine_classification_config.models.machine_classification_criteria_level3 import MachineClassificationCriteriaLevel3

machine_classification_criteria_level3 = MachineClassificationCriteriaLevel3(
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

