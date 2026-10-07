# VerificationRequest

# VerificationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StreamId** | **string** | Stream ID for verification. | 
**State** | Pointer to **string** | Optional state value for verification challenge. | [optional] 

## Methods

### NewVerificationRequest

`func NewVerificationRequest(streamId string, ) *VerificationRequest`

NewVerificationRequest instantiates a new VerificationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVerificationRequestWithDefaults

`func NewVerificationRequestWithDefaults() *VerificationRequest`

NewVerificationRequestWithDefaults instantiates a new VerificationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStreamId

`func (o *VerificationRequest) GetStreamId() string`

GetStreamId returns the StreamId field if non-nil, zero value otherwise.

### GetStreamIdOk

`func (o *VerificationRequest) GetStreamIdOk() (*string, bool)`

GetStreamIdOk returns a tuple with the StreamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreamId

`func (o *VerificationRequest) SetStreamId(v string)`

SetStreamId sets StreamId field to given value.


### GetState

`func (o *VerificationRequest) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *VerificationRequest) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *VerificationRequest) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *VerificationRequest) HasState() bool`

HasState returns a boolean if a field has been set.


