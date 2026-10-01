# JitactivationhistorydocumentSummary

# JitactivationhistorydocumentSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PolicyMatches** | [**[]JitactivationhistorydocumentSummaryPolicyMatchesInner**](jitactivationhistorydocument-summary-policy-matches-inner) | List of policies that matched during activation evaluation. | [optional] 
**Reauthentication** | [**JitactivationhistorydocumentSummaryReauthentication**](jitactivationhistorydocument-summary-reauthentication) |  | [optional] 
**Justification** | [**JitactivationhistorydocumentSummaryJustification**](jitactivationhistorydocument-summary-justification) |  | [optional] 
**ServiceNowTicket** | [**JitactivationhistorydocumentSummaryServiceNowTicket**](jitactivationhistorydocument-summary-service-now-ticket) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$JitactivationhistorydocumentSummary = Initialize-JitactivationhistorydocumentSummary  -PolicyMatches null `
 -Reauthentication null `
 -Justification null `
 -ServiceNowTicket null
```

- Convert the resource to JSON
```powershell
$JitactivationhistorydocumentSummary | ConvertTo-JSON
```


[[Back to top]](#) 

