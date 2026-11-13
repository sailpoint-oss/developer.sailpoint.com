# AnomalyEvidence

# AnomalyEvidence

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **(optional)** `string` | Evidence source system. | [default to undefined]
**timestamp** | **(optional)** `AnomalyEvidenceTimestamp` |  | [default to undefined]
**agentAttributeType** | **(optional)** `string` | Attribute type captured for SENTINEL detections; null for SIEM detections. | [default to undefined]
**agentAttributeValue** | **(optional)** `string` | Attribute value captured for SENTINEL detections; null for SIEM detections. | [default to undefined]
**baseline** | **(optional)** `AnomalyBaseline` | Peer-group baseline for SIEM detections; null for SENTINEL detections. | [default to undefined]

