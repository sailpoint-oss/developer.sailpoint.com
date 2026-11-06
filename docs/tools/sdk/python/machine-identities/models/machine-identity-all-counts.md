# MachineIdentityAllCounts

# MachineIdentityAllCounts

Number of machine identities and machine accounts owned by an identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_identity_count** | **int** | Number of application machine identities where the identity is a primary or secondary owner. | [optional] 
**ai_agent_count** | **int** | Number of AI agent machine identities where the identity is a primary or secondary owner. | [optional] 
**machine_accounts_count** | **int** | Number of machine accounts owned by the identity. | [optional] 
**total_count** | **int** | Sum of the application, AI agent, and machine account counts. | [optional] 
\}

## Example

```python
from sailpoint.machine_identities.models.machine_identity_all_counts import MachineIdentityAllCounts

machine_identity_all_counts = MachineIdentityAllCounts(
application_identity_count=4,
ai_agent_count=7,
machine_accounts_count=15,
total_count=26
)

```
[[Back to top]](#) 

