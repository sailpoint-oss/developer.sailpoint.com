# ApprovalConfigEscalationConfig

# ApprovalConfigEscalationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** | Indicates if escalations are enabled. | [optional] [default to $false]
**DaysUntilFirstEscalation** | **Int64** | Number of days until the first escalation. | [optional] 
**EscalationCronSchedule** | **String** | Cron schedule for escalations. | [optional] 
**EscalationChain** | [**[]ApprovalConfigEscalationConfigEscalationChainInner**](approval-config-escalation-config-escalation-chain-inner) | Escalation chain configuration. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalConfigEscalationConfig = Initialize-ApprovalConfigEscalationConfig  -Enabled true `
 -DaysUntilFirstEscalation 2 `
 -EscalationCronSchedule @every 72h `
 -EscalationChain null
```

- Convert the resource to JSON
```powershell
$ApprovalConfigEscalationConfig | ConvertTo-JSON
```


[[Back to top]](#) 

