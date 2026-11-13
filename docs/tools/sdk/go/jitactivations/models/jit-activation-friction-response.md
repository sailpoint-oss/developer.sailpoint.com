# JITActivationFrictionResponse

# JITActivationFrictionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **NullableJITActivationFrictionType** | Kind of friction step. | 
**Status** | **NullableJITActivationFrictionStatus** | Lifecycle of this friction step. | 
**SubmittedData** | [**NullableFrictionSubmittedData**](friction-submitted-data) | Data submitted for this friction step. | 
**BypassAllowed** | **bool** | Whether this step may be bypassed. | 
**MinWords** | Pointer to **int32** | Minimum word count for a justification step. | [optional] 

## Methods

### NewJITActivationFrictionResponse

`func NewJITActivationFrictionResponse(type_ NullableJITActivationFrictionType, status NullableJITActivationFrictionStatus, submittedData NullableFrictionSubmittedData, bypassAllowed bool, ) *JITActivationFrictionResponse`

NewJITActivationFrictionResponse instantiates a new JITActivationFrictionResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJITActivationFrictionResponseWithDefaults

`func NewJITActivationFrictionResponseWithDefaults() *JITActivationFrictionResponse`

NewJITActivationFrictionResponseWithDefaults instantiates a new JITActivationFrictionResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *JITActivationFrictionResponse) GetType() JITActivationFrictionType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *JITActivationFrictionResponse) GetTypeOk() (*JITActivationFrictionType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *JITActivationFrictionResponse) SetType(v JITActivationFrictionType)`

SetType sets Type field to given value.


### SetTypeNil

`func (o *JITActivationFrictionResponse) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *JITActivationFrictionResponse) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil
### GetStatus

`func (o *JITActivationFrictionResponse) GetStatus() JITActivationFrictionStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *JITActivationFrictionResponse) GetStatusOk() (*JITActivationFrictionStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *JITActivationFrictionResponse) SetStatus(v JITActivationFrictionStatus)`

SetStatus sets Status field to given value.


### SetStatusNil

`func (o *JITActivationFrictionResponse) SetStatusNil(b bool)`

 SetStatusNil sets the value for Status to be an explicit nil

### UnsetStatus
`func (o *JITActivationFrictionResponse) UnsetStatus()`

UnsetStatus ensures that no value is present for Status, not even an explicit nil
### GetSubmittedData

`func (o *JITActivationFrictionResponse) GetSubmittedData() FrictionSubmittedData`

GetSubmittedData returns the SubmittedData field if non-nil, zero value otherwise.

### GetSubmittedDataOk

`func (o *JITActivationFrictionResponse) GetSubmittedDataOk() (*FrictionSubmittedData, bool)`

GetSubmittedDataOk returns a tuple with the SubmittedData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubmittedData

`func (o *JITActivationFrictionResponse) SetSubmittedData(v FrictionSubmittedData)`

SetSubmittedData sets SubmittedData field to given value.


### SetSubmittedDataNil

`func (o *JITActivationFrictionResponse) SetSubmittedDataNil(b bool)`

 SetSubmittedDataNil sets the value for SubmittedData to be an explicit nil

### UnsetSubmittedData
`func (o *JITActivationFrictionResponse) UnsetSubmittedData()`

UnsetSubmittedData ensures that no value is present for SubmittedData, not even an explicit nil
### GetBypassAllowed

`func (o *JITActivationFrictionResponse) GetBypassAllowed() bool`

GetBypassAllowed returns the BypassAllowed field if non-nil, zero value otherwise.

### GetBypassAllowedOk

`func (o *JITActivationFrictionResponse) GetBypassAllowedOk() (*bool, bool)`

GetBypassAllowedOk returns a tuple with the BypassAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBypassAllowed

`func (o *JITActivationFrictionResponse) SetBypassAllowed(v bool)`

SetBypassAllowed sets BypassAllowed field to given value.


### GetMinWords

`func (o *JITActivationFrictionResponse) GetMinWords() int32`

GetMinWords returns the MinWords field if non-nil, zero value otherwise.

### GetMinWordsOk

`func (o *JITActivationFrictionResponse) GetMinWordsOk() (*int32, bool)`

GetMinWordsOk returns a tuple with the MinWords field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinWords

`func (o *JITActivationFrictionResponse) SetMinWords(v int32)`

SetMinWords sets MinWords field to given value.

### HasMinWords

`func (o *JITActivationFrictionResponse) HasMinWords() bool`

HasMinWords returns a boolean if a field has been set.


