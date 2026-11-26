# AnomalyEvidence

# AnomalyEvidence

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | Pointer to **string** | Evidence source system. | [optional] 
**Timestamp** | Pointer to [**AnomalyEvidenceTimestamp**](anomaly-evidence-timestamp) |  | [optional] 
**AgentAttributeType** | Pointer to **NullableString** | Attribute type captured for SENTINEL detections; null for SIEM detections. | [optional] 
**AgentAttributeValue** | Pointer to **NullableString** | Attribute value captured for SENTINEL detections; null for SIEM detections. | [optional] 
**Baseline** | Pointer to [**NullableAnomalyBaseline**](anomaly-baseline) | Peer-group baseline for SIEM detections; null for SENTINEL detections. | [optional] 

## Methods

### NewAnomalyEvidence

`func NewAnomalyEvidence() *AnomalyEvidence`

NewAnomalyEvidence instantiates a new AnomalyEvidence object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAnomalyEvidenceWithDefaults

`func NewAnomalyEvidenceWithDefaults() *AnomalyEvidence`

NewAnomalyEvidenceWithDefaults instantiates a new AnomalyEvidence object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSource

`func (o *AnomalyEvidence) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *AnomalyEvidence) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *AnomalyEvidence) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *AnomalyEvidence) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetTimestamp

`func (o *AnomalyEvidence) GetTimestamp() AnomalyEvidenceTimestamp`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *AnomalyEvidence) GetTimestampOk() (*AnomalyEvidenceTimestamp, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *AnomalyEvidence) SetTimestamp(v AnomalyEvidenceTimestamp)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *AnomalyEvidence) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.

### GetAgentAttributeType

`func (o *AnomalyEvidence) GetAgentAttributeType() string`

GetAgentAttributeType returns the AgentAttributeType field if non-nil, zero value otherwise.

### GetAgentAttributeTypeOk

`func (o *AnomalyEvidence) GetAgentAttributeTypeOk() (*string, bool)`

GetAgentAttributeTypeOk returns a tuple with the AgentAttributeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgentAttributeType

`func (o *AnomalyEvidence) SetAgentAttributeType(v string)`

SetAgentAttributeType sets AgentAttributeType field to given value.

### HasAgentAttributeType

`func (o *AnomalyEvidence) HasAgentAttributeType() bool`

HasAgentAttributeType returns a boolean if a field has been set.

### SetAgentAttributeTypeNil

`func (o *AnomalyEvidence) SetAgentAttributeTypeNil(b bool)`

 SetAgentAttributeTypeNil sets the value for AgentAttributeType to be an explicit nil

### UnsetAgentAttributeType
`func (o *AnomalyEvidence) UnsetAgentAttributeType()`

UnsetAgentAttributeType ensures that no value is present for AgentAttributeType, not even an explicit nil
### GetAgentAttributeValue

`func (o *AnomalyEvidence) GetAgentAttributeValue() string`

GetAgentAttributeValue returns the AgentAttributeValue field if non-nil, zero value otherwise.

### GetAgentAttributeValueOk

`func (o *AnomalyEvidence) GetAgentAttributeValueOk() (*string, bool)`

GetAgentAttributeValueOk returns a tuple with the AgentAttributeValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgentAttributeValue

`func (o *AnomalyEvidence) SetAgentAttributeValue(v string)`

SetAgentAttributeValue sets AgentAttributeValue field to given value.

### HasAgentAttributeValue

`func (o *AnomalyEvidence) HasAgentAttributeValue() bool`

HasAgentAttributeValue returns a boolean if a field has been set.

### SetAgentAttributeValueNil

`func (o *AnomalyEvidence) SetAgentAttributeValueNil(b bool)`

 SetAgentAttributeValueNil sets the value for AgentAttributeValue to be an explicit nil

### UnsetAgentAttributeValue
`func (o *AnomalyEvidence) UnsetAgentAttributeValue()`

UnsetAgentAttributeValue ensures that no value is present for AgentAttributeValue, not even an explicit nil
### GetBaseline

`func (o *AnomalyEvidence) GetBaseline() AnomalyBaseline`

GetBaseline returns the Baseline field if non-nil, zero value otherwise.

### GetBaselineOk

`func (o *AnomalyEvidence) GetBaselineOk() (*AnomalyBaseline, bool)`

GetBaselineOk returns a tuple with the Baseline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseline

`func (o *AnomalyEvidence) SetBaseline(v AnomalyBaseline)`

SetBaseline sets Baseline field to given value.

### HasBaseline

`func (o *AnomalyEvidence) HasBaseline() bool`

HasBaseline returns a boolean if a field has been set.

### SetBaselineNil

`func (o *AnomalyEvidence) SetBaselineNil(b bool)`

 SetBaselineNil sets the value for Baseline to be an explicit nil

### UnsetBaseline
`func (o *AnomalyEvidence) UnsetBaseline()`

UnsetBaseline ensures that no value is present for Baseline, not even an explicit nil

