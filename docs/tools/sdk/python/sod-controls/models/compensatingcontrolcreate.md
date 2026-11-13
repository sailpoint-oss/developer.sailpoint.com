# Compensatingcontrolcreate

# Compensatingcontrolcreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The display name of the compensating control. | [required]
**description** | **str** | A human-readable description of the compensating control. | [optional] 
**owner** | [**Referenceinput**](referenceinput) |  | [required]
**secondary_owners** | [**[]Referenceinput**](referenceinput) | References to additional identities or governance groups that share ownership of the compensating control (maximum 10). | [optional] 
**type** |  **Enum** [  'Mitigation',    'Remediation' ] | The type of compensating control that determines how a violation is addressed. | [required]
**action** |  **Enum** [  'Workflow',    'Certification' ] | The action performed when the compensating control is applied. | [optional] 
**expiration** | **str** | The duration after which the applied control expires, expressed as a duration string. | [optional] 
**justification_required** | **bool** | Indicates whether a justification is required when applying this control. | [optional] [default to False]
**workflow_id** | **str** | Workflow definition ID used when the control action is a workflow. | [optional] 
\}

## Example

```python
from sailpoint.sod_controls.models.compensatingcontrolcreate import Compensatingcontrolcreate

compensatingcontrolcreate = Compensatingcontrolcreate(
name='a name',
description='a description',
owner=sailpoint.sod_controls.models.referenceinput.Referenceinput(
                    id = '3e07886555ed43cfb83c85c58d2016e6', 
                    type = 'IDENTITY', ),
secondary_owners=[{"id":"943a7c57da334d07ba2454bf7fcf144f","type":"GOVERNANCE_GROUP"}],
type='Mitigation',
action='Workflow',
expiration='20d',
justification_required=True,
workflow_id='3e07886555ed43cfb83c85c58d2016e6'
)

```
[[Back to top]](#) 

