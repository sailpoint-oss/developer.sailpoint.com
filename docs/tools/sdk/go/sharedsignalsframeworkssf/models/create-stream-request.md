# CreateStreamRequest

# CreateStreamRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Delivery** | [**CreateStreamDeliveryRequest**](create-stream-delivery-request) |  | 
**EventsRequested** | Pointer to **[]string** | Optional list of event types the receiver wants. Use CAEP event-type URIs in the form: `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session revoke).  | [optional] 
**Description** | Pointer to **string** | Optional human-readable description of the stream. | [optional] 

## Methods

### NewCreateStreamRequest

`func NewCreateStreamRequest(delivery CreateStreamDeliveryRequest, ) *CreateStreamRequest`

NewCreateStreamRequest instantiates a new CreateStreamRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateStreamRequestWithDefaults

`func NewCreateStreamRequestWithDefaults() *CreateStreamRequest`

NewCreateStreamRequestWithDefaults instantiates a new CreateStreamRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDelivery

`func (o *CreateStreamRequest) GetDelivery() CreateStreamDeliveryRequest`

GetDelivery returns the Delivery field if non-nil, zero value otherwise.

### GetDeliveryOk

`func (o *CreateStreamRequest) GetDeliveryOk() (*CreateStreamDeliveryRequest, bool)`

GetDeliveryOk returns a tuple with the Delivery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelivery

`func (o *CreateStreamRequest) SetDelivery(v CreateStreamDeliveryRequest)`

SetDelivery sets Delivery field to given value.


### GetEventsRequested

`func (o *CreateStreamRequest) GetEventsRequested() []string`

GetEventsRequested returns the EventsRequested field if non-nil, zero value otherwise.

### GetEventsRequestedOk

`func (o *CreateStreamRequest) GetEventsRequestedOk() (*[]string, bool)`

GetEventsRequestedOk returns a tuple with the EventsRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventsRequested

`func (o *CreateStreamRequest) SetEventsRequested(v []string)`

SetEventsRequested sets EventsRequested field to given value.

### HasEventsRequested

`func (o *CreateStreamRequest) HasEventsRequested() bool`

HasEventsRequested returns a boolean if a field has been set.

### GetDescription

`func (o *CreateStreamRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateStreamRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateStreamRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CreateStreamRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


