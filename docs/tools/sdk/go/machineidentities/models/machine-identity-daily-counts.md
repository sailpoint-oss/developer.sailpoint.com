# MachineIdentityDailyCounts

# MachineIdentityDailyCounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**From** | Pointer to **string** | First day (UTC) of the window, inclusive. | [optional] 
**To** | Pointer to **string** | Last day (UTC) of the window, inclusive. This is always the day before the current UTC date. | [optional] 
**Days** | Pointer to [**[]MachineIdentityDailyCountsDay**](machine-identity-daily-counts-day) | One entry for each calendar day in the window, in ascending order. | [optional] 

## Methods

### NewMachineIdentityDailyCounts

`func NewMachineIdentityDailyCounts() *MachineIdentityDailyCounts`

NewMachineIdentityDailyCounts instantiates a new MachineIdentityDailyCounts object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityDailyCountsWithDefaults

`func NewMachineIdentityDailyCountsWithDefaults() *MachineIdentityDailyCounts`

NewMachineIdentityDailyCountsWithDefaults instantiates a new MachineIdentityDailyCounts object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFrom

`func (o *MachineIdentityDailyCounts) GetFrom() string`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *MachineIdentityDailyCounts) GetFromOk() (*string, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *MachineIdentityDailyCounts) SetFrom(v string)`

SetFrom sets From field to given value.

### HasFrom

`func (o *MachineIdentityDailyCounts) HasFrom() bool`

HasFrom returns a boolean if a field has been set.

### GetTo

`func (o *MachineIdentityDailyCounts) GetTo() string`

GetTo returns the To field if non-nil, zero value otherwise.

### GetToOk

`func (o *MachineIdentityDailyCounts) GetToOk() (*string, bool)`

GetToOk returns a tuple with the To field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTo

`func (o *MachineIdentityDailyCounts) SetTo(v string)`

SetTo sets To field to given value.

### HasTo

`func (o *MachineIdentityDailyCounts) HasTo() bool`

HasTo returns a boolean if a field has been set.

### GetDays

`func (o *MachineIdentityDailyCounts) GetDays() []MachineIdentityDailyCountsDay`

GetDays returns the Days field if non-nil, zero value otherwise.

### GetDaysOk

`func (o *MachineIdentityDailyCounts) GetDaysOk() (*[]MachineIdentityDailyCountsDay, bool)`

GetDaysOk returns a tuple with the Days field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDays

`func (o *MachineIdentityDailyCounts) SetDays(v []MachineIdentityDailyCountsDay)`

SetDays sets Days field to given value.

### HasDays

`func (o *MachineIdentityDailyCounts) HasDays() bool`

HasDays returns a boolean if a field has been set.


