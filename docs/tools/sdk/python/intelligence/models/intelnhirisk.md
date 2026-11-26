# Intelnhirisk

# Intelnhirisk

Overall risk level for this non-human identity. Null when the identity is not scored (for example, risk is not licensed, scoring is not yet available, or the identity was removed). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**severity** |  **Enum** [  'LOW',    'MEDIUM',    'HIGH',    'CRITICAL' ] | Risk band for the identity. | [optional] 
**last_modified** | **datetime** | When the risk level last changed. Omitted when not available. | [optional] 
\}

## Example

```python
from sailpoint.intelligence.models.intelnhirisk import Intelnhirisk

intelnhirisk = Intelnhirisk(
severity='HIGH',
last_modified='2026-10-10T16:48:51.866993644Z'
)

```
[[Back to top]](#) 

