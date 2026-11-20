# MachineIdentityApplicationCountsOwnership

# MachineIdentityApplicationCountsOwnership

Ownership coverage of applications.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owned_applications** | **int** | Number of applications that have at least one owner. | [optional] 
**owned_percent** | **int** | Percentage of applications that have at least one owner. | [optional] 
\}

## Example

```python
from sailpoint.machine_identities.models.machine_identity_application_counts_ownership import MachineIdentityApplicationCountsOwnership

machine_identity_application_counts_ownership = MachineIdentityApplicationCountsOwnership(
owned_applications=95,
owned_percent=79
)

```
[[Back to top]](#) 

