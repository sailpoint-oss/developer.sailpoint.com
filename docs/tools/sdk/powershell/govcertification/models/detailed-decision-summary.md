# DetailedDecisionSummary

# DetailedDecisionSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementDecisions** | [**DecisionStatistics**](decision-statistics) |  | [optional] 
**AccessProfileDecisions** | [**DecisionStatistics**](decision-statistics) |  | [optional] 
**RoleDecisions** | [**DecisionStatistics**](decision-statistics) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$DetailedDecisionSummary = Initialize-DetailedDecisionSummary  -EntitlementDecisions null `
 -AccessProfileDecisions null `
 -RoleDecisions null
```

- Convert the resource to JSON
```powershell
$DetailedDecisionSummary | ConvertTo-JSON
```


[[Back to top]](#) 

