# ActivityInsights

# ActivityInsights

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UsageDays** | Pointer to **int32** | The number of usage days in the last 90 days | [optional] 
**UsageDaysState** | Pointer to **string** | The state indicates whether data is missing, or whether there is usage data with no value | [optional] 

## Methods

### NewActivityInsights

`func NewActivityInsights() *ActivityInsights`

NewActivityInsights instantiates a new ActivityInsights object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityInsightsWithDefaults

`func NewActivityInsightsWithDefaults() *ActivityInsights`

NewActivityInsightsWithDefaults instantiates a new ActivityInsights object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUsageDays

`func (o *ActivityInsights) GetUsageDays() int32`

GetUsageDays returns the UsageDays field if non-nil, zero value otherwise.

### GetUsageDaysOk

`func (o *ActivityInsights) GetUsageDaysOk() (*int32, bool)`

GetUsageDaysOk returns a tuple with the UsageDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageDays

`func (o *ActivityInsights) SetUsageDays(v int32)`

SetUsageDays sets UsageDays field to given value.

### HasUsageDays

`func (o *ActivityInsights) HasUsageDays() bool`

HasUsageDays returns a boolean if a field has been set.

### GetUsageDaysState

`func (o *ActivityInsights) GetUsageDaysState() string`

GetUsageDaysState returns the UsageDaysState field if non-nil, zero value otherwise.

### GetUsageDaysStateOk

`func (o *ActivityInsights) GetUsageDaysStateOk() (*string, bool)`

GetUsageDaysStateOk returns a tuple with the UsageDaysState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageDaysState

`func (o *ActivityInsights) SetUsageDaysState(v string)`

SetUsageDaysState sets UsageDaysState field to given value.

### HasUsageDaysState

`func (o *ActivityInsights) HasUsageDaysState() bool`

HasUsageDaysState returns a boolean if a field has been set.


