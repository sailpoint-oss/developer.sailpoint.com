# AnomalyEvidence

# AnomalyEvidence

Import this model from the entry point of its package:

```typescript
import { AnomalyEvidence } from '@sailpoint/angular-sdk/machine_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **(optional)** `string` | Evidence source system. | [default to undefined]
**timestamp** | **(optional)** `AnomalyEvidenceTimestamp` |  | [default to undefined]
**agentAttributeType** | **(optional)** `string` | Attribute type captured for SENTINEL detections; null for SIEM detections. | [default to undefined]
**agentAttributeValue** | **(optional)** `string` | Attribute value captured for SENTINEL detections; null for SIEM detections. | [default to undefined]
**baseline** | **(optional)** `AnomalyBaseline` | Peer-group baseline for SIEM detections; null for SENTINEL detections. | [default to undefined]

