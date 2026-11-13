# ReplaceStreamConfigurationRequest

# ReplaceStreamConfigurationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StreamId** | **string** | ID of the stream to replace. | 
**Delivery** | [**ReplaceStreamConfigurationRequestDelivery**](replace-stream-configuration-request-delivery) |  | 
**EventsRequested** | Pointer to **[]string** | Event types the receiver wants. Use CAEP event-type URIs. | [optional] 
**Description** | Pointer to **string** | Optional human-readable description of the stream. | [optional] 

## Methods

### NewReplaceStreamConfigurationRequest

`func NewReplaceStreamConfigurationRequest(streamId string, delivery ReplaceStreamConfigurationRequestDelivery, ) *ReplaceStreamConfigurationRequest`

NewReplaceStreamConfigurationRequest instantiates a new ReplaceStreamConfigurationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReplaceStreamConfigurationRequestWithDefaults

`func NewReplaceStreamConfigurationRequestWithDefaults() *ReplaceStreamConfigurationRequest`

NewReplaceStreamConfigurationRequestWithDefaults instantiates a new ReplaceStreamConfigurationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStreamId

`func (o *ReplaceStreamConfigurationRequest) GetStreamId() string`

GetStreamId returns the StreamId field if non-nil, zero value otherwise.

### GetStreamIdOk

`func (o *ReplaceStreamConfigurationRequest) GetStreamIdOk() (*string, bool)`

GetStreamIdOk returns a tuple with the StreamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreamId

`func (o *ReplaceStreamConfigurationRequest) SetStreamId(v string)`

SetStreamId sets StreamId field to given value.


### GetDelivery

`func (o *ReplaceStreamConfigurationRequest) GetDelivery() ReplaceStreamConfigurationRequestDelivery`

GetDelivery returns the Delivery field if non-nil, zero value otherwise.

### GetDeliveryOk

`func (o *ReplaceStreamConfigurationRequest) GetDeliveryOk() (*ReplaceStreamConfigurationRequestDelivery, bool)`

GetDeliveryOk returns a tuple with the Delivery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelivery

`func (o *ReplaceStreamConfigurationRequest) SetDelivery(v ReplaceStreamConfigurationRequestDelivery)`

SetDelivery sets Delivery field to given value.


### GetEventsRequested

`func (o *ReplaceStreamConfigurationRequest) GetEventsRequested() []string`

GetEventsRequested returns the EventsRequested field if non-nil, zero value otherwise.

### GetEventsRequestedOk

`func (o *ReplaceStreamConfigurationRequest) GetEventsRequestedOk() (*[]string, bool)`

GetEventsRequestedOk returns a tuple with the EventsRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventsRequested

`func (o *ReplaceStreamConfigurationRequest) SetEventsRequested(v []string)`

SetEventsRequested sets EventsRequested field to given value.

### HasEventsRequested

`func (o *ReplaceStreamConfigurationRequest) HasEventsRequested() bool`

HasEventsRequested returns a boolean if a field has been set.

### GetDescription

`func (o *ReplaceStreamConfigurationRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ReplaceStreamConfigurationRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ReplaceStreamConfigurationRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ReplaceStreamConfigurationRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


