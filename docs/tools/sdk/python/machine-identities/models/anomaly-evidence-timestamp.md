# AnomalyEvidenceTimestamp

# AnomalyEvidenceTimestamp

Timestamp block for an anomaly's evidence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**at** | **datetime** | Point-in-time the evidence was captured. | [optional] 
**var_from** | **datetime** | Start of the aggregation window for time-window detections (SIEM); null for point-in-time detections (SENTINEL). | [optional] 
\}

## Example

```python
from sailpoint.machine_identities.models.anomaly_evidence_timestamp import AnomalyEvidenceTimestamp

anomaly_evidence_timestamp = AnomalyEvidenceTimestamp(
at='2026-07-13T10:14Z',
var_from='2026-07-13T09:00Z'
)

```
[[Back to top]](#) 

