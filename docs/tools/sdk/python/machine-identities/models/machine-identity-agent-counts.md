# MachineIdentityAgentCounts

# MachineIdentityAgentCounts

Tenant-wide summary counts for AI agent machine identities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_count** | **int** | Total number of AI agents. | [optional] 
**unsanctioned_agent_count** | **int** | Number of AI agents that are not sanctioned. | [optional] 
**discovered** | [**MachineIdentityDiscoveredCounts**](machine-identity-discovered-counts) |  | [optional] 
**risk_severity** | [**MachineIdentityRiskSeverityCounts**](machine-identity-risk-severity-counts) |  | [optional] 
**ownership** | [**MachineIdentityAgentCountsOwnership**](machine-identity-agent-counts-ownership) |  | [optional] 
\}

## Example

```python
from sailpoint.machine_identities.models.machine_identity_agent_counts import MachineIdentityAgentCounts

machine_identity_agent_counts = MachineIdentityAgentCounts(
agent_count=85,
unsanctioned_agent_count=6,
discovered=sailpoint.machine_identities.models.machine_identity_discovered_counts.Machine Identity Discovered Counts(
                    count = 8, 
                    window_days = 30, ),
risk_severity=sailpoint.machine_identities.models.machine_identity_risk_severity_counts.Machine Identity Risk Severity Counts(
                    critical = 3, 
                    high = 12, 
                    medium = 25, 
                    low = 40, 
                    unknown = 5, ),
ownership=sailpoint.machine_identities.models.machine_identity_agent_counts_ownership.MachineIdentityAgentCounts_ownership(
                    owned_agents = 70, 
                    owned_percent = 82, )
)

```
[[Back to top]](#) 

