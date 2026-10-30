# MachineAccountsSummary

# MachineAccountsSummary

Counts of machine account candidates that are not yet linked to a machine identity, grouped by classification method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**human** | [**[]MachineAccountClassificationCount**](machine-account-classification-count) | Counts of candidates that are correlated to a human identity, with one entry each for the `CRITERIA`, `SOURCE` and `DISCOVERY` classification methods. | [optional] 
**uncorrelated** | [**[]MachineAccountClassificationCount**](machine-account-classification-count) | Counts of candidates that are not correlated to any identity. This list has one entry, for the `DISCOVERY` classification method. | [optional] 
\}

## Example

```python
from sailpoint.machine_accounts.models.machine_accounts_summary import MachineAccountsSummary

machine_accounts_summary = MachineAccountsSummary(
human=[{"classificationMethod":"CRITERIA","count":42},{"classificationMethod":"SOURCE","count":17},{"classificationMethod":"DISCOVERY","count":8}],
uncorrelated=[{"classificationMethod":"DISCOVERY","count":5}]
)

```
[[Back to top]](#) 

