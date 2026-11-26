# MachineIdentityDailyCountsDay

# MachineIdentityDailyCountsDay

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Day** | Pointer to **string** | Calendar day (UTC) the counts were recorded for. | [optional] 
**Metrics** | Pointer to [**[]MachineIdentityDailyCountMetric**](machine-identity-daily-count-metric) | Counts for each entity type and subtype. The array is empty when no counts were recorded for the day. | [optional] 

## Methods

### NewMachineIdentityDailyCountsDay

`func NewMachineIdentityDailyCountsDay() *MachineIdentityDailyCountsDay`

NewMachineIdentityDailyCountsDay instantiates a new MachineIdentityDailyCountsDay object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityDailyCountsDayWithDefaults

`func NewMachineIdentityDailyCountsDayWithDefaults() *MachineIdentityDailyCountsDay`

NewMachineIdentityDailyCountsDayWithDefaults instantiates a new MachineIdentityDailyCountsDay object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDay

`func (o *MachineIdentityDailyCountsDay) GetDay() string`

GetDay returns the Day field if non-nil, zero value otherwise.

### GetDayOk

`func (o *MachineIdentityDailyCountsDay) GetDayOk() (*string, bool)`

GetDayOk returns a tuple with the Day field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDay

`func (o *MachineIdentityDailyCountsDay) SetDay(v string)`

SetDay sets Day field to given value.

### HasDay

`func (o *MachineIdentityDailyCountsDay) HasDay() bool`

HasDay returns a boolean if a field has been set.

### GetMetrics

`func (o *MachineIdentityDailyCountsDay) GetMetrics() []MachineIdentityDailyCountMetric`

GetMetrics returns the Metrics field if non-nil, zero value otherwise.

### GetMetricsOk

`func (o *MachineIdentityDailyCountsDay) GetMetricsOk() (*[]MachineIdentityDailyCountMetric, bool)`

GetMetricsOk returns a tuple with the Metrics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetrics

`func (o *MachineIdentityDailyCountsDay) SetMetrics(v []MachineIdentityDailyCountMetric)`

SetMetrics sets Metrics field to given value.

### HasMetrics

`func (o *MachineIdentityDailyCountsDay) HasMetrics() bool`

HasMetrics returns a boolean if a field has been set.


