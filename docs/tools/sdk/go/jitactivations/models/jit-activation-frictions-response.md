# JITActivationFrictionsResponse

# JITActivationFrictionsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivationId** | **NullableString** | Identifier of the activation. | 
**FrictionState** | **NullableJITActivationFrictionState** | Aggregate friction state of the activation. | 
**ConnectionId** | **NullableString** | Identifier of the entitlement connection. | 
**ActivationInitTime** | **NullableTime** | Time the activation started. | 
**ExpiryMins** | **string** | Minutes allowed to complete all frictions. | 
**Frictions** | [**[]JITActivationFrictionResponse**](jit-activation-friction-response) | Friction steps for the activation. | 

## Methods

### NewJITActivationFrictionsResponse

`func NewJITActivationFrictionsResponse(activationId NullableString, frictionState NullableJITActivationFrictionState, connectionId NullableString, activationInitTime NullableTime, expiryMins string, frictions []JITActivationFrictionResponse, ) *JITActivationFrictionsResponse`

NewJITActivationFrictionsResponse instantiates a new JITActivationFrictionsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJITActivationFrictionsResponseWithDefaults

`func NewJITActivationFrictionsResponseWithDefaults() *JITActivationFrictionsResponse`

NewJITActivationFrictionsResponseWithDefaults instantiates a new JITActivationFrictionsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivationId

`func (o *JITActivationFrictionsResponse) GetActivationId() string`

GetActivationId returns the ActivationId field if non-nil, zero value otherwise.

### GetActivationIdOk

`func (o *JITActivationFrictionsResponse) GetActivationIdOk() (*string, bool)`

GetActivationIdOk returns a tuple with the ActivationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivationId

`func (o *JITActivationFrictionsResponse) SetActivationId(v string)`

SetActivationId sets ActivationId field to given value.


### SetActivationIdNil

`func (o *JITActivationFrictionsResponse) SetActivationIdNil(b bool)`

 SetActivationIdNil sets the value for ActivationId to be an explicit nil

### UnsetActivationId
`func (o *JITActivationFrictionsResponse) UnsetActivationId()`

UnsetActivationId ensures that no value is present for ActivationId, not even an explicit nil
### GetFrictionState

`func (o *JITActivationFrictionsResponse) GetFrictionState() JITActivationFrictionState`

GetFrictionState returns the FrictionState field if non-nil, zero value otherwise.

### GetFrictionStateOk

`func (o *JITActivationFrictionsResponse) GetFrictionStateOk() (*JITActivationFrictionState, bool)`

GetFrictionStateOk returns a tuple with the FrictionState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrictionState

`func (o *JITActivationFrictionsResponse) SetFrictionState(v JITActivationFrictionState)`

SetFrictionState sets FrictionState field to given value.


### SetFrictionStateNil

`func (o *JITActivationFrictionsResponse) SetFrictionStateNil(b bool)`

 SetFrictionStateNil sets the value for FrictionState to be an explicit nil

### UnsetFrictionState
`func (o *JITActivationFrictionsResponse) UnsetFrictionState()`

UnsetFrictionState ensures that no value is present for FrictionState, not even an explicit nil
### GetConnectionId

`func (o *JITActivationFrictionsResponse) GetConnectionId() string`

GetConnectionId returns the ConnectionId field if non-nil, zero value otherwise.

### GetConnectionIdOk

`func (o *JITActivationFrictionsResponse) GetConnectionIdOk() (*string, bool)`

GetConnectionIdOk returns a tuple with the ConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionId

`func (o *JITActivationFrictionsResponse) SetConnectionId(v string)`

SetConnectionId sets ConnectionId field to given value.


### SetConnectionIdNil

`func (o *JITActivationFrictionsResponse) SetConnectionIdNil(b bool)`

 SetConnectionIdNil sets the value for ConnectionId to be an explicit nil

### UnsetConnectionId
`func (o *JITActivationFrictionsResponse) UnsetConnectionId()`

UnsetConnectionId ensures that no value is present for ConnectionId, not even an explicit nil
### GetActivationInitTime

`func (o *JITActivationFrictionsResponse) GetActivationInitTime() SailPointTime`

GetActivationInitTime returns the ActivationInitTime field if non-nil, zero value otherwise.

### GetActivationInitTimeOk

`func (o *JITActivationFrictionsResponse) GetActivationInitTimeOk() (*SailPointTime, bool)`

GetActivationInitTimeOk returns a tuple with the ActivationInitTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivationInitTime

`func (o *JITActivationFrictionsResponse) SetActivationInitTime(v SailPointTime)`

SetActivationInitTime sets ActivationInitTime field to given value.


### SetActivationInitTimeNil

`func (o *JITActivationFrictionsResponse) SetActivationInitTimeNil(b bool)`

 SetActivationInitTimeNil sets the value for ActivationInitTime to be an explicit nil

### UnsetActivationInitTime
`func (o *JITActivationFrictionsResponse) UnsetActivationInitTime()`

UnsetActivationInitTime ensures that no value is present for ActivationInitTime, not even an explicit nil
### GetExpiryMins

`func (o *JITActivationFrictionsResponse) GetExpiryMins() string`

GetExpiryMins returns the ExpiryMins field if non-nil, zero value otherwise.

### GetExpiryMinsOk

`func (o *JITActivationFrictionsResponse) GetExpiryMinsOk() (*string, bool)`

GetExpiryMinsOk returns a tuple with the ExpiryMins field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiryMins

`func (o *JITActivationFrictionsResponse) SetExpiryMins(v string)`

SetExpiryMins sets ExpiryMins field to given value.


### GetFrictions

`func (o *JITActivationFrictionsResponse) GetFrictions() []JITActivationFrictionResponse`

GetFrictions returns the Frictions field if non-nil, zero value otherwise.

### GetFrictionsOk

`func (o *JITActivationFrictionsResponse) GetFrictionsOk() (*[]JITActivationFrictionResponse, bool)`

GetFrictionsOk returns a tuple with the Frictions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrictions

`func (o *JITActivationFrictionsResponse) SetFrictions(v []JITActivationFrictionResponse)`

SetFrictions sets Frictions field to given value.



