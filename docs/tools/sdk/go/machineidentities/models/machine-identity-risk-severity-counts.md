# MachineIdentityRiskSeverityCounts

# MachineIdentityRiskSeverityCounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Critical** | Pointer to **int64** | Number of machine identities with a CRITICAL risk severity. | [optional] 
**High** | Pointer to **int64** | Number of machine identities with a HIGH risk severity. | [optional] 
**Medium** | Pointer to **int64** | Number of machine identities with a MEDIUM risk severity. | [optional] 
**Low** | Pointer to **int64** | Number of machine identities with a LOW risk severity. | [optional] 
**Unknown** | Pointer to **NullableInt64** | Number of machine identities that have no risk severity. This value is `null` unless unclassified risk severity counting is enabled for the tenant. Version 1 of the API always returns `null`. | [optional] 

## Methods

### NewMachineIdentityRiskSeverityCounts

`func NewMachineIdentityRiskSeverityCounts() *MachineIdentityRiskSeverityCounts`

NewMachineIdentityRiskSeverityCounts instantiates a new MachineIdentityRiskSeverityCounts object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityRiskSeverityCountsWithDefaults

`func NewMachineIdentityRiskSeverityCountsWithDefaults() *MachineIdentityRiskSeverityCounts`

NewMachineIdentityRiskSeverityCountsWithDefaults instantiates a new MachineIdentityRiskSeverityCounts object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCritical

`func (o *MachineIdentityRiskSeverityCounts) GetCritical() int64`

GetCritical returns the Critical field if non-nil, zero value otherwise.

### GetCriticalOk

`func (o *MachineIdentityRiskSeverityCounts) GetCriticalOk() (*int64, bool)`

GetCriticalOk returns a tuple with the Critical field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCritical

`func (o *MachineIdentityRiskSeverityCounts) SetCritical(v int64)`

SetCritical sets Critical field to given value.

### HasCritical

`func (o *MachineIdentityRiskSeverityCounts) HasCritical() bool`

HasCritical returns a boolean if a field has been set.

### GetHigh

`func (o *MachineIdentityRiskSeverityCounts) GetHigh() int64`

GetHigh returns the High field if non-nil, zero value otherwise.

### GetHighOk

`func (o *MachineIdentityRiskSeverityCounts) GetHighOk() (*int64, bool)`

GetHighOk returns a tuple with the High field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHigh

`func (o *MachineIdentityRiskSeverityCounts) SetHigh(v int64)`

SetHigh sets High field to given value.

### HasHigh

`func (o *MachineIdentityRiskSeverityCounts) HasHigh() bool`

HasHigh returns a boolean if a field has been set.

### GetMedium

`func (o *MachineIdentityRiskSeverityCounts) GetMedium() int64`

GetMedium returns the Medium field if non-nil, zero value otherwise.

### GetMediumOk

`func (o *MachineIdentityRiskSeverityCounts) GetMediumOk() (*int64, bool)`

GetMediumOk returns a tuple with the Medium field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMedium

`func (o *MachineIdentityRiskSeverityCounts) SetMedium(v int64)`

SetMedium sets Medium field to given value.

### HasMedium

`func (o *MachineIdentityRiskSeverityCounts) HasMedium() bool`

HasMedium returns a boolean if a field has been set.

### GetLow

`func (o *MachineIdentityRiskSeverityCounts) GetLow() int64`

GetLow returns the Low field if non-nil, zero value otherwise.

### GetLowOk

`func (o *MachineIdentityRiskSeverityCounts) GetLowOk() (*int64, bool)`

GetLowOk returns a tuple with the Low field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLow

`func (o *MachineIdentityRiskSeverityCounts) SetLow(v int64)`

SetLow sets Low field to given value.

### HasLow

`func (o *MachineIdentityRiskSeverityCounts) HasLow() bool`

HasLow returns a boolean if a field has been set.

### GetUnknown

`func (o *MachineIdentityRiskSeverityCounts) GetUnknown() int64`

GetUnknown returns the Unknown field if non-nil, zero value otherwise.

### GetUnknownOk

`func (o *MachineIdentityRiskSeverityCounts) GetUnknownOk() (*int64, bool)`

GetUnknownOk returns a tuple with the Unknown field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnknown

`func (o *MachineIdentityRiskSeverityCounts) SetUnknown(v int64)`

SetUnknown sets Unknown field to given value.

### HasUnknown

`func (o *MachineIdentityRiskSeverityCounts) HasUnknown() bool`

HasUnknown returns a boolean if a field has been set.

### SetUnknownNil

`func (o *MachineIdentityRiskSeverityCounts) SetUnknownNil(b bool)`

 SetUnknownNil sets the value for Unknown to be an explicit nil

### UnsetUnknown
`func (o *MachineIdentityRiskSeverityCounts) UnsetUnknown()`

UnsetUnknown ensures that no value is present for Unknown, not even an explicit nil

