# Anomaly

# Anomaly

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Anomaly identifier. | [optional] 
**AnomalyType** | Pointer to **string** | Category of the detected anomaly. | [optional] 
**Description** | Pointer to **string** | Human-readable description of the anomaly. | [optional] 
**RuleId** | Pointer to **string** | Identifier of the detection rule that produced the anomaly. | [optional] 
**DataSources** | Pointer to **[]string** | Source systems that contributed to the detection. | [optional] 
**DetectedAt** | Pointer to **SailPointTime** | Date-time the anomaly was detected. | [optional] 
**Evidence** | Pointer to [**AnomalyEvidence**](anomaly-evidence) |  | [optional] 

## Methods

### NewAnomaly

`func NewAnomaly() *Anomaly`

NewAnomaly instantiates a new Anomaly object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAnomalyWithDefaults

`func NewAnomalyWithDefaults() *Anomaly`

NewAnomalyWithDefaults instantiates a new Anomaly object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Anomaly) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Anomaly) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Anomaly) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Anomaly) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAnomalyType

`func (o *Anomaly) GetAnomalyType() string`

GetAnomalyType returns the AnomalyType field if non-nil, zero value otherwise.

### GetAnomalyTypeOk

`func (o *Anomaly) GetAnomalyTypeOk() (*string, bool)`

GetAnomalyTypeOk returns a tuple with the AnomalyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnomalyType

`func (o *Anomaly) SetAnomalyType(v string)`

SetAnomalyType sets AnomalyType field to given value.

### HasAnomalyType

`func (o *Anomaly) HasAnomalyType() bool`

HasAnomalyType returns a boolean if a field has been set.

### GetDescription

`func (o *Anomaly) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Anomaly) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Anomaly) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Anomaly) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetRuleId

`func (o *Anomaly) GetRuleId() string`

GetRuleId returns the RuleId field if non-nil, zero value otherwise.

### GetRuleIdOk

`func (o *Anomaly) GetRuleIdOk() (*string, bool)`

GetRuleIdOk returns a tuple with the RuleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleId

`func (o *Anomaly) SetRuleId(v string)`

SetRuleId sets RuleId field to given value.

### HasRuleId

`func (o *Anomaly) HasRuleId() bool`

HasRuleId returns a boolean if a field has been set.

### GetDataSources

`func (o *Anomaly) GetDataSources() []string`

GetDataSources returns the DataSources field if non-nil, zero value otherwise.

### GetDataSourcesOk

`func (o *Anomaly) GetDataSourcesOk() (*[]string, bool)`

GetDataSourcesOk returns a tuple with the DataSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataSources

`func (o *Anomaly) SetDataSources(v []string)`

SetDataSources sets DataSources field to given value.

### HasDataSources

`func (o *Anomaly) HasDataSources() bool`

HasDataSources returns a boolean if a field has been set.

### GetDetectedAt

`func (o *Anomaly) GetDetectedAt() SailPointTime`

GetDetectedAt returns the DetectedAt field if non-nil, zero value otherwise.

### GetDetectedAtOk

`func (o *Anomaly) GetDetectedAtOk() (*SailPointTime, bool)`

GetDetectedAtOk returns a tuple with the DetectedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetectedAt

`func (o *Anomaly) SetDetectedAt(v SailPointTime)`

SetDetectedAt sets DetectedAt field to given value.

### HasDetectedAt

`func (o *Anomaly) HasDetectedAt() bool`

HasDetectedAt returns a boolean if a field has been set.

### GetEvidence

`func (o *Anomaly) GetEvidence() AnomalyEvidence`

GetEvidence returns the Evidence field if non-nil, zero value otherwise.

### GetEvidenceOk

`func (o *Anomaly) GetEvidenceOk() (*AnomalyEvidence, bool)`

GetEvidenceOk returns a tuple with the Evidence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvidence

`func (o *Anomaly) SetEvidence(v AnomalyEvidence)`

SetEvidence sets Evidence field to given value.

### HasEvidence

`func (o *Anomaly) HasEvidence() bool`

HasEvidence returns a boolean if a field has been set.


