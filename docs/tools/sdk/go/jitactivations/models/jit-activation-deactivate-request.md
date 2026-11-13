# JitActivationDeactivateRequest

# JitActivationDeactivateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionId** | **string** | Entitlement connection identifier for the activation to deactivate. | 
**RequestOrigin** | Pointer to **string** | Origin of the request. | [optional] 
**MetaData** | Pointer to [**JitActivationCallerMetadata**](jit-activation-caller-metadata) |  | [optional] 

## Methods

### NewJitActivationDeactivateRequest

`func NewJitActivationDeactivateRequest(connectionId string, ) *JitActivationDeactivateRequest`

NewJitActivationDeactivateRequest instantiates a new JitActivationDeactivateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJitActivationDeactivateRequestWithDefaults

`func NewJitActivationDeactivateRequestWithDefaults() *JitActivationDeactivateRequest`

NewJitActivationDeactivateRequestWithDefaults instantiates a new JitActivationDeactivateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConnectionId

`func (o *JitActivationDeactivateRequest) GetConnectionId() string`

GetConnectionId returns the ConnectionId field if non-nil, zero value otherwise.

### GetConnectionIdOk

`func (o *JitActivationDeactivateRequest) GetConnectionIdOk() (*string, bool)`

GetConnectionIdOk returns a tuple with the ConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionId

`func (o *JitActivationDeactivateRequest) SetConnectionId(v string)`

SetConnectionId sets ConnectionId field to given value.


### GetRequestOrigin

`func (o *JitActivationDeactivateRequest) GetRequestOrigin() string`

GetRequestOrigin returns the RequestOrigin field if non-nil, zero value otherwise.

### GetRequestOriginOk

`func (o *JitActivationDeactivateRequest) GetRequestOriginOk() (*string, bool)`

GetRequestOriginOk returns a tuple with the RequestOrigin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestOrigin

`func (o *JitActivationDeactivateRequest) SetRequestOrigin(v string)`

SetRequestOrigin sets RequestOrigin field to given value.

### HasRequestOrigin

`func (o *JitActivationDeactivateRequest) HasRequestOrigin() bool`

HasRequestOrigin returns a boolean if a field has been set.

### GetMetaData

`func (o *JitActivationDeactivateRequest) GetMetaData() JitActivationCallerMetadata`

GetMetaData returns the MetaData field if non-nil, zero value otherwise.

### GetMetaDataOk

`func (o *JitActivationDeactivateRequest) GetMetaDataOk() (*JitActivationCallerMetadata, bool)`

GetMetaDataOk returns a tuple with the MetaData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetaData

`func (o *JitActivationDeactivateRequest) SetMetaData(v JitActivationCallerMetadata)`

SetMetaData sets MetaData field to given value.

### HasMetaData

`func (o *JitActivationDeactivateRequest) HasMetaData() bool`

HasMetaData returns a boolean if a field has been set.


