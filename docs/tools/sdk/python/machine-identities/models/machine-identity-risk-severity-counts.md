# MachineIdentityRiskSeverityCounts

# MachineIdentityRiskSeverityCounts

Number of machine identities in each risk severity. This object is `null` when agentic risk scoring is not enabled for the tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**critical** | **int** | Number of machine identities with a CRITICAL risk severity. | [optional] 
**high** | **int** | Number of machine identities with a HIGH risk severity. | [optional] 
**medium** | **int** | Number of machine identities with a MEDIUM risk severity. | [optional] 
**low** | **int** | Number of machine identities with a LOW risk severity. | [optional] 
**unknown** | **int** | Number of machine identities that have no risk severity. This value is `null` unless unclassified risk severity counting is enabled for the tenant. Version 1 of the API always returns `null`. | [optional] 
\}

## Example

```python
from sailpoint.machine_identities.models.machine_identity_risk_severity_counts import MachineIdentityRiskSeverityCounts

machine_identity_risk_severity_counts = MachineIdentityRiskSeverityCounts(
critical=3,
high=12,
medium=25,
low=40,
unknown=5
)

```
[[Back to top]](#) 

