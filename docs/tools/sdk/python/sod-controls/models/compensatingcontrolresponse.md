# Compensatingcontrolresponse

# Compensatingcontrolresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The system-generated unique identifier of the compensating control. | [optional] [readonly] 
**name** | **str** | The display name of the compensating control. | [optional] [readonly] 
**description** | **str** | A human-readable description of the compensating control. | [optional] [readonly] 
**owner** | [**Reference**](reference) |  | [required]
**secondary_owners** | [**[]Reference**](reference) | References to additional identities or governance groups that share ownership of the compensating control. | [optional] [readonly] 
**type** | **str** | The type of compensating control that determines how a violation is addressed. | [optional] [readonly] 
**action** | **str** | The action performed when the compensating control is applied. | [optional] [readonly] 
**expiration** | **str** | The duration after which the applied control expires, expressed as a duration string. | [optional] [readonly] 
**justification_required** | **bool** | Indicates whether a justification is required when applying this control. | [required][readonly] 
**workflow_id** | **str** | Opaque workflow definition identifier in the exact form required by the owning service.  | [optional] [readonly] 
\}

## Example

```python
from sailpoint.sod_controls.models.compensatingcontrolresponse import Compensatingcontrolresponse

compensatingcontrolresponse = Compensatingcontrolresponse(
id='3e078865-55ed-43cf-b83c-85c58d2016e6',
name='Example Name',
description='a description',
owner=sailpoint.sod_controls.models.reference.Reference(
                    id = '943a7c57da334d07ba2454bf7fcf144f', 
                    type = 'IDENTITY', 
                    name = 'John Doe', ),
secondary_owners=[{"id":"943a7c57da334d07ba2454bf7fcf144f","type":"IDENTITY","name":"John Doe"}],
type='MITIGATION',
action='action',
expiration='720h',
justification_required=True,
workflow_id='3e07886555ed43cfb83c85c58d2016e6'
)

```
[[Back to top]](#) 

