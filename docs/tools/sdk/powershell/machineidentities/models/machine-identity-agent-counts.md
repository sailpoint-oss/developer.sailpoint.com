# MachineIdentityAgentCounts

# MachineIdentityAgentCounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AgentCount** | **Int64** | Total number of AI agents. | [optional] 
**UnsanctionedAgentCount** | **Int64** | Number of AI agents that are not sanctioned. | [optional] 
**Discovered** | [**MachineIdentityDiscoveredCounts**](machine-identity-discovered-counts) |  | [optional] 
**RiskSeverity** | [**MachineIdentityRiskSeverityCounts**](machine-identity-risk-severity-counts) |  | [optional] 
**Ownership** | [**MachineIdentityAgentCountsOwnership**](machine-identity-agent-counts-ownership) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineIdentityAgentCounts = Initialize-MachineIdentityAgentCounts  -AgentCount 85 `
 -UnsanctionedAgentCount 6 `
 -Discovered null `
 -RiskSeverity null `
 -Ownership null
```

- Convert the resource to JSON
```powershell
$MachineIdentityAgentCounts | ConvertTo-JSON
```


[[Back to top]](#) 

