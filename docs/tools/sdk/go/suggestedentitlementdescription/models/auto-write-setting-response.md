# AutoWriteSettingResponse

# AutoWriteSettingResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | Whether auto-write is currently enabled for the tenant | [optional] [default to false]
**IncludedSourceIds** | Pointer to **[]string** | Source IDs in the allowlist. Empty array means not in allowlist mode. | [optional] 
**ExcludedSourceIds** | Pointer to **[]string** | Source IDs to exclude from auto-write. Always applied. | [optional] 
**CreatedAt** | Pointer to **SailPointTime** | When settings were first created | [optional] 
**UpdatedAt** | Pointer to **SailPointTime** | When settings were last modified | [optional] 

## Methods

### NewAutoWriteSettingResponse

`func NewAutoWriteSettingResponse() *AutoWriteSettingResponse`

NewAutoWriteSettingResponse instantiates a new AutoWriteSettingResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutoWriteSettingResponseWithDefaults

`func NewAutoWriteSettingResponseWithDefaults() *AutoWriteSettingResponse`

NewAutoWriteSettingResponseWithDefaults instantiates a new AutoWriteSettingResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *AutoWriteSettingResponse) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *AutoWriteSettingResponse) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *AutoWriteSettingResponse) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *AutoWriteSettingResponse) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetIncludedSourceIds

`func (o *AutoWriteSettingResponse) GetIncludedSourceIds() []string`

GetIncludedSourceIds returns the IncludedSourceIds field if non-nil, zero value otherwise.

### GetIncludedSourceIdsOk

`func (o *AutoWriteSettingResponse) GetIncludedSourceIdsOk() (*[]string, bool)`

GetIncludedSourceIdsOk returns a tuple with the IncludedSourceIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedSourceIds

`func (o *AutoWriteSettingResponse) SetIncludedSourceIds(v []string)`

SetIncludedSourceIds sets IncludedSourceIds field to given value.

### HasIncludedSourceIds

`func (o *AutoWriteSettingResponse) HasIncludedSourceIds() bool`

HasIncludedSourceIds returns a boolean if a field has been set.

### SetIncludedSourceIdsNil

`func (o *AutoWriteSettingResponse) SetIncludedSourceIdsNil(b bool)`

 SetIncludedSourceIdsNil sets the value for IncludedSourceIds to be an explicit nil

### UnsetIncludedSourceIds
`func (o *AutoWriteSettingResponse) UnsetIncludedSourceIds()`

UnsetIncludedSourceIds ensures that no value is present for IncludedSourceIds, not even an explicit nil
### GetExcludedSourceIds

`func (o *AutoWriteSettingResponse) GetExcludedSourceIds() []string`

GetExcludedSourceIds returns the ExcludedSourceIds field if non-nil, zero value otherwise.

### GetExcludedSourceIdsOk

`func (o *AutoWriteSettingResponse) GetExcludedSourceIdsOk() (*[]string, bool)`

GetExcludedSourceIdsOk returns a tuple with the ExcludedSourceIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludedSourceIds

`func (o *AutoWriteSettingResponse) SetExcludedSourceIds(v []string)`

SetExcludedSourceIds sets ExcludedSourceIds field to given value.

### HasExcludedSourceIds

`func (o *AutoWriteSettingResponse) HasExcludedSourceIds() bool`

HasExcludedSourceIds returns a boolean if a field has been set.

### SetExcludedSourceIdsNil

`func (o *AutoWriteSettingResponse) SetExcludedSourceIdsNil(b bool)`

 SetExcludedSourceIdsNil sets the value for ExcludedSourceIds to be an explicit nil

### UnsetExcludedSourceIds
`func (o *AutoWriteSettingResponse) UnsetExcludedSourceIds()`

UnsetExcludedSourceIds ensures that no value is present for ExcludedSourceIds, not even an explicit nil
### GetCreatedAt

`func (o *AutoWriteSettingResponse) GetCreatedAt() SailPointTime`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *AutoWriteSettingResponse) GetCreatedAtOk() (*SailPointTime, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *AutoWriteSettingResponse) SetCreatedAt(v SailPointTime)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *AutoWriteSettingResponse) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *AutoWriteSettingResponse) GetUpdatedAt() SailPointTime`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *AutoWriteSettingResponse) GetUpdatedAtOk() (*SailPointTime, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *AutoWriteSettingResponse) SetUpdatedAt(v SailPointTime)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *AutoWriteSettingResponse) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


