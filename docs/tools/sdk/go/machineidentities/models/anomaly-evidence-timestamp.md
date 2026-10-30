# AnomalyEvidenceTimestamp

# AnomalyEvidenceTimestamp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**At** | Pointer to **SailPointTime** | Point-in-time the evidence was captured. | [optional] 
**From** | Pointer to **NullableTime** | Start of the aggregation window for time-window detections (SIEM); null for point-in-time detections (SENTINEL). | [optional] 

## Methods

### NewAnomalyEvidenceTimestamp

`func NewAnomalyEvidenceTimestamp() *AnomalyEvidenceTimestamp`

NewAnomalyEvidenceTimestamp instantiates a new AnomalyEvidenceTimestamp object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAnomalyEvidenceTimestampWithDefaults

`func NewAnomalyEvidenceTimestampWithDefaults() *AnomalyEvidenceTimestamp`

NewAnomalyEvidenceTimestampWithDefaults instantiates a new AnomalyEvidenceTimestamp object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAt

`func (o *AnomalyEvidenceTimestamp) GetAt() SailPointTime`

GetAt returns the At field if non-nil, zero value otherwise.

### GetAtOk

`func (o *AnomalyEvidenceTimestamp) GetAtOk() (*SailPointTime, bool)`

GetAtOk returns a tuple with the At field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAt

`func (o *AnomalyEvidenceTimestamp) SetAt(v SailPointTime)`

SetAt sets At field to given value.

### HasAt

`func (o *AnomalyEvidenceTimestamp) HasAt() bool`

HasAt returns a boolean if a field has been set.

### GetFrom

`func (o *AnomalyEvidenceTimestamp) GetFrom() SailPointTime`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *AnomalyEvidenceTimestamp) GetFromOk() (*SailPointTime, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *AnomalyEvidenceTimestamp) SetFrom(v SailPointTime)`

SetFrom sets From field to given value.

### HasFrom

`func (o *AnomalyEvidenceTimestamp) HasFrom() bool`

HasFrom returns a boolean if a field has been set.

### SetFromNil

`func (o *AnomalyEvidenceTimestamp) SetFromNil(b bool)`

 SetFromNil sets the value for From to be an explicit nil

### UnsetFrom
`func (o *AnomalyEvidenceTimestamp) UnsetFrom()`

UnsetFrom ensures that no value is present for From, not even an explicit nil

