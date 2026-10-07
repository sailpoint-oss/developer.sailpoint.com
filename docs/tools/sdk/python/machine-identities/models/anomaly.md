# Anomaly

# Anomaly

A single anomaly detected for a machine identity by Agent Behavior Monitoring.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Anomaly identifier. | [optional] 
**anomaly_type** | **str** | Category of the detected anomaly. | [optional] 
**description** | **str** | Human-readable description of the anomaly. | [optional] 
**rule_id** | **str** | Identifier of the detection rule that produced the anomaly. | [optional] 
**data_sources** | **[]str** | Source systems that contributed to the detection. | [optional] 
**detected_at** | **datetime** | Date-time the anomaly was detected. | [optional] 
**evidence** | [**AnomalyEvidence**](anomaly-evidence) |  | [optional] 
\}

## Example

```python
from sailpoint.machine_identities.models.anomaly import Anomaly

anomaly = Anomaly(
id='rule-anom-001',
anomaly_type='unsanctioned_app',
description='Agent accessed an unsanctioned application.',
rule_id='rule-tool-usage',
data_sources=["SENTINEL"],
detected_at='2026-07-13T10:14Z',
evidence=sailpoint.machine_identities.models.anomaly_evidence.Anomaly Evidence(
                    source = 'SENTINEL', 
                    timestamp = sailpoint.machine_identities.models.anomaly_evidence_timestamp.Anomaly Evidence Timestamp(
                        at = '2026-07-13T10:14Z', 
                        from = '2026-07-13T09:00Z', ), 
                    agent_attribute_type = 'shell_exec', 
                    agent_attribute_value = 'curl external.example.com', 
                    baseline = null, )
)

```
[[Back to top]](#) 

