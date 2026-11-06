# UpdateStreamConfigurationRequest

# UpdateStreamConfigurationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StreamId** | **string** | ID of the stream to update. | 
**Delivery** | Pointer to [**DeliveryRequest**](delivery-request) |  | [optional] 
**EventsRequested** | Pointer to **[]string** | Event types the receiver wants. Use CAEP event-type URIs. | [optional] 
**Description** | Pointer to **string** | Optional human-readable description of the stream. | [optional] 

## Methods

### NewUpdateStreamConfigurationRequest

`func NewUpdateStreamConfigurationRequest(streamId string, ) *UpdateStreamConfigurationRequest`

NewUpdateStreamConfigurationRequest instantiates a new UpdateStreamConfigurationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateStreamConfigurationRequestWithDefaults

`func NewUpdateStreamConfigurationRequestWithDefaults() *UpdateStreamConfigurationRequest`

NewUpdateStreamConfigurationRequestWithDefaults instantiates a new UpdateStreamConfigurationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStreamId

`func (o *UpdateStreamConfigurationRequest) GetStreamId() string`

GetStreamId returns the StreamId field if non-nil, zero value otherwise.

### GetStreamIdOk

`func (o *UpdateStreamConfigurationRequest) GetStreamIdOk() (*string, bool)`

GetStreamIdOk returns a tuple with the StreamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreamId

`func (o *UpdateStreamConfigurationRequest) SetStreamId(v string)`

SetStreamId sets StreamId field to given value.


### GetDelivery

`func (o *UpdateStreamConfigurationRequest) GetDelivery() DeliveryRequest`

GetDelivery returns the Delivery field if non-nil, zero value otherwise.

### GetDeliveryOk

`func (o *UpdateStreamConfigurationRequest) GetDeliveryOk() (*DeliveryRequest, bool)`

GetDeliveryOk returns a tuple with the Delivery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelivery

`func (o *UpdateStreamConfigurationRequest) SetDelivery(v DeliveryRequest)`

SetDelivery sets Delivery field to given value.

### HasDelivery

`func (o *UpdateStreamConfigurationRequest) HasDelivery() bool`

HasDelivery returns a boolean if a field has been set.

### GetEventsRequested

`func (o *UpdateStreamConfigurationRequest) GetEventsRequested() []string`

GetEventsRequested returns the EventsRequested field if non-nil, zero value otherwise.

### GetEventsRequestedOk

`func (o *UpdateStreamConfigurationRequest) GetEventsRequestedOk() (*[]string, bool)`

GetEventsRequestedOk returns a tuple with the EventsRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventsRequested

`func (o *UpdateStreamConfigurationRequest) SetEventsRequested(v []string)`

SetEventsRequested sets EventsRequested field to given value.

### HasEventsRequested

`func (o *UpdateStreamConfigurationRequest) HasEventsRequested() bool`

HasEventsRequested returns a boolean if a field has been set.

### GetDescription

`func (o *UpdateStreamConfigurationRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *UpdateStreamConfigurationRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *UpdateStreamConfigurationRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *UpdateStreamConfigurationRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


