# JITActivationFrictionPatchRequest

# JITActivationFrictionPatchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **JITActivationFrictionType** | Kind of friction step being submitted. | 
**SubmittedData** | Pointer to [**FrictionSubmittedData**](friction-submitted-data) | Data submitted for this friction step. Omit when bypassing a step that allows bypass. | [optional] 
**Bypass** | Pointer to **NullableBool** | Whether to bypass this friction step. | [optional] [default to false]

## Methods

### NewJITActivationFrictionPatchRequest

`func NewJITActivationFrictionPatchRequest(type_ JITActivationFrictionType, ) *JITActivationFrictionPatchRequest`

NewJITActivationFrictionPatchRequest instantiates a new JITActivationFrictionPatchRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJITActivationFrictionPatchRequestWithDefaults

`func NewJITActivationFrictionPatchRequestWithDefaults() *JITActivationFrictionPatchRequest`

NewJITActivationFrictionPatchRequestWithDefaults instantiates a new JITActivationFrictionPatchRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *JITActivationFrictionPatchRequest) GetType() JITActivationFrictionType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *JITActivationFrictionPatchRequest) GetTypeOk() (*JITActivationFrictionType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *JITActivationFrictionPatchRequest) SetType(v JITActivationFrictionType)`

SetType sets Type field to given value.


### GetSubmittedData

`func (o *JITActivationFrictionPatchRequest) GetSubmittedData() FrictionSubmittedData`

GetSubmittedData returns the SubmittedData field if non-nil, zero value otherwise.

### GetSubmittedDataOk

`func (o *JITActivationFrictionPatchRequest) GetSubmittedDataOk() (*FrictionSubmittedData, bool)`

GetSubmittedDataOk returns a tuple with the SubmittedData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubmittedData

`func (o *JITActivationFrictionPatchRequest) SetSubmittedData(v FrictionSubmittedData)`

SetSubmittedData sets SubmittedData field to given value.

### HasSubmittedData

`func (o *JITActivationFrictionPatchRequest) HasSubmittedData() bool`

HasSubmittedData returns a boolean if a field has been set.

### GetBypass

`func (o *JITActivationFrictionPatchRequest) GetBypass() bool`

GetBypass returns the Bypass field if non-nil, zero value otherwise.

### GetBypassOk

`func (o *JITActivationFrictionPatchRequest) GetBypassOk() (*bool, bool)`

GetBypassOk returns a tuple with the Bypass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBypass

`func (o *JITActivationFrictionPatchRequest) SetBypass(v bool)`

SetBypass sets Bypass field to given value.

### HasBypass

`func (o *JITActivationFrictionPatchRequest) HasBypass() bool`

HasBypass returns a boolean if a field has been set.

### SetBypassNil

`func (o *JITActivationFrictionPatchRequest) SetBypassNil(b bool)`

 SetBypassNil sets the value for Bypass to be an explicit nil

### UnsetBypass
`func (o *JITActivationFrictionPatchRequest) UnsetBypass()`

UnsetBypass ensures that no value is present for Bypass, not even an explicit nil

