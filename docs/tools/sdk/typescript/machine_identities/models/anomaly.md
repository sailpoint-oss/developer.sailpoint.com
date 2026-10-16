# Anomaly

# Anomaly

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Anomaly identifier. | [default to undefined]
**anomalyType** | **(optional)** `string` | Category of the detected anomaly. | [default to undefined]
**description** | **(optional)** `string` | Human-readable description of the anomaly. | [default to undefined]
**ruleId** | **(optional)** `string` | Identifier of the detection rule that produced the anomaly. | [default to undefined]
**dataSources** | **(optional)** `Array<string>` | Source systems that contributed to the detection. | [default to undefined]
**detectedAt** | **(optional)** `string` | Date-time the anomaly was detected. | [default to undefined]
**evidence** | **(optional)** `AnomalyEvidence` |  | [default to undefined]

