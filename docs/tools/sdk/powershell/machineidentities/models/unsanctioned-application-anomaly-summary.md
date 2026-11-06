# UnsanctionedApplicationAnomalySummary

# UnsanctionedApplicationAnomalySummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AnomalyType** | **String** | The anomaly type these counts describe. Always unsanctioned_app for this endpoint. | [optional] 
**AgentCount** | **Int64** | Number of distinct agents with at least one unsanctioned-application anomaly. | [optional] 
**UserCount** | **Int64** | Number of distinct owners (users) associated with unsanctioned-application anomalies. | [optional] 
**EventCount** | **Int64** | Total number of unsanctioned-application anomaly records. | [optional] 

## Examples

- Prepare the resource
```powershell
$UnsanctionedApplicationAnomalySummary = Initialize-UnsanctionedApplicationAnomalySummary  -AnomalyType unsanctioned_app `
 -AgentCount 23 `
 -UserCount 254 `
 -EventCount 97
```

- Convert the resource to JSON
```powershell
$UnsanctionedApplicationAnomalySummary | ConvertTo-JSON
```


[[Back to top]](#) 

