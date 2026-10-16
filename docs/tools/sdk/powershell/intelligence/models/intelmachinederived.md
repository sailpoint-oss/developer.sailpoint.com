# Intelmachinederived

# Intelmachinederived

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsOrphaned** | **Boolean** | Flags NHIs without a valid active owner for prioritization. | [required]
**AuthorizedHumanIdentities** | [**[]Intelmachineentityref**](intelmachineentityref) | Humans who can invoke or access this NHI agent. | [required]
**BlastRadiusSummary** | [**Intelblastradiussummary**](intelblastradiussummary) |  | [required]

## Examples

- Prepare the resource
```powershell
$Intelmachinederived = Initialize-Intelmachinederived  -IsOrphaned false `
 -AuthorizedHumanIdentities [{"type":"IDENTITY","id":"ef38f94347e94562b5bb8424a56397d8","name":"Example User","email":"user@example.com"}] `
 -BlastRadiusSummary null
```

- Convert the resource to JSON
```powershell
$Intelmachinederived | ConvertTo-JSON
```


[[Back to top]](#) 

