# Conflictingitem

# Conflictingitem

A single access item that contributes to a separation-of-duties conflict.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier of the conflicting access item. | [required]
**name** | **str** | The display name of the conflicting access item. | [optional] 
**type** |  **Enum** [  'ENTITLEMENT',    'ACCESS_PROFILE',    'ROLE' ] | The type of access object represented by the conflicting item. | [required]
**source_ref** | [**Conflictingitemsourceref**](conflictingitemsourceref) |  | [optional] 
**description** | **str** | Optional human-readable description of the conflicting item. | [optional] 
\}

## Example

```python
from sailpoint.sod_violations.models.conflictingitem import Conflictingitem

conflictingitem = Conflictingitem(
id='3e07886555ed43cfb83c85c58d2016e6',
name='Administrator',
type='ENTITLEMENT',
source_ref=sailpoint.sod_violations.models.conflictingitemsourceref.Conflictingitemsourceref(
                    id = '2c9180825a6c1adc015a71c9db2101a1', 
                    name = 'Active Directory', 
                    type = 'DIRECT_CONNECT', 
                    description = 'Corporate Active Directory source.', ),
description='Grants administrative access to the payroll application.'
)

```
[[Back to top]](#) 

