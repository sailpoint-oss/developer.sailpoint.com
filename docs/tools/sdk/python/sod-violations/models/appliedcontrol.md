# Appliedcontrol

# Appliedcontrol

A compensating control that has been applied to a policy violation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The system-generated unique identifier of the applied control record. | [required]
**violation** | **str** | The unique identifier of the policy violation the control was applied to. | [required]
**control** | [**Referenceresponse**](referenceresponse) |  | [required]
**applier** | [**Referenceresponse**](referenceresponse) |  | [required]
**applied_date** | **datetime** | The date and time when the control was applied to the violation. | [required][readonly] 
**expiration** | **datetime** | The date and time when the applied control expires. | [required][readonly] 
**comments** | **str** | Optional comments captured when the control was applied. | [optional] 
**status** | **Appliedcontrolstatus** |  | [optional] 
**workflow_id** | **str** | The identifier of the workflow triggered when the control was applied. | [optional] 
\}

## Example

```python
from sailpoint.sod_violations.models.appliedcontrol import Appliedcontrol

appliedcontrol = Appliedcontrol(
id='',
violation='',
control=sailpoint.sod_violations.models.referenceresponse.Referenceresponse(
                    id = '3e07886555ed43cfb83c85c58d2016e6', 
                    name = 'John Doe', 
                    type = 'IDENTITY', ),
applier=sailpoint.sod_violations.models.referenceresponse.Referenceresponse(
                    id = '3e07886555ed43cfb83c85c58d2016e6', 
                    name = 'John Doe', 
                    type = 'IDENTITY', ),
applied_date='2025-01-01T00:00-05:00',
expiration='2025-01-01T02:00-05:00',
comments='Some comments about the applied control',
status='Pending',
workflow_id='82044924-daff-4b0b-9dcb-17e64de4d25b'
)

```
[[Back to top]](#) 

