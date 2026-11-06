# JitactivationhistorydocumentSummaryServiceNowTicket

# JitactivationhistorydocumentSummaryServiceNowTicket

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Required** | **Boolean** | Whether a ServiceNow ticket was required for this activation. | [optional] [default to $false]
**Bypassed** | **Boolean** | Whether the ServiceNow ticket requirement was bypassed. | [optional] [default to $false]
**TicketReference** | **String** | ServiceNow ticket reference submitted by the user. | [optional] 

## Examples

- Prepare the resource
```powershell
$JitactivationhistorydocumentSummaryServiceNowTicket = Initialize-JitactivationhistorydocumentSummaryServiceNowTicket  -Required true `
 -Bypassed false `
 -TicketReference INC0012345
```

- Convert the resource to JSON
```powershell
$JitactivationhistorydocumentSummaryServiceNowTicket | ConvertTo-JSON
```


[[Back to top]](#) 

