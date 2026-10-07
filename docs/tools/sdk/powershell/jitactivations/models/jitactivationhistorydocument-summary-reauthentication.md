# JitactivationhistorydocumentSummaryReauthentication

# JitactivationhistorydocumentSummaryReauthentication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Required** | **Boolean** | Whether reauthentication was required for this activation. | [optional] [default to $false]
**Bypassed** | **Boolean** | Whether the reauthentication requirement was bypassed. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$JitactivationhistorydocumentSummaryReauthentication = Initialize-JitactivationhistorydocumentSummaryReauthentication  -Required true `
 -Bypassed false
```

- Convert the resource to JSON
```powershell
$JitactivationhistorydocumentSummaryReauthentication | ConvertTo-JSON
```


[[Back to top]](#) 

