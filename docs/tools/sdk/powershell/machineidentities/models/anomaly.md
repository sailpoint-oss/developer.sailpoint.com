# Anomaly

# Anomaly

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Anomaly identifier. | [optional] 
**AnomalyType** | **String** | Category of the detected anomaly. | [optional] 
**Description** | **String** | Human-readable description of the anomaly. | [optional] 
**RuleId** | **String** | Identifier of the detection rule that produced the anomaly. | [optional] 
**DataSources** | **[]String** | Source systems that contributed to the detection. | [optional] 
**DetectedAt** | **System.DateTime** | Date-time the anomaly was detected. | [optional] 
**Evidence** | [**AnomalyEvidence**](anomaly-evidence) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Anomaly = Initialize-Anomaly  -Id rule-anom-001 `
 -AnomalyType unsanctioned_app `
 -Description Agent accessed an unsanctioned application. `
 -RuleId rule-tool-usage `
 -DataSources ["SENTINEL"] `
 -DetectedAt 2026-07-13T10:14Z `
 -Evidence null
```

- Convert the resource to JSON
```powershell
$Anomaly | ConvertTo-JSON
```


[[Back to top]](#) 

