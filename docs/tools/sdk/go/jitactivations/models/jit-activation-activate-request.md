# JitActivationActivateRequest

# JitActivationActivateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionId** | **string** | Entitlement connection identifier for the activation. | 
**ActivationPeriodMins** | **int32** | Requested activation duration in minutes. | 
**RequestOrigin** | Pointer to **string** | Origin of the request. | [optional] 
**MetaData** | Pointer to [**JitActivationCallerMetadata**](jit-activation-caller-metadata) |  | [optional] 

## Methods

### NewJitActivationActivateRequest

`func NewJitActivationActivateRequest(connectionId string, activationPeriodMins int32, ) *JitActivationActivateRequest`

NewJitActivationActivateRequest instantiates a new JitActivationActivateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJitActivationActivateRequestWithDefaults

`func NewJitActivationActivateRequestWithDefaults() *JitActivationActivateRequest`

NewJitActivationActivateRequestWithDefaults instantiates a new JitActivationActivateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConnectionId

`func (o *JitActivationActivateRequest) GetConnectionId() string`

GetConnectionId returns the ConnectionId field if non-nil, zero value otherwise.

### GetConnectionIdOk

`func (o *JitActivationActivateRequest) GetConnectionIdOk() (*string, bool)`

GetConnectionIdOk returns a tuple with the ConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionId

`func (o *JitActivationActivateRequest) SetConnectionId(v string)`

SetConnectionId sets ConnectionId field to given value.


### GetActivationPeriodMins

`func (o *JitActivationActivateRequest) GetActivationPeriodMins() int32`

GetActivationPeriodMins returns the ActivationPeriodMins field if non-nil, zero value otherwise.

### GetActivationPeriodMinsOk

`func (o *JitActivationActivateRequest) GetActivationPeriodMinsOk() (*int32, bool)`

GetActivationPeriodMinsOk returns a tuple with the ActivationPeriodMins field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivationPeriodMins

`func (o *JitActivationActivateRequest) SetActivationPeriodMins(v int32)`

SetActivationPeriodMins sets ActivationPeriodMins field to given value.


### GetRequestOrigin

`func (o *JitActivationActivateRequest) GetRequestOrigin() string`

GetRequestOrigin returns the RequestOrigin field if non-nil, zero value otherwise.

### GetRequestOriginOk

`func (o *JitActivationActivateRequest) GetRequestOriginOk() (*string, bool)`

GetRequestOriginOk returns a tuple with the RequestOrigin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestOrigin

`func (o *JitActivationActivateRequest) SetRequestOrigin(v string)`

SetRequestOrigin sets RequestOrigin field to given value.

### HasRequestOrigin

`func (o *JitActivationActivateRequest) HasRequestOrigin() bool`

HasRequestOrigin returns a boolean if a field has been set.

### GetMetaData

`func (o *JitActivationActivateRequest) GetMetaData() JitActivationCallerMetadata`

GetMetaData returns the MetaData field if non-nil, zero value otherwise.

### GetMetaDataOk

`func (o *JitActivationActivateRequest) GetMetaDataOk() (*JitActivationCallerMetadata, bool)`

GetMetaDataOk returns a tuple with the MetaData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetaData

`func (o *JitActivationActivateRequest) SetMetaData(v JitActivationCallerMetadata)`

SetMetaData sets MetaData field to given value.

### HasMetaData

`func (o *JitActivationActivateRequest) HasMetaData() bool`

HasMetaData returns a boolean if a field has been set.


