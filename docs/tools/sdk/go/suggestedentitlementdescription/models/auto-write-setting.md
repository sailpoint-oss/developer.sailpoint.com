# AutoWriteSetting

# AutoWriteSetting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | Whether auto-write is currently enabled for the tenant | [optional] [default to false]
**IncludedSourceIds** | Pointer to **[]string** | Source IDs in the allowlist. Empty array means not in allowlist mode. | [optional] 
**ExcludedSourceIds** | Pointer to **[]string** | Source IDs to exclude from auto-write. Always applied. | [optional] 

## Methods

### NewAutoWriteSetting

`func NewAutoWriteSetting() *AutoWriteSetting`

NewAutoWriteSetting instantiates a new AutoWriteSetting object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutoWriteSettingWithDefaults

`func NewAutoWriteSettingWithDefaults() *AutoWriteSetting`

NewAutoWriteSettingWithDefaults instantiates a new AutoWriteSetting object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *AutoWriteSetting) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *AutoWriteSetting) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *AutoWriteSetting) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *AutoWriteSetting) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetIncludedSourceIds

`func (o *AutoWriteSetting) GetIncludedSourceIds() []string`

GetIncludedSourceIds returns the IncludedSourceIds field if non-nil, zero value otherwise.

### GetIncludedSourceIdsOk

`func (o *AutoWriteSetting) GetIncludedSourceIdsOk() (*[]string, bool)`

GetIncludedSourceIdsOk returns a tuple with the IncludedSourceIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedSourceIds

`func (o *AutoWriteSetting) SetIncludedSourceIds(v []string)`

SetIncludedSourceIds sets IncludedSourceIds field to given value.

### HasIncludedSourceIds

`func (o *AutoWriteSetting) HasIncludedSourceIds() bool`

HasIncludedSourceIds returns a boolean if a field has been set.

### SetIncludedSourceIdsNil

`func (o *AutoWriteSetting) SetIncludedSourceIdsNil(b bool)`

 SetIncludedSourceIdsNil sets the value for IncludedSourceIds to be an explicit nil

### UnsetIncludedSourceIds
`func (o *AutoWriteSetting) UnsetIncludedSourceIds()`

UnsetIncludedSourceIds ensures that no value is present for IncludedSourceIds, not even an explicit nil
### GetExcludedSourceIds

`func (o *AutoWriteSetting) GetExcludedSourceIds() []string`

GetExcludedSourceIds returns the ExcludedSourceIds field if non-nil, zero value otherwise.

### GetExcludedSourceIdsOk

`func (o *AutoWriteSetting) GetExcludedSourceIdsOk() (*[]string, bool)`

GetExcludedSourceIdsOk returns a tuple with the ExcludedSourceIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludedSourceIds

`func (o *AutoWriteSetting) SetExcludedSourceIds(v []string)`

SetExcludedSourceIds sets ExcludedSourceIds field to given value.

### HasExcludedSourceIds

`func (o *AutoWriteSetting) HasExcludedSourceIds() bool`

HasExcludedSourceIds returns a boolean if a field has been set.

### SetExcludedSourceIdsNil

`func (o *AutoWriteSetting) SetExcludedSourceIdsNil(b bool)`

 SetExcludedSourceIdsNil sets the value for ExcludedSourceIds to be an explicit nil

### UnsetExcludedSourceIds
`func (o *AutoWriteSetting) UnsetExcludedSourceIds()`

UnsetExcludedSourceIds ensures that no value is present for ExcludedSourceIds, not even an explicit nil

