# JitactivationhistorydocumentSummaryJustification

# JitactivationhistorydocumentSummaryJustification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Required** | **Boolean** | Whether a justification was required for this activation. | [optional] [default to $false]
**Bypassed** | **Boolean** | Whether the justification requirement was bypassed. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$JitactivationhistorydocumentSummaryJustification = Initialize-JitactivationhistorydocumentSummaryJustification  -Required true `
 -Bypassed false
```

- Convert the resource to JSON
```powershell
$JitactivationhistorydocumentSummaryJustification | ConvertTo-JSON
```


[[Back to top]](#) 

