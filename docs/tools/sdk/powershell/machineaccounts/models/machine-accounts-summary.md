# MachineAccountsSummary

# MachineAccountsSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Human** | [**[]MachineAccountClassificationCount**](machine-account-classification-count) | Counts of candidates that are correlated to a human identity, with one entry each for the `CRITERIA`, `SOURCE` and `DISCOVERY` classification methods. | [optional] 
**Uncorrelated** | [**[]MachineAccountClassificationCount**](machine-account-classification-count) | Counts of candidates that are not correlated to any identity. This list has one entry, for the `DISCOVERY` classification method. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountsSummary = Initialize-MachineAccountsSummary  -Human [{"classificationMethod":"CRITERIA","count":42},{"classificationMethod":"SOURCE","count":17},{"classificationMethod":"DISCOVERY","count":8}] `
 -Uncorrelated [{"classificationMethod":"DISCOVERY","count":5}]
```

- Convert the resource to JSON
```powershell
$MachineAccountsSummary | ConvertTo-JSON
```


[[Back to top]](#) 

