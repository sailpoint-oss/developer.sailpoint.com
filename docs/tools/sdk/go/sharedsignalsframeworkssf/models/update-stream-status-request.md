# UpdateStreamStatusRequest

# UpdateStreamStatusRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StreamId** | **string** | ID of the stream whose status to update. | 
**Status** | **string** | Desired stream status. | 
**Reason** | Pointer to **string** | Optional reason for the status change. | [optional] 

## Methods

### NewUpdateStreamStatusRequest

`func NewUpdateStreamStatusRequest(streamId string, status string, ) *UpdateStreamStatusRequest`

NewUpdateStreamStatusRequest instantiates a new UpdateStreamStatusRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateStreamStatusRequestWithDefaults

`func NewUpdateStreamStatusRequestWithDefaults() *UpdateStreamStatusRequest`

NewUpdateStreamStatusRequestWithDefaults instantiates a new UpdateStreamStatusRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStreamId

`func (o *UpdateStreamStatusRequest) GetStreamId() string`

GetStreamId returns the StreamId field if non-nil, zero value otherwise.

### GetStreamIdOk

`func (o *UpdateStreamStatusRequest) GetStreamIdOk() (*string, bool)`

GetStreamIdOk returns a tuple with the StreamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreamId

`func (o *UpdateStreamStatusRequest) SetStreamId(v string)`

SetStreamId sets StreamId field to given value.


### GetStatus

`func (o *UpdateStreamStatusRequest) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *UpdateStreamStatusRequest) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *UpdateStreamStatusRequest) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetReason

`func (o *UpdateStreamStatusRequest) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *UpdateStreamStatusRequest) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *UpdateStreamStatusRequest) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *UpdateStreamStatusRequest) HasReason() bool`

HasReason returns a boolean if a field has been set.


