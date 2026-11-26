# AnomalyEvidence

# AnomalyEvidence

Detection evidence associated with an anomaly. SENTINEL detections populate the agent attribute fields; SIEM detections instead include a baseline with windowed time-series data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **str** | Evidence source system. | [optional] 
**timestamp** | [**AnomalyEvidenceTimestamp**](anomaly-evidence-timestamp) |  | [optional] 
**agent_attribute_type** | **str** | Attribute type captured for SENTINEL detections; null for SIEM detections. | [optional] 
**agent_attribute_value** | **str** | Attribute value captured for SENTINEL detections; null for SIEM detections. | [optional] 
**baseline** | [**AnomalyBaseline**](anomaly-baseline) | Peer-group baseline for SIEM detections; null for SENTINEL detections. | [optional] 
\}

## Example

```python
from sailpoint.machine_identities.models.anomaly_evidence import AnomalyEvidence

anomaly_evidence = AnomalyEvidence(
source='SENTINEL',
timestamp=sailpoint.machine_identities.models.anomaly_evidence_timestamp.Anomaly Evidence Timestamp(
                    at = '2026-07-13T10:14Z', 
                    from = '2026-07-13T09:00Z', ),
agent_attribute_type='shell_exec',
agent_attribute_value='curl external.example.com',
baseline=sailpoint.machine_identities.models.anomaly_baseline.Anomaly Baseline(
                    ui_feature_name = 'outbound_volume', 
                    window_size = 7, 
                    values = [3,5,4,6,5,7,5], 
                    raw_value = ["3","5","4","6","5","7","5"], 
                    upper_bound = [8,8.2,8.1,8.5,8.3,8.6,8.4], 
                    lower_bound = [1,1.2,1.1,1.5,1.3,1.6,1.4], 
                    minimum_value = 0, 
                    fpr_value = 0.01, )
)

```
[[Back to top]](#) 

