# Policyviolationresponse

# Policyviolationresponse

A separation-of-duties policy violation for an identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The system-generated unique identifier of the policy violation. | [required][readonly] 
**name** | **str** | The display name of the policy violation. | [optional] [readonly] 
**created** | **datetime** | The date and time when the policy violation was created. | [required][readonly] 
**modified** | **datetime** | The date and time when the policy violation was last modified. | [required][readonly] 
**last_evaluated_date** | **datetime** | The date and time when the policy violation was last evaluated by the policy engine. | [optional] [readonly] 
**owner** | [**Referenceresponse**](referenceresponse) |  | [required]
**conflicting_criteria** | [**[]AccessCriteria**](access-criteria) | List of conflicting criteria. Each conflicting item supports optional description and optional sourceRef (id, name, type, description); for ENTITLEMENT items, sourceRef may be populated from the entitlement's source on GET via hydration.  | [required][readonly] 
**applied_controls** | [**[]Appliedcontrol**](appliedcontrol) | List of compensating controls that have been applied to this policy violation. | [required][readonly] 
**expiration** | **datetime** | Expiration on the active applied compensating control row (latest applied_date, tie-break id). Always returned; null when there is no active control or that row has no expiration. | [required][readonly] 
**target** | [**Referenceresponse**](referenceresponse) |  | [required]
**policy** | [**Referenceresponse**](referenceresponse) |  | [required]
**status** | **Policyviolationstatus** |  | [required]
**level** | **Policyviolationrisklevel** |  | [required]
\}

## Example

```python
from sailpoint.sod_violations.models.policyviolationresponse import Policyviolationresponse

policyviolationresponse = Policyviolationresponse(
id='3e078865-55ed-43cf-b83c-85c58d2016e6',
name='Policy Violation 123',
created='2025-01-01T00:00-05:00',
modified='2025-01-01T02:00-05:00',
last_evaluated_date='2025-01-01T01:00-05:00',
owner=sailpoint.sod_violations.models.referenceresponse.Referenceresponse(
                    id = '3e07886555ed43cfb83c85c58d2016e6', 
                    name = 'John Doe', 
                    type = 'IDENTITY', ),
conflicting_criteria=[{"name":"money-in","conflictingItems":[{"id":"2c9180866166b5b0016167c32ef31a66","name":"Administrator","type":"ENTITLEMENT"}]}],
applied_controls=[{"id":"3e07886555ed43cfb83c85c58d2016e6","violation":"99fbef9738c146e9b526b6147f57a0e2","status":"Active"}],
expiration='2026-01-01T02:00-05:00',
target=sailpoint.sod_violations.models.referenceresponse.Referenceresponse(
                    id = '3e07886555ed43cfb83c85c58d2016e6', 
                    name = 'John Doe', 
                    type = 'IDENTITY', ),
policy=sailpoint.sod_violations.models.referenceresponse.Referenceresponse(
                    id = '3e07886555ed43cfb83c85c58d2016e6', 
                    name = 'John Doe', 
                    type = 'IDENTITY', ),
status='Open',
level='High'
)

```
[[Back to top]](#) 

