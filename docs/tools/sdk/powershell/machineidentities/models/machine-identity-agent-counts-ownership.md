# MachineIdentityAgentCountsOwnership

# MachineIdentityAgentCountsOwnership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OwnedAgents** | **Int64** | Number of AI agents that have at least one owner. | [optional] 
**OwnedPercent** | **Int32** | Percentage of AI agents that have at least one owner. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineIdentityAgentCountsOwnership = Initialize-MachineIdentityAgentCountsOwnership  -OwnedAgents 70 `
 -OwnedPercent 82
```

- Convert the resource to JSON
```powershell
$MachineIdentityAgentCountsOwnership | ConvertTo-JSON
```


[[Back to top]](#) 

