# UnsanctionedApplicationAnomalySummary

# UnsanctionedApplicationAnomalySummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AnomalyType** | Pointer to **string** | The anomaly type these counts describe. Always unsanctioned_app for this endpoint. | [optional] 
**AgentCount** | Pointer to **int64** | Number of distinct agents with at least one unsanctioned-application anomaly. | [optional] 
**UserCount** | Pointer to **int64** | Number of distinct owners (users) associated with unsanctioned-application anomalies. | [optional] 
**EventCount** | Pointer to **int64** | Total number of unsanctioned-application anomaly records. | [optional] 

## Methods

### NewUnsanctionedApplicationAnomalySummary

`func NewUnsanctionedApplicationAnomalySummary() *UnsanctionedApplicationAnomalySummary`

NewUnsanctionedApplicationAnomalySummary instantiates a new UnsanctionedApplicationAnomalySummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUnsanctionedApplicationAnomalySummaryWithDefaults

`func NewUnsanctionedApplicationAnomalySummaryWithDefaults() *UnsanctionedApplicationAnomalySummary`

NewUnsanctionedApplicationAnomalySummaryWithDefaults instantiates a new UnsanctionedApplicationAnomalySummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAnomalyType

`func (o *UnsanctionedApplicationAnomalySummary) GetAnomalyType() string`

GetAnomalyType returns the AnomalyType field if non-nil, zero value otherwise.

### GetAnomalyTypeOk

`func (o *UnsanctionedApplicationAnomalySummary) GetAnomalyTypeOk() (*string, bool)`

GetAnomalyTypeOk returns a tuple with the AnomalyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnomalyType

`func (o *UnsanctionedApplicationAnomalySummary) SetAnomalyType(v string)`

SetAnomalyType sets AnomalyType field to given value.

### HasAnomalyType

`func (o *UnsanctionedApplicationAnomalySummary) HasAnomalyType() bool`

HasAnomalyType returns a boolean if a field has been set.

### GetAgentCount

`func (o *UnsanctionedApplicationAnomalySummary) GetAgentCount() int64`

GetAgentCount returns the AgentCount field if non-nil, zero value otherwise.

### GetAgentCountOk

`func (o *UnsanctionedApplicationAnomalySummary) GetAgentCountOk() (*int64, bool)`

GetAgentCountOk returns a tuple with the AgentCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgentCount

`func (o *UnsanctionedApplicationAnomalySummary) SetAgentCount(v int64)`

SetAgentCount sets AgentCount field to given value.

### HasAgentCount

`func (o *UnsanctionedApplicationAnomalySummary) HasAgentCount() bool`

HasAgentCount returns a boolean if a field has been set.

### GetUserCount

`func (o *UnsanctionedApplicationAnomalySummary) GetUserCount() int64`

GetUserCount returns the UserCount field if non-nil, zero value otherwise.

### GetUserCountOk

`func (o *UnsanctionedApplicationAnomalySummary) GetUserCountOk() (*int64, bool)`

GetUserCountOk returns a tuple with the UserCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserCount

`func (o *UnsanctionedApplicationAnomalySummary) SetUserCount(v int64)`

SetUserCount sets UserCount field to given value.

### HasUserCount

`func (o *UnsanctionedApplicationAnomalySummary) HasUserCount() bool`

HasUserCount returns a boolean if a field has been set.

### GetEventCount

`func (o *UnsanctionedApplicationAnomalySummary) GetEventCount() int64`

GetEventCount returns the EventCount field if non-nil, zero value otherwise.

### GetEventCountOk

`func (o *UnsanctionedApplicationAnomalySummary) GetEventCountOk() (*int64, bool)`

GetEventCountOk returns a tuple with the EventCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventCount

`func (o *UnsanctionedApplicationAnomalySummary) SetEventCount(v int64)`

SetEventCount sets EventCount field to given value.

### HasEventCount

`func (o *UnsanctionedApplicationAnomalySummary) HasEventCount() bool`

HasEventCount returns a boolean if a field has been set.


