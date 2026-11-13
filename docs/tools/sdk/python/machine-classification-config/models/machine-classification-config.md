# MachineClassificationConfig

# MachineClassificationConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Indicates whether Classification is enabled for a Source | [optional] [default to False]
**classification_method** |  **Enum** [  'SOURCE',    'CRITERIA' ] | Classification Method | [optional] 
**criteria** | [**MachineClassificationCriteriaLevel1**](machine-classification-criteria-level1) |  | [optional] 
**created** | **datetime** | Date the config was created | [optional] 
**modified** | **datetime** | Date the config was last updated | [optional] 
\}

## Example

```python
from sailpoint.machine_classification_config.models.machine_classification_config import MachineClassificationConfig

machine_classification_config = MachineClassificationConfig(
enabled=True,
classification_method='SOURCE',
criteria=sailpoint.machine_classification_config.models.machine_classification_criteria_level1.MachineClassificationCriteriaLevel1(
                    operation = 'EQUALS', 
                    case_sensitive = False, 
                    data_type = '', 
                    attribute = 'distinguishedName', 
                    value = 'OU=Service Accounts', 
                    children = [
                        sailpoint.machine_classification_config.models.machine_classification_criteria_level2.MachineClassificationCriteriaLevel2(
                            case_sensitive = False, 
                            data_type = '', 
                            attribute = 'employeeType', 
                            value = 'SERVICE', )
                        ], ),
created='2017-07-11T18:45:37.098Z',
modified='2018-06-25T20:22:28.104Z'
)

```
[[Back to top]](#) 

