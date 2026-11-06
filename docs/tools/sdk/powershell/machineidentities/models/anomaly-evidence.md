# AnomalyEvidence

# AnomalyEvidence

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | **String** | Evidence source system. | [optional] 
**Timestamp** | [**AnomalyEvidenceTimestamp**](anomaly-evidence-timestamp) |  | [optional] 
**AgentAttributeType** | **String** | Attribute type captured for SENTINEL detections; null for SIEM detections. | [optional] 
**AgentAttributeValue** | **String** | Attribute value captured for SENTINEL detections; null for SIEM detections. | [optional] 
**Baseline** | [**AnomalyBaseline**](anomaly-baseline) | Peer-group baseline for SIEM detections; null for SENTINEL detections. | [optional] 

## Examples

- Prepare the resource
```powershell
$AnomalyEvidence = Initialize-AnomalyEvidence  -Source SENTINEL `
 -Timestamp null `
 -AgentAttributeType shell_exec `
 -AgentAttributeValue curl external.example.com `
 -Baseline null
```

- Convert the resource to JSON
```powershell
$AnomalyEvidence | ConvertTo-JSON
```


[[Back to top]](#) 

