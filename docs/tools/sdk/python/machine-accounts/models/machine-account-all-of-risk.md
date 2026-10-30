# MachineAccountAllOfRisk

# MachineAccountAllOfRisk

Entro risk for this machine account. Present when Entro enrichment is enabled for the tenant. Null when no risk has been recorded. `score` stays null until a risk-engine projection exists. Read-only; written only by aggregation. This is separate from machine-identity SAF risk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score** | **float** | Risk score. Null for Entro-only severity. | [optional] 
**severity** |  **Enum** [  'UNKNOWN',    'LOW',    'MEDIUM',    'HIGH',    'CRITICAL' ] | Risk severity. A null stored severity can render as UNKNOWN when that behavior is enabled. | [optional] 
\}

## Example

```python
from sailpoint.machine_accounts.models.machine_account_all_of_risk import MachineAccountAllOfRisk

machine_account_all_of_risk = MachineAccountAllOfRisk(
score=72.5,
severity='HIGH'
)

```
[[Back to top]](#) 

