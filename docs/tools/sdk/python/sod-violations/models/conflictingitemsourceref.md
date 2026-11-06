# Conflictingitemsourceref

# Conflictingitemsourceref

Reference to the source system or object (for example the application backing an entitlement). On GET, when the conflicting item type is ENTITLEMENT, hydration may populate these fields from the entitlement service payload's `source` object. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Source resource identifier when known. | [optional] 
**name** | **str** | Display name of the source. | [optional] 
**type** | **str** | Source type classification (for example application or connector type). | [optional] 
**description** | **str** | Human-readable description of the source. | [optional] 
\}

## Example

```python
from sailpoint.sod_violations.models.conflictingitemsourceref import Conflictingitemsourceref

conflictingitemsourceref = Conflictingitemsourceref(
id='2c9180825a6c1adc015a71c9db2101a1',
name='Active Directory',
type='DIRECT_CONNECT',
description='Corporate Active Directory source.'
)

```
[[Back to top]](#) 

