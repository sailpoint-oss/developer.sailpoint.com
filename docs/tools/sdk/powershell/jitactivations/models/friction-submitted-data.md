# FrictionSubmittedData

# FrictionSubmittedData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Justification** | **String** | Justification text. | [optional] 
**Bypass** | **Boolean** | Whether this step was bypassed. | [optional] [default to $false]
**TicketId** | **String** | Ticketing system identifier. | [optional] 
**IsValidTicket** | **Boolean** | Whether the ticket is valid. Set by the server. | [optional] [readonly] [default to $false]
**Attempts** | **Int32** | Count of failed submissions for this step. The server sets this value and ignores it on PATCH. | [optional] [readonly] 
**ReauthSuccessful** | **Boolean** | Whether reauthentication succeeded. | [optional] [default to $false]
**ReauthDate** | **String** | Time of reauthentication. | [optional] 
**IntegrationDisabled** | **Boolean** | Whether the ticketing integration is disabled. Set by the server. | [optional] [readonly] [default to $false]

## Examples

- Prepare the resource
```powershell
$FrictionSubmittedData = Initialize-FrictionSubmittedData  -Justification Current P1 requires activation to mitigate `
 -Bypass false `
 -TicketId SN-123 `
 -IsValidTicket true `
 -Attempts 1 `
 -ReauthSuccessful true `
 -ReauthDate 2026-05-08T18:40:00.000Z `
 -IntegrationDisabled false
```

- Convert the resource to JSON
```powershell
$FrictionSubmittedData | ConvertTo-JSON
```


[[Back to top]](#) 

