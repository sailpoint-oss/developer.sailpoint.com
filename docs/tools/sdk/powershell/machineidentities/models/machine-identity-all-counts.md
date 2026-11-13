# MachineIdentityAllCounts

# MachineIdentityAllCounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationIdentityCount** | **Int64** | Number of application machine identities where the identity is a primary or secondary owner. | [optional] 
**AiAgentCount** | **Int64** | Number of AI agent machine identities where the identity is a primary or secondary owner. | [optional] 
**MachineAccountsCount** | **Int64** | Number of machine accounts owned by the identity. | [optional] 
**TotalCount** | **Int64** | Sum of the application, AI agent, and machine account counts. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineIdentityAllCounts = Initialize-MachineIdentityAllCounts  -ApplicationIdentityCount 4 `
 -AiAgentCount 7 `
 -MachineAccountsCount 15 `
 -TotalCount 26
```

- Convert the resource to JSON
```powershell
$MachineIdentityAllCounts | ConvertTo-JSON
```


[[Back to top]](#) 

