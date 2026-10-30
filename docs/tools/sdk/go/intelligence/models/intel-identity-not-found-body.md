# IntelIdentityNotFoundBody

# IntelIdentityNotFoundBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | **string** | Constant detail code indicating that no identity matched the supplied filter. | 
**TrackingId** | Pointer to **string** | Unique tracking id for the error. | [optional] 
**Messages** | Pointer to [**[]ErrorMessageDto**](error-message-dto) | Generic localized reason for error | [optional] 
**Causes** | Pointer to [**[]ErrorMessageDto**](error-message-dto) | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [optional] 

## Methods

### NewIntelIdentityNotFoundBody

`func NewIntelIdentityNotFoundBody(detailCode string, ) *IntelIdentityNotFoundBody`

NewIntelIdentityNotFoundBody instantiates a new IntelIdentityNotFoundBody object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelIdentityNotFoundBodyWithDefaults

`func NewIntelIdentityNotFoundBodyWithDefaults() *IntelIdentityNotFoundBody`

NewIntelIdentityNotFoundBodyWithDefaults instantiates a new IntelIdentityNotFoundBody object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetailCode

`func (o *IntelIdentityNotFoundBody) GetDetailCode() string`

GetDetailCode returns the DetailCode field if non-nil, zero value otherwise.

### GetDetailCodeOk

`func (o *IntelIdentityNotFoundBody) GetDetailCodeOk() (*string, bool)`

GetDetailCodeOk returns a tuple with the DetailCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailCode

`func (o *IntelIdentityNotFoundBody) SetDetailCode(v string)`

SetDetailCode sets DetailCode field to given value.


### GetTrackingId

`func (o *IntelIdentityNotFoundBody) GetTrackingId() string`

GetTrackingId returns the TrackingId field if non-nil, zero value otherwise.

### GetTrackingIdOk

`func (o *IntelIdentityNotFoundBody) GetTrackingIdOk() (*string, bool)`

GetTrackingIdOk returns a tuple with the TrackingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingId

`func (o *IntelIdentityNotFoundBody) SetTrackingId(v string)`

SetTrackingId sets TrackingId field to given value.

### HasTrackingId

`func (o *IntelIdentityNotFoundBody) HasTrackingId() bool`

HasTrackingId returns a boolean if a field has been set.

### GetMessages

`func (o *IntelIdentityNotFoundBody) GetMessages() []ErrorMessageDto`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *IntelIdentityNotFoundBody) GetMessagesOk() (*[]ErrorMessageDto, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *IntelIdentityNotFoundBody) SetMessages(v []ErrorMessageDto)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *IntelIdentityNotFoundBody) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetCauses

`func (o *IntelIdentityNotFoundBody) GetCauses() []ErrorMessageDto`

GetCauses returns the Causes field if non-nil, zero value otherwise.

### GetCausesOk

`func (o *IntelIdentityNotFoundBody) GetCausesOk() (*[]ErrorMessageDto, bool)`

GetCausesOk returns a tuple with the Causes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCauses

`func (o *IntelIdentityNotFoundBody) SetCauses(v []ErrorMessageDto)`

SetCauses sets Causes field to given value.

### HasCauses

`func (o *IntelIdentityNotFoundBody) HasCauses() bool`

HasCauses returns a boolean if a field has been set.


