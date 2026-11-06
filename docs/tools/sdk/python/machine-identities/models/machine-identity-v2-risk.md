# MachineIdentityV2Risk

# MachineIdentityV2Risk

Risk data for the machine identity; null when no risk data has landed yet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score** | **float** | Normalised risk score 0.0-100.0. | [optional] 
**severity** |  **Enum** [  'CRITICAL',    'HIGH',    'MEDIUM',    'LOW' ] | Risk severity bucket. | [optional] 
\}

## Example

```python
from sailpoint.machine_identities.models.machine_identity_v2_risk import MachineIdentityV2Risk

machine_identity_v2_risk = MachineIdentityV2Risk(
score=72.5,
severity='HIGH'
)

```
[[Back to top]](#) 

