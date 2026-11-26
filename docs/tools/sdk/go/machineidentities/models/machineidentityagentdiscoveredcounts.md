# Machineidentityagentdiscoveredcounts

# Machineidentityagentdiscoveredcounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int64** | Number of machine identities created within the window. | [optional] 
**WindowDays** | Pointer to **int32** | Length of the window, in days. | [optional] 
**From** | Pointer to **NullableTime** | Start of the window, in UTC, and the exact cutoff used for `count`. Identities created at or after this time are included. | [optional] 

## Methods

### NewMachineidentityagentdiscoveredcounts

`func NewMachineidentityagentdiscoveredcounts() *Machineidentityagentdiscoveredcounts`

NewMachineidentityagentdiscoveredcounts instantiates a new Machineidentityagentdiscoveredcounts object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineidentityagentdiscoveredcountsWithDefaults

`func NewMachineidentityagentdiscoveredcountsWithDefaults() *Machineidentityagentdiscoveredcounts`

NewMachineidentityagentdiscoveredcountsWithDefaults instantiates a new Machineidentityagentdiscoveredcounts object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *Machineidentityagentdiscoveredcounts) GetCount() int64`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *Machineidentityagentdiscoveredcounts) GetCountOk() (*int64, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *Machineidentityagentdiscoveredcounts) SetCount(v int64)`

SetCount sets Count field to given value.

### HasCount

`func (o *Machineidentityagentdiscoveredcounts) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetWindowDays

`func (o *Machineidentityagentdiscoveredcounts) GetWindowDays() int32`

GetWindowDays returns the WindowDays field if non-nil, zero value otherwise.

### GetWindowDaysOk

`func (o *Machineidentityagentdiscoveredcounts) GetWindowDaysOk() (*int32, bool)`

GetWindowDaysOk returns a tuple with the WindowDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWindowDays

`func (o *Machineidentityagentdiscoveredcounts) SetWindowDays(v int32)`

SetWindowDays sets WindowDays field to given value.

### HasWindowDays

`func (o *Machineidentityagentdiscoveredcounts) HasWindowDays() bool`

HasWindowDays returns a boolean if a field has been set.

### GetFrom

`func (o *Machineidentityagentdiscoveredcounts) GetFrom() SailPointTime`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *Machineidentityagentdiscoveredcounts) GetFromOk() (*SailPointTime, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *Machineidentityagentdiscoveredcounts) SetFrom(v SailPointTime)`

SetFrom sets From field to given value.

### HasFrom

`func (o *Machineidentityagentdiscoveredcounts) HasFrom() bool`

HasFrom returns a boolean if a field has been set.

### SetFromNil

`func (o *Machineidentityagentdiscoveredcounts) SetFromNil(b bool)`

 SetFromNil sets the value for From to be an explicit nil

### UnsetFrom
`func (o *Machineidentityagentdiscoveredcounts) UnsetFrom()`

UnsetFrom ensures that no value is present for From, not even an explicit nil

